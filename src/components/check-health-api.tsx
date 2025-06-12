'use client'

import apiService from '@/http/api-client'
import { Wifi, WifiOff } from 'lucide-react'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

export function CheckHealthApi() {
  const [isConnected, setIsConnected] = useState<boolean | null>(null)

  useEffect(() => {
    checkApiConnection()
  }, [])

  const checkApiConnection = async () => {
    try {
      await apiService.checkHealth()

      setIsConnected(true)
    } catch (error) {
      if (
        error instanceof Error
          ? error.message
          : 'Erro ao se conectar no servidor!'
      ) {
        setIsConnected(false)

        toast.error('Erro ao se conectar no servidor!')
      }
    }
  }

  return (
    <div className="flex items-center gap-2 px-0.5">
      {isConnected ? (
        <Wifi className="size-3 text-green-600 dark:text-green-500" />
      ) : (
        <WifiOff className="size-3 text-destructive" />
      )}
      {isConnected ? (
        <span className="text-xs text-green-600 dark:text-green-500">
          Conectado
        </span>
      ) : (
        <span className="text-xs text-destructive">Desconectado</span>
      )}
    </div>
  )
}
