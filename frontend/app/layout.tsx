"use client";
import './globals.css'
import { Inter } from 'next/font/google'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import store from './redux/store'
import { Provider } from 'react-redux'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <div className="bg-white">
            <Header />
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/12 p-4">
                <div className="space-y-4 hidden md:block">
                  <Sidebar/>
                </div>
              </div>
                <main className="w-full md:w-10/12 p-4">
                  {children}
                </main>
            </div>
          </div>
        </Provider>
      </body>
    </html>
  )
}
