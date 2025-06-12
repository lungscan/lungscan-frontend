import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Pathology } from '@/mocks/pathology-data'
import { CircleAlert } from 'lucide-react'

interface PathologyDetailsSheetProps {
  pathology: Pathology
}

export function PathologyDetailsSheet({
  pathology,
}: PathologyDetailsSheetProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="sm" variant="secondary" className="w-full">
          <CircleAlert className="size-4" />
          Detalhes
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            {pathology.displayName}{' '}
            <span className="text-sm text-muted-foreground">
              ( {pathology.percentage}% )
            </span>
          </SheetTitle>
        </SheetHeader>

        <div className="pb-4 px-4 space-y-5">
          <p>{pathology.info?.description}</p>

          <Separator />

          <section className="space-y-2">
            <h5 className="font-medium">Sintomas comuns</h5>
            {pathology.info?.symptoms.map((symptom) => {
              return (
                <li key={symptom} className="flex items-center gap-2">
                  <span className="size-1.5 bg-primary rounded-full" />
                  <p className="text-sm text-muted-foreground">{symptom}</p>
                </li>
              )
            })}
          </section>

          <section className="space-y-2">
            <h5 className="font-medium">Próximos passos recomendados</h5>
            <p className="text-sm text-muted-foreground">
              {pathology.info?.nextSteps}
            </p>
          </section>

          <section className="space-y-2">
            <h5 className="font-medium">Quando procurar um especialista?</h5>
            <p className="text-sm text-muted-foreground">
              {pathology.info?.urgentCare}
            </p>
          </section>

          <Alert variant="destructive">
            <CircleAlert className="size-4" />
            <AlertTitle>Importante!</AlertTitle>
            <AlertDescription>
              Esta informação é apenas educativa. Consulte seu médico
              imediatamente para avaliação médica adequada e tratamento.
            </AlertDescription>
          </Alert>
        </div>
      </SheetContent>
    </Sheet>
  )
}
