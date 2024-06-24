"use client"

import { useContext } from "react"
import { recContext } from "@/context/appContext"

export default function Page() {
    const {games} = useContext(recContext)

    return (
        <div className="mx-auto max-w-7xl py-10 px-6 lg:px-8 flex flex-col items-center fade-in">
            <div className="text-3xl mb-10 mt:4 sm:mt-6 sm:mb-12 text-slate-700 font-extralight">Game Recommendations</div>
            <ul role="list" className="space-y-3 w-[90vw] sm:w-[600px] max-w-5xl flex flex-col gap-3 mb-12">
                {games.map((game) => {
                    const url = game.steamLink
                    return (
                        <li className="overflow-hidden bg-white px-6 py-6 shadow sm:rounded-md sm:px-6 relative">
                            <p className="text-xl text-teal-600">{game.name}</p>
                            <p className="absolute right-6 top-6 text-slate-500">{`${game.releaseYear}`}</p>
                            <p className="text-sm mt-4"><span className="font-bold">{`Genre(s): `}</span>{`${game.genre.join(', ')}`}</p>
                            <p className="text-sm mt-1"><span className="font-bold">{`Combat: `}</span>{`${game.combat}`}</p>
                            <p className="text-sm mt-1"><span className="font-bold">{`Price(USD): `}</span>{`$${game.price}`} <a className="text-slate-500" href={`${url}`} target='_blank'>{`(Steam Link)`}</a></p>
                            <p className="font-light mt-4 text-">{game.description}</p>
                        </li>
                    )
                    }
                )}
            </ul>
        </div>
    )
  }