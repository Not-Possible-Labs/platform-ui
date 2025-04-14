"use client";

import { motion } from "framer-motion";
import { Link } from "lucide-react";

const footerItems = [
  { name: "About", href: "/about" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Support", href: "/support" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Privacy", href: "/privacy" },
];

export function Footer() {
  return (
    <footer className="bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white">ChessBet</h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              The first peer-to-peer chess betting platform built for real competition.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Navigation</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {footerItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-neutral-600 dark:text-neutral-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Social</h3>
            <div className="space-y-4">
              <motion.a
                href="#"
                className="text-neutral-600 dark:text-neutral-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
              >
                <Link className="w-4 h-4" />
                Twitter
              </motion.a>
              <motion.a
                href="#"
                className="text-neutral-600 dark:text-neutral-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
              >
                <Link className="w-4 h-4" />
                Discord
              </motion.a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800 text-center text-neutral-500 dark:text-neutral-400">
          <p>&copy; {new Date().getFullYear()} ChessBet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
