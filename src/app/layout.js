import './globals.css'
import { Inter } from 'next/font/google'

import Header from './components/header.js'
import Footer from './components/footer.js'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tari Manarai',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={inter.className}>
				<Header />
				{children}
				<Footer />
			</body>
    </html>
  )
}
