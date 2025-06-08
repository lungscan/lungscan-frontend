'use client'

import Link from 'next/link'
import { ComponentProps } from 'react'

import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { Button } from './ui/button'

type NavLinkProps = ComponentProps<typeof Link>

export function NavLink(props: NavLinkProps) {
  const pathname = usePathname()

  const isCurrent = props.href.toString() === pathname

  return (
    <Button size="sm" variant={isCurrent ? 'outline' : 'ghost'} asChild>
      <Link
        className={cn('text-muted-foreground', isCurrent && 'text-foreground')}
        {...props}
      >
        {props.children}
      </Link>
    </Button>
  )
}
