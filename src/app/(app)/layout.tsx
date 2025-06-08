import { Header } from '@/components/header'
import { Separator } from '@/components/ui/separator'
import { PropsWithChildren } from 'react'

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <div className="px-4 py-5 w-full max-w-4xl min-h-screen mx-auto space-y-5">
      <Header />

      <Separator />

      {children}
    </div>
  )
}
