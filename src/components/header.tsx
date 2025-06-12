import { ThemeSwitcher } from './theme/theme-switcher'
import { Codesandbox, Home, Users } from 'lucide-react'
import { NavLink } from './nav-link'
import { Separator } from './ui/separator'
import { TermsDropdown } from './terms-dropdown'

export function Header() {
  return (
    <header className="flex items-center gap-3 justify-between">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <Codesandbox className="size-7 text-primary" />
          <span className="font-semibold text-lg">Lungscan</span>
        </div>

        <Separator orientation="vertical" className="!h-5" />

        <nav className="flex items-center gap-2">
          <NavLink href="/">
            <Home className="size-4" />
            Início
          </NavLink>

          <NavLink href="/about">
            <Users className="size-4" />
            Sobre
          </NavLink>
        </nav>
      </div>

      <div className="flex items-center gap-2">
        <TermsDropdown />
        <ThemeSwitcher />
      </div>
    </header>
  )
}
