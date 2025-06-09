import { Button } from '@/components/ui/button'
import { CircleAlert } from 'lucide-react'
import { randomInt } from 'node:crypto'

export function AnalysisResults() {
  const percentage = randomInt(0, 100)
  const percentage2 = randomInt(0, 100)

  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-bold">Analysis results</h1>

      <div className="space-y-3">
        <div className="space-y-1 5">
          <div className="flex items-center justify-between gap-3">
            <p>Pathology example</p>
            <div className="text-sm space-x-1">
              <span className="font-medium">{percentage}</span>
              <span className="text-muted-foreground text-xs">%</span>
            </div>
          </div>

          <div className="w-full bg-muted rounded-full overflow-hidden">
            <div
              className="h-1.5 bg-primary"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>

        {percentage > 50 && (
          <Button size="sm" variant="secondary" className="w-full">
            <CircleAlert className="size-4" />
            View this pathology details
          </Button>
        )}
      </div>

      <div className="space-y-3">
        <div className="space-y-1 5">
          <div className="flex items-center justify-between gap-3">
            <p>Pathology example</p>
            <div className="text-sm space-x-1">
              <span className="font-medium">{percentage2}</span>
              <span className="text-muted-foreground text-xs">%</span>
            </div>
          </div>

          <div className="w-full bg-muted rounded-full overflow-hidden">
            <div
              className="h-1.5 bg-primary"
              style={{ width: `${percentage2}%` }}
            />
          </div>
        </div>

        {percentage2 > 50 && (
          <Button size="sm" variant="secondary" className="w-full">
            <CircleAlert className="size-4" />
            View this pathology details
          </Button>
        )}
      </div>
    </div>
  )
}
