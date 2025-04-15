"use client";

import { useState } from "react";
import { IconFlame, IconRun, IconChess, IconChessKnight } from "@tabler/icons-react";
import gamesData from "./data.json";

interface Game {
  username: string;
  rating: string | number;
  time: string;
  mode: "Rated" | "Casual";
  gameType: "standard" | "960";
}

const games: Game[] = gamesData.map(game => ({
  ...game,
  mode: game.mode as "Rated" | "Casual",
  gameType: game.gameType as "standard" | "960"
}));

export const Play = () => {
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
        <div className="flex gap-4 mb-4">
          {/* Left side - Game board */}
          <div className="flex w-1/2 flex-col gap-4">
            <div className="flex items-center justify-between">
              <button
                className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100"
                onClick={() => {}}
              >
                Create Game
              </button>
            </div>
            
            <div className="overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-700">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-neutral-200 dark:divide-neutral-700">
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
                {sortedGames.map((game, idx) => (
                  <tr key={idx} className="hover:bg-neutral-50 dark:hover:bg-neutral-800">
                    <td className="whitespace-nowrap px-4 py-1 text-xs font-medium text-neutral-900 dark:text-white">{game.username}</td>
                    <td className="whitespace-nowrap px-4 py-1 text-xs text-neutral-500 dark:text-neutral-400">
                      {typeof game.rating === "string" ? game.rating : `${game.rating}`}
                    </td>
                    <td className="whitespace-nowrap px-4 py-1 text-xs text-neutral-500 dark:text-neutral-400">{game.time}</td>
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
                          <button className="rounded-md bg-neutral-900 px-3 py-1 text-sm font-medium text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100">
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

          {/* Right side placeholder */}
          <div className="w-1/2">
            <div className="mt-[52px] rounded-lg bg-neutral-100 dark:bg-neutral-800" style={{ height: 'calc(100% - 52px)' }}>
              {/* Placeholder for future content */}
            </div>
          </div>
        </div>

        {/* Bottom cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-32 rounded-lg bg-neutral-100 p-4 dark:bg-neutral-800"
            >
              {/* Placeholder card content */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
