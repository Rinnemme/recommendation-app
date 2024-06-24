"use client"

import { useContext } from "react"
import { recContext } from "@/context/appContext"

export default function Page() {
    const {shows} = useContext(recContext)

    return (
        <div className="mx-auto max-w-7xl py-10 px-6 lg:px-8 flex flex-col items-center">
            <div className="text-3xl mb-10 mt:4 sm:mt-6 sm:mb-12 text-slate-700 font-light">Show Recommendations</div>
            <ul role="list" className="space-y-3 w-[90vw] sm:w-[600px] max-w-5xl flex flex-col gap-3 mb-12">
                {shows.map((show) => {
                    return (
                        <li className="overflow-hidden bg-white px-6 py-6 shadow sm:rounded-md sm:px-6 relative">
                            <p className="text-xl font-semibold text-teal-600">{show.name}</p>
                            <p className="absolute right-6 top-6 text-slate-500">{`${show.releaseYear}`} {show.endYear ? ` - ${show.endYear}`: ` - present`}</p>
                            <p className="text-sm mt-4"><span className="font-bold">{`Watch on: `}</span>{`${show.platform.join(', ')}`}</p>
                            <p className="text-sm mt-1"><span className="font-bold">{`Genre(s): `}</span>{`${show.genre.join(', ')}`}</p>
                            <p className="text-sm mt-1"><span className="font-bold">{`Episodes: `}</span>{`${show.episodeCount}`}</p>
                            <p className="text-sm mt-1"><span className="font-bold">{`Episode length: `}</span>{`~${show.episodeLength} min`}</p>
                            <p className="font-light mt-4 text-">{show.description}</p>
                        </li>
                    )
                    }
                )}
            </ul>
        </div>
    )
  }