"use client"

import { DialogTitle } from '@headlessui/react'
import { useState, ReactNode, useContext, Dispatch, SetStateAction } from 'react'
import Selector from '@/components/Selector'
import { movieRec } from '@/types'
import { useForm } from "react-hook-form"
import { videoGenres, streamingPlatforms } from '@/lists'
import { recContext } from '@/context/appContext'

export default function MovieForm({successFunc}:Readonly<{successFunc:() => void}>) {
    const [recGenres, setRecGenres] = useState<string[] | []>([])
    const [recPlatforms, setRecPlatforms] = useState<string[] | []>([])
    const {dispatch} = useContext(recContext)
    const {register, handleSubmit, trigger, setValue, formState} = useForm<any>({mode: "onTouched"})
    const {errors} = formState

    const toggleGenre = (genre:string) => {
        if(recGenres.includes(genre as never)) {
            setRecGenres(recGenres.filter((g) => g !== genre))
            setValue("genre", recGenres.filter((g) => g !== genre).join(', '))
            trigger("genre")
        } else {
            setRecGenres([...recGenres, genre])
            setValue("genre", [...recGenres, genre].join(', '))
            trigger("genre")
        }
    }

    const togglePlatform = (platform:string) => {
        if(recPlatforms.includes(platform as never)) {
            setRecPlatforms(recPlatforms.filter((p) => p !== platform))
            setValue("platform", recPlatforms.filter((p) => p !== platform).join(', '))
            trigger("platform")
        } else {
            setRecPlatforms([...recPlatforms, platform])
            setValue("platform", [...recPlatforms, platform].join(', '))
            trigger("platform")
        }
    }

    async function onSubmit(data: any) {
        console.log('Form Submitted', data)
        const rec:movieRec = {
            name: data.name,
            starring: data.starring.split(', '),
            director: data.director,
            format: data.format,
            length: +data.length,
            releaseYear: +data.releaseYear,
            platform: data.platform.split(', '),    
            genre: data.genre.split(', '),
            description: data.synopsis,
            submittedBy: data.submittedBy
        }
        console.log(JSON.stringify(rec))
        const response = await fetch('https://recommendation-app-beta.vercel.app/movies', {
            method: 'POST',
            body: JSON.stringify(rec),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (!response.ok) {
            const json = await response.json()
            console.log(json.error)
        }
        if (response.ok) {
            successFunc()
            dispatch({type: 'ADD_MOVIE', payload: rec})
        }
    }

  return (
    
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="mt-3 text-center flex flex-col items-center sm:mt-5">
                    <DialogTitle as="h3" className="text-3xl font-extralight underline underline-offset-8 decoration-teal-500 decoration-1 leading-6 mb-10 mt-6 text-sky-800">
                    Recommend a movie
                    </DialogTitle>
                    
                    <div className="w-72 mt-6">
                        <label htmlFor="name" className="block font-medium leading-6 text-gray-900">
                            Movie Name
                        </label>
                        <div className="mt-2">
                            <input
                            type="text"
                            id="name"
                            className="block w-full rounded-md border-0 px-2.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6"
                            placeholder="e.g. Dead Poet's Society"
                            {...register("name", {
                                required: "Movie name is required",
                                pattern: {
                                    value: /^[^<>{}!>]*$/,
                                    message: "Must not contain: <, {, >, }, !"
                                }
                            })}
                            />
                        </div>
                        <p className="mt-1 text-sm h-2 text-red-600">{errors.name?.message as ReactNode}</p>
                    </div>

                    <div className="w-72 mt-6">
                        <label htmlFor="stars" className="block font-medium leading-6 text-gray-900">
                            Stars
                        </label>
                        <div className="mt-2">
                            <input
                            type="text"
                            id="stars"
                            className="block w-full rounded-md border-0 px-2.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6"
                            placeholder="e.g. Tom Cruise, Tom Hanks, Tom Hardy"
                            {...register("starring", {
                                required: "At least one star is required",
                                pattern: {
                                    value: /^[^<>{}!>]*$/,
                                    message: "Must not contain: <, {, >, }, !"
                                }
                            })}
                            />
                        </div>
                        <p className="mt-2 text-sm text-gray-500" id="email-description">
                            Separate names with a comma and space
                        </p>
                        <p className="mt-1 text-sm h-2 text-red-600">{errors.starring?.message as ReactNode}</p>
                    </div>

                    <div className="w-72 mt-6">
                        <label htmlFor="director" className="block font-medium leading-6 text-gray-900">
                            Director
                        </label>
                        <div className="mt-2">
                            <input
                            type="text"
                            id="director"
                            className="block w-full rounded-md border-0 px-2.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6"
                            placeholder="e.g. Ridley Scott"
                            {...register("director", {
                                required: "Director is required",
                                pattern: {
                                    value: /^[^<>{}!>]*$/,
                                    message: "Must not contain: <, {, >, }, !"
                                }
                            })}
                            />
                        </div>
                        <p className="mt-1 text-sm h-2 text-red-600">{errors.director?.message as ReactNode}</p>
                    </div>

                    <div className="w-72 mt-6">
                        <label htmlFor="format" className="block font-medium leading-6 text-gray-900">
                            Format
                        </label>
                        <select
                            id="format"
                            className="block mt-2 mb-3 w-full rounded-md border-0 px-2.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6"
                            {...register("format", {
                                required: "Format is required",
                                pattern: {
                                    value: /^[^-]*$/,
                                    message: "Please select either live action or animated"
                                }
                            })}
                        >
                            <option selected disabled>-- Select one --</option>
                            <option>Live Action</option>
                            <option>Animated</option>
                        </select>
                        <p className="mt-1 text-sm h-2 text-red-600">{errors.format?.message as ReactNode}</p>
                    </div>

                    <div className="w-72 mt-6">
                        <label htmlFor="length" className="block font-medium leading-6 text-gray-900">
                            {`Length (Minutes)`}
                        </label>
                        <div className="mt-2">
                            <input
                            type="text"
                            id="length"
                            className="block w-full rounded-md border-0 px-2.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6"
                            placeholder="e.g. 129 for a movie that is 2hr 9m"
                            {...register("length", {
                                required: "Length is required",
                                pattern: {
                                    value: /^[0-9]*$/,
                                    message: "Must be only a number"
                                }
                            })}
                            />
                        </div>
                        <p className="mt-1 text-sm h-2 text-red-600">{errors.length?.message as ReactNode}</p>
                    </div>

                    <div className="w-72 mt-6">
                        <label htmlFor="releaseYear" className="block font-medium leading-6 text-gray-900">
                            Release Year
                        </label>
                        <div className="mt-2">
                            <input
                            type="text"
                            id="releaseYear"
                            className="block w-full rounded-md border-0 px-2.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6"
                            placeholder="e.g. 2006"
                            {...register("releaseYear", {
                                required: "Release year is required",
                                pattern: {
                                    value: /[1-2][0-9][0-9][0-9]/,
                                    message: "Please enter a valid year"
                                }
                            })}
                            />
                        </div>
                        <p className="mt-1 text-sm h-2 text-red-600">{errors.releaseYear?.message as ReactNode}</p>
                    </div>

                    <legend className="block mt-10 font-medium leading-6 text-gray-900">{`Platform to watch on (select all that apply)`}</legend>
                    <div className="w-72 hidden mt-6">
                        <label htmlFor="platform">
                            Platforms
                        </label>
                        <div>
                            <input
                            type="text"
                            id="platform"
                            value={recPlatforms.join(', ')}
                            {...register("platform", {
                                required: "Must be viewable on at least one platform"
                            })}
                            />
                        </div>
                    </div>
                    <p className="mt-1 mb-2 text-sm h-2 text-red-600">{errors.platform?.message as ReactNode}</p>
                    <Selector array={streamingPlatforms} state={recPlatforms} func={togglePlatform}/>

                    <legend className="block mt-10 font-medium leading-6 text-gray-900">{`Genre (select all that apply)`}</legend>
                    <div className="w-72 hidden mt-6">
                        <label htmlFor="genre">
                            Genre
                        </label>
                        <div>
                            <input
                            type="text"
                            id="genre"
                            {...register("genre", {
                                required: "Please pick at least one genre"
                            })}
                            />
                        </div>
                    </div>
                    <p className="mt-1 mb-2 text-sm h-2 text-red-600">{errors.genre?.message as ReactNode}</p>
                    <Selector array={videoGenres} state={recGenres} func={toggleGenre}/>

                    <div className="w-96 mt-6">
                        <label htmlFor="about" className="block font-medium leading-6 text-gray-900">
                            Synopsis
                        </label>
                        <div className="mt-2">
                            <textarea
                            id="about"
                            rows={3}
                            className="block w-full rounded-md border-0 px-2.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6"
                            defaultValue={''}
                            {...register("synopsis", {
                                required: "Synopsis is required",
                                pattern: {
                                    value: /^[^<>{}!>]*$/,
                                    message: "Must not contain: <, {, >, }"
                                }
                            })}
                            />
                        </div>
                        <p className="mt-3 text-sm leading-6 text-gray-600">What's it about? What themes does it address? What does it make you feel? Give your pitch!</p>
                        <p className="mt-1 text-sm h-2 text-red-600">{errors.synopsis?.message as ReactNode}</p>
                    </div>

                    <div className="w-72 mt-6">
                        <label htmlFor="submittedBy" className="block font-medium leading-6 text-gray-900">
                            Your Name
                        </label>
                        <div className="mt-2">
                            <input
                            type="text"
                            id="submittedBy"
                            className="block w-full rounded-md border-0 px-2.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6"
                            {...register("submittedBy", {
                                required: "Please provide your name",
                                pattern: {
                                    value: /^[^<>{}!>]*$/,
                                    message: "Must not contain: <, {, >, }"
                                }
                            })}
                            />
                        </div>
                        <p className="mt-1 text-sm h-2 text-red-600">{errors.submittedBy?.message as ReactNode}</p>
                    </div>

                </div>
                <div className="mt-5 sm:mt-6 w-full flex justify-center">
                <button
                    type="submit"
                    className="inline-flex w-auto justify-center rounded-md bg-teal-500 px-3 py-2 my-4 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 hover:scale-105 transition-all duration-300"
                >
                    Submit
                </button>
                </div>
            </form>
  )
}
