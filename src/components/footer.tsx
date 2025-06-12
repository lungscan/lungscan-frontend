import { Separator } from './ui/separator'

export function Footer() {
  return (
    <footer className="w-full max-w-4xl mx-auto pt-4 flex items-center gap-5 border-t">
      <h1 className="text-l font-bold">Bibliotecas</h1>

      <Separator orientation="vertical" className="!h-5" />

      <a
        href="https://nextjs.org/"
        className="text-sm text-muted-foreground hover:underline"
        target="_blank"
      >
        Next.js
      </a>

      <a
        href="https://ui.shadcn.com/"
        className="text-sm text-muted-foreground hover:underline"
        target="_blank"
      >
        Shadcn UI
      </a>

      <a
        href="https://tailwindcss.com/"
        className="text-sm text-muted-foreground hover:underline"
        target="_blank"
      >
        Tailwind CSS
      </a>
    </footer>
  )
}
