'use client'

import { pathologyData } from '@/mocks/pathology-data'
import { PathologyDetailsSheet } from './pathology-details-sheet'
import { Separator } from '@/components/ui/separator'
import { useAnalysisResults } from '@/hooks/use-analysis-results'

interface AnalysisResultsProps {
  showResults: boolean
}

export function AnalysisResults({ showResults }: AnalysisResultsProps) {
  const { analysisResults } = useAnalysisResults()

  return (
    <>
      {showResults && analysisResults ? (
        <>
          <Separator />

          <div className="space-y-5">
            <h1 className="text-2xl font-bold">Análise dos resultados</h1>

            {pathologyData.map((pathology) => {
              return (
                <div key={pathology.name} className="space-y-3">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between gap-3">
                      <p>{pathology.displayName}</p>
                      <div className="text-sm space-x-1">
                        <span className="font-medium">
                          {pathology.percentage}
                        </span>
                        <span className="text-muted-foreground text-xs">%</span>
                      </div>
                    </div>

                    <div className="w-full bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-1.5 bg-primary"
                        style={{ width: `${pathology.percentage}%` }}
                      />
                    </div>
                  </div>

                  {pathology.percentage > 50 && (
                    <PathologyDetailsSheet pathology={pathology} />
                  )}
                </div>
              )
            })}
          </div>
        </>
      ) : null}
    </>
  )
}
