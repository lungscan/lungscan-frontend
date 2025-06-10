import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AlertTriangle } from 'lucide-react'
import { UploadFileForm } from './_components/upload-file-form'
import { AnalysisResults } from './_components/analysis-results'
import { Separator } from '@/components/ui/separator'

export default function Home() {
  const result = true

  return (
    <main className="space-y-5">
      <h1 className="text-2xl font-bold">Send your X-Ray to Lungscan</h1>

      <Alert variant="destructive">
        <AlertTriangle className="size-4" />
        <AlertTitle>Important!</AlertTitle>
        <AlertDescription>
          This tool is for research purposes only. The results do not constitute
          a medical diagnosis. Always consult qualified healthcare professionals
          and undergo appropriate medical examinations for any health concerns.
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
