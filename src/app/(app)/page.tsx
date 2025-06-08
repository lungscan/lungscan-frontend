import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AlertTriangle } from 'lucide-react'
import { UploadFileForm } from './_components/upload-file-form'

export default function Home() {
  return (
    <main className="space-y-5">
      <Alert variant="destructive">
        <AlertTriangle className="size-4" />
        <AlertTitle>Important!</AlertTitle>
        <AlertDescription>
          This tool is for research purposes only. The results do not constitute
          a medical diagnosis. Always consult qualified healthcare professionals
          and undergo appropriate medical examinations for any health concerns.
        </AlertDescription>
      </Alert>

      <h1 className="text-xl font-bold">Send your X-Ray to Lungscan</h1>

      <UploadFileForm />
    </main>
  )
}
