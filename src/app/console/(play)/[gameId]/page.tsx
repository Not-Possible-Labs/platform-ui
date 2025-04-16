"use client"

import { useParams } from "next/navigation"
import { IconSettings, IconWallet, IconHelp, IconChartBar, IconSend, IconMessage2 } from "@tabler/icons-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export default function GamePage({ params }: { params: { gameId: string } }) {
  return (
    <div className="flex h-full bg-background">
      {/* Left Sidebar */}
      <div className="w-80 border-r p-4 flex flex-col gap-4">
        {/* Logo */}
      

        {/* Navigation Menu */}
        <div className="space-y-2">
          <Card className="p-2">
            <Button variant="ghost" className="w-full justify-start gap-3">
              <IconSettings className="h-4 w-4" /> Settings
            </Button>
          </Card>
          <Card className="p-2">
            <Button variant="ghost" className="w-full justify-start gap-3">
              <IconWallet className="h-4 w-4" /> Wallet
            </Button>
          </Card>
          <Card className="p-2">
            <Button variant="ghost" className="w-full justify-start gap-3">
              <IconHelp className="h-4 w-4" /> Support
            </Button>
          </Card>
          <Card className="p-2">
            <Button variant="ghost" className="w-full justify-start gap-3">
              <IconChartBar className="h-4 w-4" /> Potential Earnings
            </Button>
          </Card>
        </div>

        {/* Chat Panel */}
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>In-Game Chat</CardTitle>
          </CardHeader>
          <CardContent className="h-full bg-muted/10" />
        </Card>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex items-center justify-center">
        <Card className="aspect-square w-full max-w-3xl p-8">
          <CardContent className="h-full bg-muted/10 rounded-lg" />
        </Card>
      </div>

      {/* Right Sidebar */}
      <div className="w-80 border-l p-4 flex flex-col gap-4">
        {/* Top Player */}
        <Card>
          <CardHeader>
            <CardTitle>Player 1</CardTitle>
            <CardDescription>Rating: 2800</CardDescription>
          </CardHeader>
          <CardContent className="h-12 bg-muted/10" />
        </Card>

        {/* Move Log */}
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Game Moves</CardTitle>
          </CardHeader>
          <CardContent className="h-full bg-muted/10" />
        </Card>

        {/* Bottom Player */}
        <Card>
          <CardHeader>
            <CardTitle>Player 2</CardTitle>
            <CardDescription>Rating: 2700</CardDescription>
          </CardHeader>
          <CardContent className="h-12 bg-muted/10" />
        </Card>
      </div>
    </div>
  )
}
