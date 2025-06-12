'use client'

import { AnalysisResponse } from '@/http/api-client'
import { useState } from 'react'
import { UploadFileForm } from './upload-file-form'
import { AnalysisResults } from './analysis-results'

interface ClientWrapperProps {
  showResults: boolean
}

export function ClientWrapper({ showResults }: ClientWrapperProps) {
  const [analysisResults, setAnalysisResults] = useState<AnalysisResponse>()

  return (
    <>
      <UploadFileForm onUploadSuccess={setAnalysisResults} />
      <AnalysisResults showResults={showResults} data={analysisResults} />
    </>
  )
}
