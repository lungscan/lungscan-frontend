import axios from 'axios'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL

const api = axios.create({
  baseURL: `${API_BASE_URL}/api/v1`,
  headers: {
    'Content-Type': 'application/json',
  },
})

export interface AnalysisResponse {
  success: boolean
  predictions: Record<string, number>
  pathologies_detected: Record<string, number>
  model_info: {
    model_name: string
    total_pathologies: number
  }
}

export interface RandomImageResponse {
  success: boolean
  dataset: string
  image_index: number
  image_base64: string
  image_format: string
  image_size: [number, number]
  metadata: Record<string, unknown>
  analysis?: {
    predictions: Record<string, number>
    pathologies_detected: Record<string, number>
    model_info: {
      model_name: string
      total_pathologies: number
    }
  }
}

export interface HealthResponse {
  status: string
  service: string
  model_loaded: boolean
}

export interface PathologiesResponse {
  success: boolean
  pathologies: string[]
  count: number
}

export const apiService = {
  async checkHealth(): Promise<HealthResponse> {
    try {
      const response = await api.get('/health')
      return response.data
    } catch (error) {
      console.error('Erro ao verificar saúde da API:', error)
      throw new Error('Não foi possível conectar com o servidor')
    }
  },

  async analyzeImage(imageFile: File): Promise<AnalysisResponse> {
    try {
      const formData = new FormData()
      formData.append('image', imageFile)

      const response = await api.post('/analyze', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      return response.data
    } catch (error: unknown) {
      console.error('Erro ao analisar imagem:', error)
      if (axios.isAxiosError(error) && error.response?.data?.message) {
        throw new Error(error.response.data.message)
      }
      throw new Error('Erro ao analisar a imagem')
    }
  },

  async getRandomImage(analyze: boolean = false): Promise<RandomImageResponse> {
    try {
      const response = await api.get('/random-image', {
        params: { analyze: analyze.toString() },
        responseType: 'arraybuffer', // Handle binary response
      })

      // Check if response is a PNG file (check for PNG header)
      const buffer = new Uint8Array(response.data)
      const isPNG =
        buffer[0] === 0x89 &&
        buffer[1] === 0x50 &&
        buffer[2] === 0x4e &&
        buffer[3] === 0x47

      if (isPNG) {
        // Convert binary data to base64
        const base64 = btoa(
          new Uint8Array(response.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            '',
          ),
        )

        return {
          success: true,
          dataset: 'synthetic',
          image_index: 0,
          image_base64: base64,
          image_format: 'image/png',
          image_size: [0, 0], // Size will be determined when image is loaded
          metadata: {},
        }
      }

      // If not PNG, try to parse as JSON
      const textDecoder = new TextDecoder('utf-8')
      const jsonText = textDecoder.decode(response.data)
      const jsonData = JSON.parse(jsonText)

      if (!jsonData.image_base64) {
        throw new Error(
          'Resposta inválida da API: imagem base64 não encontrada',
        )
      }

      return jsonData
    } catch (error: unknown) {
      console.error('Erro ao obter imagem sintética:', error)
      if (axios.isAxiosError(error) && error.response?.data?.message) {
        throw new Error(error.response.data.message)
      }
      throw new Error('Erro ao gerar imagem de teste')
    }
  },

  async getPathologies(): Promise<PathologiesResponse> {
    try {
      const response = await api.get('/pathologies')
      return response.data
    } catch (error: unknown) {
      console.error('Erro ao obter patologias:', error)
      if (axios.isAxiosError(error) && error.response?.data?.message) {
        throw new Error(error.response.data.message)
      }
      throw new Error('Erro ao obter lista de patologias')
    }
  },

  base64ToFile(base64: string, filename = 'image.png'): File {
    if (base64.startsWith('data:')) {
      const arr = base64.split(',')
      const mime = arr[0].match(/:(.*?);/)?.[1] ?? 'image/png'
      const bstr = atob(arr[1])
      const u8arr = new Uint8Array(bstr.length)

      for (let i = 0; i < bstr.length; i++) {
        u8arr[i] = bstr.charCodeAt(i)
      }

      return new File([u8arr], filename, { type: mime })
    } else {
      // base64 sem prefixo
      const bstr = atob(base64)
      const u8arr = new Uint8Array(bstr.length)

      for (let i = 0; i < bstr.length; i++) {
        u8arr[i] = bstr.charCodeAt(i)
      }

      return new File([u8arr], filename, { type: 'image/png' })
    }
  },

  async fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          resolve(reader.result.split(',')[1])
        } else {
          reject(new Error('Erro ao converter arquivo para base64'))
        }
      }
      reader.onerror = () => reject(new Error('Erro ao ler arquivo'))
    })
  },
}

export default apiService
