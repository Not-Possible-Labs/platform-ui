"use client";

import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/Logo.png"
        alt="ChessBet Logo"
        width={52}
        height={52}
        className="dark:invert"
      />
      <span className="text-xl font-bold text-gray-900 dark:text-white">
        ChessBet
      </span>
    </div>
  );
}
