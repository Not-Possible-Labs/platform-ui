"use client";

import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/logo.png"
        alt="ChessBet Logo"
        width={32}
        height={32}
        className="dark:invert"
      />
      <span className="text-xl font-bold text-gray-900 dark:text-white">
        ChessBet
      </span>
    </div>
  );
}
