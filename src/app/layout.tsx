import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { config} from "dotenv";
import { ThemeProvider } from "@/components/theme-provider"

config({ path: ".env.local" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ChessBet | Play. Wager. Win.",
  description: "The first peer-to-peer chess betting platform with real-time matchmaking, live wagers, and advanced cheat detection technology.",
  openGraph: {
    title: "ChessBet | Play. Wager. Win.",
    description: "The first peer-to-peer chess betting platform with real-time matchmaking, live wagers, and advanced cheat detection technology.",
    url: process.env.HOST,
    siteName: "ChessBet",
    images: [
      {
        url: "https://cdn.dribbble.com/userupload/7749073/file/original-3c40132307d6fa03048eeb985cb5b8af.png?resize=752x&vertical=center", // Public URL to your image
        width: 1200,
        height: 630,
        alt: "ChessBet - Play. Wager. Win.",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChessBet | Play. Wager. Win.",
    description: "The first peer-to-peer chess betting platform with real-time wagering and cheat detection.",
    images: ["https://cdn.dribbble.com/userupload/7749073/file/original-3c40132307d6fa03048eeb985cb5b8af.png?resize=752x&vertical=center"],
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
