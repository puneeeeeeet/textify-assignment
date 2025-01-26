import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface CardProps {
  title: string
  children: ReactNode
  className?: string
}

export function Card({ title, children, className }: CardProps) {
  return (
    <div className={cn("bg-white rounded-lg shadow-md p-6", className)}>
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      {children}
    </div>
  )
}

