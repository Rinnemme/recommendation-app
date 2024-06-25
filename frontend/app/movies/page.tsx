"use client"

import { useContext } from "react"
import { recContext } from "@/context/appContext"
import { movieRec } from '../../types'

export default function Page() {
    const {movies} = useContext(recContext)

    return (
        <div className="mx-auto max-w-7xl py-10 px-6 lg:px-8 flex flex-col items-center fade-in">
            <div className="text-3xl mb-10 mt:4 sm:mt-6 sm:mb-12 text-slate-700 font-extralight">Movie Recommendations</div>
            <ul role="list" className="space-y-3 w-[90vw] sm:w-[600px] max-w-5xl flex flex-col gap-3 mb-12">
                {movies.map((movie:movieRec) => {
                    return (
                        <li className="overflow-hidden bg-white px-6 py-6 shadow sm:rounded-md sm:px-6 relative">
                            <p className="text-xl text-teal-600">{movie.name}</p>
                            <p className="absolute right-6 top-6 text-slate-500">{`${movie.releaseYear}`}</p>
                            <p className="text-sm mt-4"><span className="font-bold">{`Watch on: `}</span>{`${movie.platform.join(', ')}`}</p>
                            <p className="text-sm mt-1"><span className="font-bold">{`Genre(s): `}</span>{`${movie.genre.join(', ')}`}</p>
                            <p className="text-sm mt-1"><span className="font-bold">{`Starring: `}</span>{`${movie.starring.join(', ')}`}</p>
                            <p className="text-sm mt-1"><span className="font-bold">{`Directed by: `}</span>{`${movie.director}`}</p>
                            <p className="text-sm mt-1"><span className="font-bold">{`Length: `}</span>{`${movie.length} min`}</p>
                            <p className="font-light mt-4 text-">{movie.synopsis}</p>
                        </li>
                    )
                    }
                )}
            </ul>
        </div>
    )
  }