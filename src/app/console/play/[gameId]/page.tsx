"use client";

import { SidebarLeft } from "@/components/sidebar-left"
import { SidebarRight } from "@/components/sidebar-right"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar-15"



import { useState } from "react";

export default function GamePage({ params }: { params: { gameId: string } }) {
  const [open, setOpen] = useState(false);
  
  console.log('GamePage params:', params);

  return (
    <SidebarProvider defaultOpen={open} onOpenChange={setOpen}>
      <SidebarLeft>
        <div className="flex flex-col gap-4">
          <div>Game Controls</div>
          <div>Game Settings</div>
        </div>
      </SidebarLeft>
      <SidebarInset>
        <header className="sticky top-0 flex h-14 shrink-0 items-center gap-2 bg-background">
          <div className="flex flex-1 items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage className="line-clamp-1">
                    Game {params.gameId}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="mx-auto h-24 w-full max-w-3xl rounded-xl bg-muted/50" />
          <div className="mx-auto h-[100vh] w-full max-w-3xl rounded-xl bg-muted/50" />
        </div>
      </SidebarInset>
      <SidebarRight>
        <div className="flex flex-col gap-4">
          <div>Game Chat</div>
          <div>Game Info</div>
        </div>
      </SidebarRight>
    </SidebarProvider>
  )
}
