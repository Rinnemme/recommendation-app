import Image from "next/image";

export default async function Home() {

  const movies = await fetch('https://recommendation-app-beta.vercel.app/movies')
  const moviesJson = await movies.json()
  const games = await fetch('https://recommendation-app-beta.vercel.app/games')
  const gamesJson = await games.json()
  const shows = await fetch('https://recommendation-app-beta.vercel.app/shows')
  const showsJson = await shows.json()

  return (
    <>
      <div>Movies:</div>
      {moviesJson.map((rec:any) => {
        return <div>{rec.name}</div>
      })}
      <div>Shows:</div>
      {showsJson.map((rec:any) => {
        return <div>{rec.name}</div>
      })}
      <div>Games:</div>
      {gamesJson.map((rec:any) => {
        return <div>{rec.name}</div>
      })}
    </>
  );
}
