'use client'

import { AnalysisResponse } from '@/http/api-client'
import { useState } from 'react'

export function useAnalysisResults() {
  const [analysisResults, setAnalysisResults] = useState<AnalysisResponse>()

  return {
    analysisResults,
    setAnalysisResults,
  }
}
