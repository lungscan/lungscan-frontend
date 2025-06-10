import { Separator } from './ui/separator'

export function Footer() {
  return (
    <div className=" pt-54">
      <Separator />
      <footer className="flex items-center gap-3 justify-between pt-8 pb-3">
        <div className="flex items-centergap-6 justify-between gap-6">
          <h1 className="text-l font-bold">Other projects</h1>

          <Separator orientation="vertical" className="!h-5" />
          <p className="text-justify text-muted-foreground">
            <span className="text-foreground font-medium text-gray-400">
              <a
                href="https://github.com/Buscavan"
                className="hover:underline"
                target="_blank"
              >
                Buscavan
              </a>
            </span>
          </p>
        </div>
      </footer>
    </div>
  )
}
