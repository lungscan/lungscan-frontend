import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { CircleAlert } from 'lucide-react'

const authors = [
  {
    id: 1,
    name: 'Arthur Marques',
    stack: 'Back-end',
    github: 'https://github.com/arthurm9',
  },
  {
    id: 2,
    name: 'Lucas Vieira',
    stack: 'Back-end',
    github: 'https://github.com/LucasVieiraS',
  },
  {
    id: 3,
    name: 'Luiz Felipe Santana',
    stack: 'Front-end',
    github: 'https://github.com/FelipeSantana07',
  },
  {
    id: 4,
    name: 'João Erik da Silva',
    stack: 'Back-end',
    github: 'https://github.com/joao-erik2077',
  },
  {
    id: 5,
    name: 'Vinicius Henrique',
    stack: 'Front-end',
    github: 'https://github.com/Vihenrie',
  },
  {
    id: 6,
    name: 'Pedro Henrique',
    stack: 'Back-end',
    github: 'https://github.com/PedroHenriquevr',
  },
  {
    id: 7,
    name: 'Richard Rodrigues',
    stack: 'Front-end',
    github: 'https://github.com/souorichard',
  },
]

export default function About() {
  return (
    <main className="space-y-5">
      <h1 className="text-2xl font-bold">About Lungscan</h1>

      <p className="text-justify text-muted-foreground">
        <span className="text-foreground font-medium">Lungscan</span> é um
        projeto acadêmico desenvolvido como parte de um curso universitário em{' '}
        <span className="text-foreground font-medium">
          Bootcamp Desenvolvimento Inteligência Artificial
        </span>
        . Seu principal objetivo é simular um sistema de software médico do
        mundo real que ajude a analisar imagens pulmonares usando técnicas de
        IA. O projeto visa construir uma interface web simples que demonstre
        como a inteligência artificial pode auxiliar na detecção de doenças
        pulmonares e aprimorar os fluxos de trabalho de diagnóstico.
      </p>

      <Alert>
        <CircleAlert className="size-4" />
        <AlertTitle>Importante!</AlertTitle>
        <AlertDescription>
          Esta ferramenta destina-se apenas a fins de pesquisa. Os resultados
          não constituem um diagnóstico médico. Consulte sempre profissionais de
          saúde qualificados e submeta-se a exames médicos adequados para
          quaisquer problemas de saúde.
        </AlertDescription>
      </Alert>

      <section id="authors" className="space-y-3">
        <h3 className="text-2xl font-bold">Autores</h3>

        <p className="text-justify text-muted-foreground">
          Desenvolvido por esses autores como parte do Bootcamp Desenvolvimento
          Inteligência Artificial na UNISAGRADO:
        </p>

        <ul className="space-y-2">
          {authors.map((author) => {
            return (
              <li key={author.id} className="flex items-center gap-2">
                <span className="size-1.5 bg-primary rounded-full" />
                <a
                  href={author.github}
                  className="hover:underline"
                  target="_blank"
                >
                  {author.name}
                </a>
                <Badge variant="outline">{author.stack}</Badge>
              </li>
            )
          })}
        </ul>
      </section>
    </main>
  )
}
