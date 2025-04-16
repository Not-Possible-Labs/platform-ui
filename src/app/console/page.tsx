"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { Dashboard } from "@/app/console/(dashboard)/dashboard";
import { Play } from "@/app/console/(play)/page";
import { IconChessKnight } from "@tabler/icons-react";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "motion/react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function ConsolePage() {
  const router = useRouter();
  const mainLinks = [
    {
      label: "Dashboard",
      href: "#",
      icon: (
        <IconBrandTabler className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Play",
      href: "#",
      icon: (
        <IconChessKnight className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
  ];

  const bottomLinks = [
    {
      label: "Profile",
      href: "#",
      icon: (
        <IconUserBolt className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Settings",
      href: "#",
      icon: (
        <IconSettings className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconArrowLeft className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        router.push("/");
      },
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "flex w-full flex-1 flex-col overflow-hidden bg-gray-100 md:flex-row dark:bg-neutral-800",
        "h-screen"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {mainLinks.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
            <div className="mt-auto mb-4 flex flex-col gap-2">
              {bottomLinks.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Manu Arora",
                href: "#",
                icon: (
                  <Image
                    src="https://assets.aceternity.com/manu.png"
                    className="h-7 w-7 shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <Play />
    </div>
  );
}
export const Logo = () => {
  return (
    <Link
      href="#"
      className="flex items-center gap-2 w-full"
    >
      <div className="h-9 w-9 shrink-0">
        <Image
          src="/Logo.png"
          alt="ChessBet Logo"
          width={36}
          height={36}
          className="dark:invert"
        />
      </div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-neutral-700 dark:text-neutral-200 text-sm font-bold"
      >
        ChessBet
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="flex items-center w-full"
    >
      <div className="h-9 w-9 shrink-0">
        <Image
          src="/Logo.png"
          alt="ChessBet Logo"
          width={36}
          height={36}
          className="dark:invert"
        />
      </div>
    </Link>
  );
};


