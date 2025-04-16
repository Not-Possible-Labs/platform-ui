"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export function CreateGameDialog() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [timeControl, setTimeControl] = useState("10+0")
  const [gameType, setGameType] = useState("standard")
  const [mode, setMode] = useState("casual")

  const handleCreateGame = async () => {
    // TODO: Call API to create game
    const gameId = "123" // This will come from the API
    setOpen(false)
    router.push(`/console/${gameId}`)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100">
          Create Game
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create a New Game</DialogTitle>
          <DialogDescription>
            Set up your game preferences
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="time" className="text-right">
              Time Control
            </Label>
            <Select
              value={timeControl}
              onValueChange={setTimeControl}
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select time control" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1+0">1 min</SelectItem>
                <SelectItem value="3+0">3 min</SelectItem>
                <SelectItem value="5+0">5 min</SelectItem>
                <SelectItem value="10+0">10 min</SelectItem>
                <SelectItem value="15+10">15|10</SelectItem>
                <SelectItem value="30+0">30 min</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="type" className="text-right">
              Game Type
            </Label>
            <Select
              value={gameType}
              onValueChange={setGameType}
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select game type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="standard">Standard</SelectItem>
                <SelectItem value="960">Chess960</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="mode" className="text-right">
              Mode
            </Label>
            <Select
              value={mode}
              onValueChange={setMode}
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select mode" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="casual">Casual</SelectItem>
                <SelectItem value="rated">Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button 
            type="submit" 
            onClick={handleCreateGame}
          >
            Create Game
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
