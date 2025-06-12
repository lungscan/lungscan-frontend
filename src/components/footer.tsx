import { Separator } from './ui/separator'

export function Footer() {
  return (
    <footer className="w-full max-w-4xl mx-auto pt-4 flex items-center gap-5 border-t">
      <h1 className="text-l font-bold">Bibliotecas</h1>

      <Separator orientation="vertical" className="!h-5" />

      {/* TODO */}
      <a
        href="https://github.com/Buscavan"
        className="text-sm text-muted-foreground font-medium hover:underline"
        target="_blank"
      >
        Buscavan
      </a>
    </footer>
  )
}
