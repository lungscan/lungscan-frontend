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
        <span className="text-foreground font-medium">Lungscan</span> is an
        academic project developed as part of a university course in{' '}
        <span className="text-foreground font-medium">
          Artificial Intelligence Development Bootcamp
        </span>
        . Its main goal is to simulate a real-world medical software system that
        helps analyze lung images using AI techniques. The project aims to build
        a simple web interface that demonstrates how artificial intelligence
        could assist in lung disease detection and improve diagnostic workflows.
      </p>

      <Alert>
        <CircleAlert className="size-4" />
        <AlertTitle>Important!</AlertTitle>
        <AlertDescription>
          This project is for educational purposes only. It does not provide
          real medical diagnostics and should not be used for clinical purposes.
        </AlertDescription>
      </Alert>

      <section id="authors" className="space-y-3">
        <h3 className="text-2xl font-bold">Authors</h3>

        <p className="text-justify text-muted-foreground">
          Developed by these authors as part of the Artificial Intelligence
          Bootcamp at [UNISAGRADO]:
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
