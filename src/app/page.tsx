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
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const navItems = [
  { name: "Play", link: "/" },
  { name: "Bet", link: "/about" },
  { name: "Watch", link: "/products" },
  { name: "Community", link: "/contact" },
];

export default function Home() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="z-20 flex items-center gap-4">
            <NavbarButton href="/auth/login" variant="secondary">Sign in</NavbarButton>
            <NavbarButton href="/auth/sign-up">Get Started</NavbarButton>
          </div>
        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={mobileNavOpen}
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            />
          </MobileNavHeader>
          <MobileNavMenu isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)}>
            <div className="flex flex-col gap-2">
              {navItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  className="rounded-lg p-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  {item.name}
                </a>
              ))}
              <hr className="my-4" />
              <NavbarButton href="/auth/login" variant="secondary" className="w-full">Sign in</NavbarButton>
              <NavbarButton href="/auth/sign-up" className="w-full">Get Started</NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      <main className="container mx-auto px-4 pt-24">
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

    </div>
  );
}
