import './globals.css'
import type { Metadata } from 'next'
import { Exo } from 'next/font/google'
import { Providers } from './providers'

const exo = Exo({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Skillcap',
  description: 'Capturamos momentos cruciales y jugadas destacadas para que mejores tu desempeño como deportista',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className='dark'>
      <body className={exo.className}>
      <Providers>
        {children}
      </Providers>
      </body>
    </html>
  )
}
