"use client"

import { DialogTitle } from '@headlessui/react'
import { useState, ReactNode, useContext, Dispatch, SetStateAction } from 'react'
import Selector from '@/components/Selector'
import { gameRec } from '@/types'
import { useForm } from "react-hook-form"
import { gameGenres } from '@/lists'
import { recContext } from '@/context/appContext'

export default function GameForm({successFunc, failFunc}:Readonly<{successFunc:() => void; failFunc:() => void}>) {
    const [recGenres, setRecGenres] = useState<string[] | []>([])
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

    async function onSubmit(data: any) {
        console.log('Form Submitted', data)
        const rec:gameRec = {
            name: data.name,
            releaseYear: +data.releaseYear,
            genre: data.genre.split(', '),    
            combat: data.combatType,
            description: data.description,
            price: data.price,
            steamLink: data.steamLink,
            submittedBy: data.submittedBy
        }
        console.log(JSON.stringify(rec))
        const response = await fetch('https://recommendation-app-beta.vercel.app/games', {
            method: 'POST',
            body: JSON.stringify(rec),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (!response.ok) {
            failFunc()
            const json = await response.json()
            console.log(json.error)
        }
        if (response.ok) {
            successFunc()
            dispatch({type: 'ADD_GAME', payload: rec})
        }
    }

  return (
    
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="mt-3 text-center flex flex-col items-center sm:mt-5">
                    <DialogTitle as="h3" className="text-3xl font-extralight leading-6 mb-10 mt-6 text-teal-600">
                    Recommend a game
                    </DialogTitle>
                    
                    <div className="w-72 mt-6">
                        <label htmlFor="name" className="block font-medium leading-6 text-gray-900">
                            Game Name
                        </label>
                        <div className="mt-2">
                            <input
                            type="text"
                            id="name"
                            className="block w-full rounded-md border-0 px-2.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6"
                            placeholder="e.g. Triangle Strategy"
                            {...register("name", {
                                required: "Game name is required",
                                pattern: {
                                    value: /^[^<>{}>]*$/,
                                    message: "Must not contain: <, {, >, }"
                                }
                            })}
                            />
                        </div>
                        <p className="mt-1 text-sm h-2 text-red-600">{errors.name?.message as ReactNode}</p>
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
                            placeholder="e.g. 2022"
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
                    <Selector array={gameGenres} state={recGenres} func={toggleGenre}/>

                    <div className="w-72 mt-6">
                        <label htmlFor="combatType" className="block font-medium leading-6 text-gray-900">
                            Combat Type
                        </label>
                        <select
                            id="combatType"
                            className="block mt-2 mb-3 w-full rounded-md border-0 px-2.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6"
                            defaultValue="-- Select one --"
                            {...register("combatType", {
                                required: "Combat type is required",
                                pattern: {
                                    value: /^[A-Za-z]/,
                                    message: "Please select a combat type"
                                }
                            })}
                        >
                            <option disabled>-- Select one --</option>
                            <option>Real-Time</option>
                            <option>Turn Based</option>
                            <option>Real-Time With Pause</option>
                            <option>None</option>
                        </select>
                        <p className="mt-1 text-sm h-2 text-red-600">{errors.combatType?.message as ReactNode}</p>
                    </div>

                    <div className="w-72 mt-6">
                        <label htmlFor="price" className="block font-medium leading-6 text-gray-900">
                            {`Price (USD)`}
                        </label>
                        <div className="mt-2">
                            <input
                            type="text"
                            id="price"
                            className="block w-full rounded-md border-0 px-2.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6"
                            placeholder="e.g. 59.99"
                            {...register("price", {
                                required: "price is required",
                                pattern: {
                                    value: /[0-9]*\.[0-9]+/,
                                    message: "Must be only a number"
                                }
                            })}
                            />
                        </div>
                        <p className="mt-1 text-sm h-2 text-red-600">{errors.price?.message as ReactNode}</p>
                    </div>

                    <div className="w-72 mt-6">
                        <label htmlFor="steamLink" className="block font-medium leading-6 text-gray-900">
                            Steam Link
                        </label>
                        <div className="mt-2">
                            <input
                            type="text"
                            id="steamLink"
                            className="block w-full rounded-md border-0 px-2.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6"
                            placeholder="Copy from Steam page"
                            {...register("steamLink", {
                                required: "Steam Link is required",
                                pattern: {
                                    value: /^https:\/\/store.steampowered.com\/[^<>{}>]*$/,
                                    message: "Must be a Steam link"
                                }
                            })}
                            />
                        </div>
                        <p className="mt-1 text-sm h-2 text-red-600">{errors.steamLink?.message as ReactNode}</p>
                    </div>

                    <div className="w-11/12 sm:w-96 mt-6">
                        <label htmlFor="about" className="block font-medium leading-6 text-gray-900">
                            Description
                        </label>
                        <div className="mt-2">
                            <textarea
                            id="about"
                            rows={3}
                            className="block w-full rounded-md border-0 px-2.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6"
                            defaultValue={''}
                            {...register("description", {
                                required: "Description is required",
                                pattern: {
                                    value: /^[^<>{}>]*$/,
                                    message: "Must not contain: <, {, >, }"
                                }
                            })}
                            />
                        </div>
                        <p className="mt-3 text-sm leading-6 text-gray-600">What's it about? What themes does it address? What does it make you feel? Give your pitch!</p>
                        <p className="mt-1 text-sm h-2 text-red-600">{errors.description?.message as ReactNode}</p>
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
                                    value: /^[^<>{}>]*$/,
                                    message: "Must not contain: <, {, >, }"
                                }
                            })}
                            />
                        </div>
                        <p className="mt-1 text-sm h-2 text-red-600">{errors.submittedBy?.message as ReactNode}</p>
                    </div>

                </div>
                <div className="mt-5 sm:mt-6 w-full mb-8 flex justify-center">
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
