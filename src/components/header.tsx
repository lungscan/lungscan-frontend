'use client'

import { ThemeSwitcher } from './theme/theme-switcher'
import { Codesandbox, Home, Users } from 'lucide-react'
import { NavLink } from './nav-link'
import { Separator } from './ui/separator'
import { usePathname } from 'next/navigation'

export function Header() {
  const pathname = usePathname()

  return (
    <header className="flex items-center gap-3 justify-between">
      <div className="flex items-center gap-6">
        <Codesandbox className="size-8" />

        <Separator orientation="vertical" className="!h-5" />

        <nav className="flex items-center gap-6">
          <NavLink href="/" path={pathname}>
            <Home className={`size-4 ${pathname === '/' && 'text-primary'}`} />
            Home
          </NavLink>

          <NavLink href="/about" path={pathname}>
            <Users
              className={`size-4 ${pathname === '/about' && 'text-primary'}`}
            />
            About
          </NavLink>
        </nav>
      </div>

      <ThemeSwitcher />
    </header>
  )
}
