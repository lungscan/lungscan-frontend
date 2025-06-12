import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AlertTriangle } from 'lucide-react'
import { UploadFileForm } from './_components/upload-file-form'
import { AnalysisResults } from './_components/analysis-results'
import { Separator } from '@/components/ui/separator'

export default function Home() {
  const result = true

  return (
    <main className="space-y-5">
      <h1 className="text-2xl font-bold">Envio seu Raio-X para o Lungscan</h1>

      <Alert variant="destructive">
        <AlertTriangle className="size-4" />
        <AlertTitle>Importante!</AlertTitle>
        <AlertDescription>
          Esta ferramenta destina-se apenas a fins de pesquisa. Os resultados
          não constituem um diagnóstico médico. Consulte sempre profissionais de
          saúde qualificados e submeta-se a exames médicos adequados para
          quaisquer problemas de saúde.
        </AlertDescription>
      </Alert>

      <UploadFileForm />

      {result && (
        <>
          <Separator />
          <AnalysisResults />
        </>
      )}
    </main>
  )
}
