import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Daivik Girish - Computer Engineer | Full-Stack Developer',
  description: 'Computer Engineer and Full-Stack Developer specializing in embedded systems, web development, and IoT solutions. Passionate about creating innovative technology solutions.',
  keywords: ['Daivik Girish', 'Computer Engineer', 'Full-Stack Developer', 'Embedded Systems', 'IoT', 'Web Development', 'React', 'Node.js'],
  authors: [{ name: 'Daivik Girish' }],
  creator: 'Daivik Girish',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://daivik-portfolio.vercel.app',
    title: 'Daivik Girish - Computer Engineer | Full-Stack Developer',
    description: 'Computer Engineer and Full-Stack Developer specializing in embedded systems, web development, and IoT solutions.',
    siteName: 'Daivik Girish Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daivik Girish - Computer Engineer | Full-Stack Developer',
    description: 'Computer Engineer and Full-Stack Developer specializing in embedded systems, web development, and IoT solutions.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Daivik Girish",
              "jobTitle": "Computer Engineer | Full-Stack Developer",
              "description": "Computer Engineer and Full-Stack Developer specializing in embedded systems, web development, and IoT solutions.",
              "url": "https://daivik-portfolio.vercel.app",
              "sameAs": [
                "https://github.com/DaivikGirish",
                "https://linkedin.com/in/daivik-girish-709ab7185/"
              ],
              "knowsAbout": [
                "Computer Engineering",
                "Full-Stack Development",
                "Embedded Systems",
                "IoT",
                "React",
                "Node.js",
                "Python",
                "Java"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-white dark:bg-dark-900">
            <Navbar />
            <main className="pt-16">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
} 