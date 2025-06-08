'use client'

import Link from 'next/link'
import { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

type NavLinkProps = {
  path: string
} & ComponentProps<typeof Link>

export function NavLink({ path, ...props }: NavLinkProps) {
  const isCurrent = props.href.toString() === path

  return (
    <Link
      className={cn(
        'text-muted-foreground relative flex items-center gap-2 py-2 text-sm',
        isCurrent && 'font-medium text-foreground',
      )}
      {...props}
    >
      {props.children}
    </Link>
  )
}
