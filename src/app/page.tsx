"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  NavbarButton,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Footer } from "@/components/ui/footer";

const navItems = [
  { name: "Play", link: "/" },
  { name: "Bet", link: "/about" },
  { name: "Watch", link: "/products" },
  { name: "Community", link: "/contact" },
];

export default function Home() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen">
      <Navbar>
        <NavBody className="hidden md:flex">
          <NavbarLogo />
          <div className="flex items-center justify-between w-full">
            <div className="flex-shrink-0">
              {/* Logo is on the left */}
            </div>
            <div className="flex-shrink-0 overflow-hidden ml-16">
              <NavItems items={navItems} />
            </div>
            <div className="flex-shrink-0 flex items-center gap-4">
              <NavbarButton href="/auth/sign-in" variant="secondary">Sign in</NavbarButton>
              <NavbarButton href="/auth/sign-up">Get Started</NavbarButton>
              <NavbarButton
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                variant="secondary"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </NavbarButton>
            </div>
          </div>
        </NavBody>

        <MobileNav className="md:hidden">
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={mobileNavOpen}
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            />
          </MobileNavHeader>
          <MobileNavMenu isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)}>
            <div className="flex flex-col space-y-4 w-full">
              <NavItems items={navItems} />
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200 dark:border-neutral-800">
                <NavbarButton href="/auth/sign-in" className="w-full justify-center">Sign in</NavbarButton>
                <NavbarButton href="/auth/sign-up" className="w-full justify-center">Get Started</NavbarButton>
                <NavbarButton
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="w-full justify-center"
                >
                  {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </NavbarButton>
              </div>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      <div className="mt-12 md:mt-24 text-center">
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))] mb-4">
          <div className="absolute left-0 top-[1px] w-full">
            <div className="flex flex-col items-center gap-4">
              <div className="opacity-50 blur-[1px]">
                <img src="/Logo.png" alt="" className="h-40 w-40 dark:invert" />
              </div>
              <span className="text-4xl md:text-6xl lg:text-8xl font-bold text-black/50 dark:text-white/50 blur-[1px]">ChessBet</span>
            </div>
          </div>
          <div className="relative">
            <div className="flex flex-col items-center gap-4">
              <img src="/Logo.png" alt="ChessBet Logo" className="h-40 w-40 dark:invert" />
              <span className="text-4xl md:text-6xl lg:text-8xl font-bold text-black dark:text-white">ChessBet</span>
            </div>
          </div>
        </div>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-800 dark:text-gray-200 max-w-5xl mx-auto mb-12">
          The first peer-to-peer chess betting platform built for real competition.<br />
          Play real-time matches. Wager with real money. Powered by advanced cheat detection.
        </p>
      </div>

      <main className="container mx-auto px-4 pt-24 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Large card spanning 2 columns */}
          <Card className="md:col-span-2 h-[300px] hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Featured Card</CardTitle>
              <CardDescription>This card spans two columns</CardDescription>
            </CardHeader>
          </Card>

          {/* Regular sized card */}
          <Card className="h-[300px] hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Regular Card</CardTitle>
              <CardDescription>Standard single column card</CardDescription>
            </CardHeader>
          </Card>

          {/* Three regular cards */}
          {[1, 2, 3].map((i) => (
            <Card key={i} className="h-[250px] hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Card {i}</CardTitle>
                <CardDescription>Regular sized card {i}</CardDescription>
              </CardHeader>
            </Card>
          ))}

          {/* Tall card */}
          <Card className="h-[400px] hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Tall Card</CardTitle>
              <CardDescription>This card is taller than others</CardDescription>
            </CardHeader>
          </Card>

          {/* Two medium cards */}
          {[1, 2].map((i) => (
            <Card key={`medium-${i}`} className="h-[200px] hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Medium Card {i}</CardTitle>
                <CardDescription>Medium height card {i}</CardDescription>
              </CardHeader>
            </Card>
          ))}

          {/* Wide card spanning 3 columns */}
          <Card className="lg:col-span-3 h-[200px] hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Full Width Card</CardTitle>
              <CardDescription>This card spans the full width on large screens</CardDescription>
            </CardHeader>
          </Card>

          {/* Two wide cards */}
          {[1, 2].map((i) => (
            <Card key={`wide-${i}`} className="md:col-span-2 h-[280px] hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Wide Card {i}</CardTitle>
                <CardDescription>This card spans two columns</CardDescription>
              </CardHeader>
            </Card>
          ))}

          {/* Three small cards */}
          {[1, 2, 3].map((i) => (
            <Card key={`small-${i}`} className="h-[180px] hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Small Card {i}</CardTitle>
                <CardDescription>Compact card design</CardDescription>
              </CardHeader>
            </Card>
          ))}

          {/* Extra tall card */}
          <Card className="md:col-span-2 h-[450px] hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Extra Tall Card</CardTitle>
              <CardDescription>This is our tallest card</CardDescription>
            </CardHeader>
          </Card>

          {/* Four medium cards */}
          {[1, 2, 3, 4].map((i) => (
            <Card key={`extra-${i}`} className="h-[220px] hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Extra Card {i}</CardTitle>
                <CardDescription>Additional medium-sized card</CardDescription>
              </CardHeader>
            </Card>
          ))}

          {/* Final wide card */}
          <Card className="lg:col-span-3 h-[250px] hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Final Wide Card</CardTitle>
              <CardDescription>Another full-width card to finish the grid</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
