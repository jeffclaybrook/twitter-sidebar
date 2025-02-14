import { ReactNode } from "react"
import { LucideIcon } from "lucide-react"

export interface SidebarItems {
 links: Array<{
  label: string
  href: string
  icon?: LucideIcon
 }>
 extras?: ReactNode
}