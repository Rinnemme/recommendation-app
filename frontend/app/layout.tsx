import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import Navbar from '../components/Navbar'
import { RecContextProvider } from "@/context/appContext";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nerdy Recs",
  description: "A site for nerds to recommend media to other nerds",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const games = await fetch('https://recommendation-app-beta.vercel.app/games')
  const gamesJson = await games.json()
  const movies = await fetch('https://recommendation-app-beta.vercel.app/movies')
  const moviesJson = await movies.json()
  const shows = await fetch('https://recommendation-app-beta.vercel.app/shows')
  const showsJson = await shows.json()

  return (
    <html lang="en">
      <body className={mulish.className}>
        <RecContextProvider games={gamesJson} movies={moviesJson} shows={showsJson}>
          <Navbar/>
          {children}
        </RecContextProvider>
      </body>
    </html>
  );
}
