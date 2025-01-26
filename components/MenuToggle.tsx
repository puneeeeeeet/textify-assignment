import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MenuToggleProps {
  onClick: () => void
  isOpen: boolean
}

export function MenuToggle({ onClick, isOpen }: MenuToggleProps) {
  if (isOpen) return null

  return (
    <Button
      variant="ghost"
      size="icon"
      className="md:hidden fixed top-4 right-4 z-50"
      onClick={onClick}
      aria-label="Toggle menu"
    >
      <Menu className="h-6 w-6" />
    </Button>
  )
}

