import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { config} from "dotenv";
import { ThemeProvider } from "@/components/theme-provider"

config({ path: ".env.local" });

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
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
        url: "https://cdn.dribbble.com/userupload/14969723/file/original-38f732c01f091de6f22740c7675c5e55.png?resize=752x&vertical=center", // Public URL to your image
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
    images: ["https://cdn.dribbble.com/userupload/14969723/file/original-38f732c01f091de6f22740c7675c5e55.png?resize=752x&vertical=center"],
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={hanken.variable} suppressHydrationWarning>
      <body
        className={`${hanken.variable} font-sans antialiased`}
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
