'use server'

import apiService from '@/http/api-client'
import { pathologyData } from '@/mocks/pathology-data'
import { cookies } from 'next/headers'

export async function uploadImageAction(file: File) {
  const cookie = await cookies()

  const response = await apiService.analyzeImage(file)

  const updatedPathologyData = pathologyData.map((pathology) => ({
    ...pathology,
    percentage: Math.round((response.predictions[pathology.name] || 0) * 100),
  }))

  cookie.set('showResults', 'true')

  return {
    response,
    updatedPathologyData,
  }
}
