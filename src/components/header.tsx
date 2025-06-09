import { ThemeSwitcher } from './theme/theme-switcher'
import {
  ReceiptText,
  BriefcaseMedical,
  Codesandbox,
  Home,
  Users,
  Shield,
} from 'lucide-react'
import { NavLink } from './nav-link'
import { Separator } from './ui/separator'

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
            Home
          </NavLink>

          <NavLink href="/about">
            <Users className="size-4" />
            About
          </NavLink>

          <NavLink href="/medical-notice">
            <BriefcaseMedical className="size-4" />
            medical notice
          </NavLink>

          <NavLink href="/terms-service">
            <ReceiptText className="size-4" />
            Terms of Service
          </NavLink>

          <NavLink href="/privacy-policy">
            <Shield className="size-4" />
            Privacy Policy
          </NavLink>
        </nav>
      </div>

      <ThemeSwitcher />
    </header>
  )
}
