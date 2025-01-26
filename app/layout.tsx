import "./globals.css"
import { Inter } from "next/font/google"
import Sidebar from "@/components/Sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Dashboard",
  description: "Sample dashboard application",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
          <Sidebar />
          <main className="flex-1 overflow-y-auto p-4 md:p-8 w-full">{children}</main>
        </div>
      </body>
    </html>
  )
}

