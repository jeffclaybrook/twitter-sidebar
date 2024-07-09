"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LogOut, Menu, MoreHorizontal, Settings, X } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet"
import { SidebarButtonSheet as SidebarButton } from "./sidebar-button"
import { SidebarItems } from "@/types"

interface SidebarMobileProps {
 sidebarItems: SidebarItems
}

const SidebarMobile = (props: SidebarMobileProps) => {
 const pathname = usePathname()

 return (
  <Sheet>
   <SheetTrigger asChild>
    <Button variant="ghost" size="icon" className="fixed top-3 left-3">
     <Menu size={20} />
    </Button>
   </SheetTrigger>
   <SheetContent side="left" className="px-3 py-4">
    <SheetHeader className="flex flex-row justify-between items-center space-y-0">
     <h3 className="text-lg font-semibold text-foreground mx-3">Twitter</h3>
    </SheetHeader>
    <div className="h-full">
     <div className="flex flex-col w-full gap-1 mt-5">
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
     <div className="absolute w-full bottom-4 px-1 left-0">
      <Separator className="absolute -top-3 left-0 w-full" />
      <Drawer>
       <DrawerTrigger asChild>
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
       </DrawerTrigger>
       <DrawerContent className="mb-2 p-2">
        <div className="flex flex-col space-y-2 mt-2">
         <Link href="/">
          <SidebarButton size="sm" icon={Settings} className="w-full">Account Settings</SidebarButton>
         </Link>
         <Link href="/">
          <SidebarButton size="sm" icon={LogOut} className="w-full">Logout</SidebarButton>
         </Link>
        </div>
       </DrawerContent>
      </Drawer>
     </div>
    </div>
   </SheetContent>
  </Sheet>
 )
}

export default SidebarMobile