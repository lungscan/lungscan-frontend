import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Separator } from '@/components/ui/separator'
import { PropsWithChildren } from 'react'

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen px-4 py-5 flex flex-col gap-8">
      <div className="w-full max-w-4xl flex-1 mx-auto space-y-5">
        <Header />

        <Separator />

        {children}
      </div>

      <Footer />
    </div>
  )
}
