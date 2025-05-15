"use client"

import * as React from "react"
import {
  AudioWaveform,
  Blocks,
  Calendar,
  Command,
  Home,
  Inbox,
  MessageCircleQuestion,
  Search,
  Settings2,
  Sparkles,
  Trash2,
} from "lucide-react"

import { NavFavorites } from "@/components/nav-favorites"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavWorkspaces } from "@/components/nav-workspaces"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar-15"

// This is sample data.
const data = {
  teams: [
    {
      name: "My Betting Circles",
      logo: Command,
      plan: "Pro Tier",
    },
  ],
  navMain: [
    {
      title: "Live Matches",
      url: "#",
      icon: Home,
      isActive: true,
    },
    {
      title: "Place Bets",
      url: "#",
      icon: Sparkles,
    },
    {
      title: "Leaderboard",
      url: "#",
      icon: Search,
    },
  ],
  navSecondary: [
    {
      title: "Betting Rules",
      url: "#",
      icon: MessageCircleQuestion,
    },
    {
      title: "Account Settings",
      url: "#",
      icon: Settings2,
    },
  ],
  favorites: [
    {
      name: "Favorite Players",
      url: "#",
      emoji: "♟️",
    },
  ],
  workspaces: [
    {
      name: "Betting Strategies",
      emoji: "📈",
      pages: [
        {
          name: "My Saved Strategies",
          url: "#",
          emoji: "💡",
        },
      ],
    },
  ],
}

export function SidebarLeft({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible="none"
      className="sticky hidden lg:flex top-0 h-svh border-r bg-background"
      {...props}
    >
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
        <NavMain items={data.navMain} />
      </SidebarHeader>
      <SidebarContent>
        <NavFavorites favorites={data.favorites} />
        <NavWorkspaces workspaces={data.workspaces} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
