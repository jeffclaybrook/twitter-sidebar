import { LucideIcon } from "lucide-react"
import { Button, ButtonProps } from "./ui/button"
import { SheetClose } from "./ui/sheet"
import { cn } from "@/lib/utils"

interface SidebarButtonProps extends ButtonProps {
 icon?: LucideIcon
}

export const SidebarButton = ({
 icon: Icon,
 className,
 children,
 ...props
}: SidebarButtonProps) => {
 return (
  <Button
   variant="ghost"
   className={cn("gap-2 justify-start", className)}
   {...props}
  >
   {Icon && <Icon size={20} />}
   <span>{children}</span>
  </Button>
 )
}

export const SidebarButtonSheet = (props: SidebarButtonProps) => {
 return (
  <SheetClose asChild>
   <SidebarButton {...props} />
  </SheetClose>
 )
}