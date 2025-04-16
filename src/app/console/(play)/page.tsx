"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { IconFlame, IconRun, IconChess, IconChessKnight } from "@tabler/icons-react";
import { NewsTimeline } from "@/components/NewsTimeline";
import gamesData from "./data.json";
import { CreateGameDialog } from "@/components/create-game-dialog";

interface GameData {
  gameId: string;
  username: string;
  rating: string | number;
  time: string;
  mode: string;
  gameType: string;
}

interface Game {
  gameId: string;
  username: string;
  rating: string | number;
  time: string;
  mode: "Rated" | "Casual";
  gameType: "standard" | "960";
}

const validateGame = (game: GameData): game is Game => {
  return (
    game.mode === "Rated" || game.mode === "Casual"
  ) && (
    game.gameType === "standard" || game.gameType === "960"
  );
};

const games: Game[] = (gamesData as GameData[]).filter(validateGame);

export const Play = () => {
  const router = useRouter();
  const [sortedGames, setSortedGames] = useState<Game[]>(() => {
    return [...games].sort((a, b) => {
      const ratingA = typeof a.rating === "string" ? parseInt(a.rating) : a.rating;
      const ratingB = typeof b.rating === "string" ? parseInt(b.rating) : b.rating;
      return (ratingB || 0) - (ratingA || 0);
    });
  });

  return (
    <div className="flex flex-1">
      <div className="flex h-full w-full flex-1 flex-col gap-4 rounded-tl-2xl border border-neutral-200 bg-white p-2 md:p-10 dark:border-neutral-700 dark:bg-neutral-900">
        {/* Main content area */}
        <div className="flex flex-col gap-4 h-full">
          {/* Top section with table and timeline */}
          <div className="flex gap-4">
            {/* Left side - Game board */}
            <div className="flex w-1/2 flex-col gap-4">
              <div className="flex items-center justify-between">
                <CreateGameDialog />
              </div>
              <div className="h-[820px] overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-700">
                <div className="h-full overflow-x-auto overflow-y-auto">
                  <table className="min-w-full divide-y divide-neutral-200 dark:divide-neutral-700 cursor-pointer">
                    <thead className="bg-neutral-50 dark:bg-neutral-800">
                      <tr>
                        <th scope="col" className="px-4 py-1 text-left text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Player</th>
                        <th scope="col" className="px-4 py-1 text-left text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Rating</th>
                        <th scope="col" className="px-4 py-1 text-left text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Time</th>
                        <th scope="col" className="px-4 py-1 text-left text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Mode</th>
                        <th scope="col" className="px-4 py-1 text-left text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Type</th>
                        <th scope="col" className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200 bg-white dark:divide-neutral-700 dark:bg-neutral-900">
                      {sortedGames.map((game) => (
                        <tr 
                          key={game.gameId} 
                          className="hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                          onClick={() => router.push(`/console/${game.gameId}`)}
                        >
                          <td className="whitespace-nowrap px-4 py-1 text-xs font-medium text-neutral-900 dark:text-white">
                            {game.username}
                          </td>
                          <td className="whitespace-nowrap px-4 py-1 text-xs text-neutral-500 dark:text-neutral-400">
                            {typeof game.rating === "string" ? game.rating : `${game.rating}`}
                          </td>
                          <td className="whitespace-nowrap px-4 py-1 text-xs text-neutral-500 dark:text-neutral-400">
                            {game.time}
                          </td>
                          <td className="whitespace-nowrap px-4 py-1 text-xs text-neutral-500 dark:text-neutral-400">
                            <span className="inline-flex items-center gap-0.5">
                              {game.mode === "Casual" ? (
                                <IconFlame className="h-3 w-3 text-orange-500" />
                              ) : (
                                <IconRun className="h-3 w-3 text-green-500" />
                              )}
                              {game.mode}
                            </span>
                          </td>
                          <td className="whitespace-nowrap px-4 py-1 text-xs text-neutral-500 dark:text-neutral-400">
                            <span className="inline-flex items-center gap-0.5">
                              {game.gameType === "standard" ? (
                                <IconChess className="h-3 w-3" />
                              ) : (
                                <IconChessKnight className="h-3 w-3" />
                              )}
                              {game.gameType === "standard" ? "Standard" : "960"}
                            </span>
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                            <button 
                              className="rounded-md bg-neutral-900 px-3 py-1 text-sm font-medium text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100"
                              onClick={(e) => {
                                e.stopPropagation();
                                router.push(`/console/${game.gameId}`);
                              }}
                            >
                              Join
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right side - News Timeline */}
            <div className="w-1/2 flex flex-col">
              <div className="h-[52px]"></div>
              <div className="h-[820px] rounded-lg bg-neutral-100 dark:bg-neutral-800">
                <NewsTimeline />
              </div>
            </div>
          </div>

          {/* Bottom cards */}
          <div className="grid grid-cols-3 gap-4 h-32">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-32 rounded-lg bg-neutral-100 dark:bg-neutral-800"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
