"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LogOut, MoreHorizontal, Settings } from "lucide-react"
import { Separator } from "./ui/separator"
import { Button } from "./ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { SidebarButton } from "./sidebar-button"
import { SidebarItems } from "@/types"

interface SidebarDesktopProps {
 sidebarItems: SidebarItems
}

const SidebarDesktop = (props: SidebarDesktopProps) => {
 const pathname = usePathname()

 return (
  <nav className="w-[270px] max-w-xs h-screen fixed left-0 top-0 z-40 border-r">
   <div className="h-full px-3 py-4">
    <h3 className="mx-3 text-lg font-semibold text-foreground">Twitter</h3>
    <div className="mt-5">
     <div className="flex flex-col gap-1 w-full">
      {props.sidebarItems.links.map((link, i) => (
       <Link key={i} href={link.href}>
        <SidebarButton
         variant={pathname === link.href ? "secondary" : "ghost"}
         icon={link.icon}
         className="w-full"
        >
         {link.label}
        </SidebarButton>
       </Link>
      ))}
      {props.sidebarItems.extras}
     </div>
     <div className="absolute left-0 bottom-3 w-full px-3">
      <Separator className="absolute -top-3 left-0 w-full" />
      <Popover>
       <PopoverTrigger asChild>
        <Button variant="ghost" className="w-full justify-start">
         <div className="flex items-center justify-between w-full">
          <div className="flex gap-2">
           <Avatar className="h-5 w-5">
            <AvatarImage src="/avatar.jpg" alt="Jeff Claybrook" />
            <AvatarFallback>Jeff Claybrook</AvatarFallback>
           </Avatar>
           <span>Jeff Claybrook</span>
          </div>
          <MoreHorizontal size={20} />
         </div>
        </Button>
       </PopoverTrigger>
       <PopoverContent className="mb-2 w-56 p-3 rounded-[1rem]">
        <div className="space-y-1">
         <Link href="/">
          <SidebarButton size="sm" icon={Settings} className="w-full">Account Settings</SidebarButton>
         </Link>
         <Link href="/">
          <SidebarButton size="sm" icon={LogOut} className="w-full">Logout</SidebarButton>
         </Link>
        </div>
       </PopoverContent>
      </Popover>
     </div>
    </div>
   </div>
  </nav>
 )
}

export default SidebarDesktop