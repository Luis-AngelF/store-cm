import Header from './components/Header'
import './globals.css'

export const metadata = {
  title: 'Store - Capula Mich.',
  description: 'Developed by luisruiz.dev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  )
}
