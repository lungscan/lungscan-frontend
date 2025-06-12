'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState, DragEvent } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Image as ImageIcon, Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import apiService from '@/http/api-client'
import { pathologyData } from '@/mocks/pathology-data'
import { uploadImageAction } from '../actions'
import Cookies from 'js-cookie'
import { useAnalysisResults } from '@/hooks/use-analysis-results'

const schema = z.object({
  file: z.instanceof(File),
})

type FormData = z.infer<typeof schema>

export function UploadFileForm() {
  const { setAnalysisResults } = useAnalysisResults()

  const {
    register,
    handleSubmit,
    setValue,
    resetField,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const [highlight, setHighlight] = useState(false)
  const [fileName, setFileName] = useState('')
  const [preview, setPreview] = useState<string | null>(null)

  async function handleUploadImage({ file }: FormData) {
    try {
      const { response, updatedPathologyData } = await uploadImageAction(file)

      setAnalysisResults({
        success: true,
        predictions: response.predictions,
        pathologies_detected: response.pathologies_detected,
        model_info: response.model_info,
      })

      pathologyData.splice(0, pathologyData.length, ...updatedPathologyData)

      toast.success('Análise concluida com sucesso')
    } catch (error) {
      if (
        error instanceof Error ? error.message : 'Erro analisar imagem enviada!'
      ) {
        toast.error('Erro analisar imagem enviada!')
      }
    }
  }

  async function handleUploadAleatoryImage() {
    try {
      const response = await apiService.getRandomImage()

      const defaultImage = apiService.base64ToFile(
        response.image_base64,
        'synthetic-lung-xray.png',
      )

      setValue('file', defaultImage, { shouldValidate: true })
      setHighlight(true)
      setFileName(defaultImage.name)
      setPreview(URL.createObjectURL(defaultImage))

      toast.success('Imagem aleatória gerada com sucesso')
    } catch (error) {
      if (
        error instanceof Error
          ? error.message
          : 'Erro ao gerar imagem aleatória!'
      ) {
        toast.error('Erro ao gerar imagem aleatória!')
      }
    }
  }

  function handleDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault()

    const file = event.dataTransfer.files?.[0]

    if (file) {
      setValue('file', file, { shouldValidate: true })
      setFileName(file.name)
      setPreview(URL.createObjectURL(file))
      setHighlight(true)
    }

    Cookies.remove('showResults')
  }

  function handleDragOver(event: DragEvent<HTMLDivElement>) {
    event.preventDefault()
    setHighlight(true)

    Cookies.remove('showResults')
  }

  function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]

    if (file) {
      setValue('file', file, { shouldValidate: true })
      setFileName(file.name)
      setPreview(URL.createObjectURL(file))
      setHighlight(true)
    }

    Cookies.remove('showResults')
  }

  function clearFile() {
    resetField('file')
    setFileName('')
    setPreview(null)
    setHighlight(false)

    Cookies.remove('showResults')
  }

  return (
    <form onSubmit={handleSubmit(handleUploadImage)} className="space-y-4">
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={() => setHighlight(false)}
        className={cn(
          'h-80 p-3 flex flex-col items-center justify-center border-2 border-dashed rounded-md transition-colors bg-muted/40 text-center cursor-pointer',
          highlight
            ? 'border-primary bg-primary/10 border-solid'
            : 'border-zinc-300 dark:border-muted',
          errors?.file && 'border-destructive bg-destructive/10',
        )}
      >
        <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer gap-2">
          <input
            type="file"
            className="hidden"
            {...register('file')}
            onChange={onFileChange}
            accept="image/png, image/jpeg, image/jpg"
          />

          {preview ? (
            <>
              <img
                src={preview}
                alt="preview"
                className="max-h-48 object-contain mb-2"
                onLoad={() => URL.revokeObjectURL(preview)}
              />

              <span className="text-sm text-muted-foreground">
                {fileName ||
                  'Arraste e solte uma imagem ou clique para selecionar'}
              </span>
            </>
          ) : errors?.file ? (
            <p className="text-sm text-destructive">
              Selecione uma imagem válida para continuar
            </p>
          ) : (
            <>
              <ImageIcon className="size-10 text-primary" />
              <span className="text-sm">
                Arraste e solte uma imagem ou clique para selecionar
              </span>
              <span className="text-xs text-muted-foreground">
                (PNG, JPEG, JPG)
              </span>
            </>
          )}
        </label>
      </div>

      <div className="space-y-2">
        {preview && (
          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={clearFile}
          >
            Limpar imagem
          </Button>
        )}

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            'Enviar imagem'
          )}
        </Button>

        <Button
          type="button"
          variant="ghost"
          className="w-full"
          onClick={handleUploadAleatoryImage}
        >
          Gerar imagem aleatória
        </Button>
      </div>
    </form>
  )
}
