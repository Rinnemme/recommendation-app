"use client"

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import Selector from '@/components/Selector'

export default function Page() {
    const [genreList, setGenreList] = useState<string[] | []>([])
    const [platformList, setPlatformList] = useState<string[] | []>([])

    const toggleGenre = (genre:string) => {
        if(genreList.includes(genre as never)) {
            setGenreList(genreList.filter((g) => g !== genre))
        } else {
            setGenreList([...genreList, genre])
        }
    }

    const togglePlatform = (platform:string) => {
        if(platformList.includes(platform as never)) {
            setPlatformList(platformList.filter((p) => p !== platform))
        } else {
            setPlatformList([...platformList, platform])
        }
    }

    const genres:{id:number, name:string}[] = [
        {id: 1, name: 'Horror'},
        {id: 2, name: 'Action'},
        {id: 3, name: 'Drama'},
        {id: 4, name: 'Romance'},
        {id: 5, name: 'Comedy'},
        {id: 6, name: 'Scifi'},
        {id: 7, name: 'Western'},
        {id: 8, name: 'Fantasy'},
        {id: 9, name: 'Crime'},
        {id: 10, name: 'Psychological Thriller'},
        {id: 11, name: 'Adventure'},
        {id: 12, name: 'Documentary'},
        {id: 13, name: 'Muscial'},
        {id: 14, name: 'Fighting'}
    ]

    const platforms:{id:number, name:string}[] = [
        {id: 1, name: 'Hulu'},
        {id: 2, name: 'Netflix'},
        {id: 3, name: 'Apple TV'},
        {id: 4, name: 'Disney +'},
        {id: 5, name: 'Amazon Prime Video'},
        {id: 6, name: 'Max'},
        {id: 7, name: 'Paramount'},
        {id: 8, name: 'Peacock'},
        {id: 9, name: 'Crunchyroll'},
        {id: 10, name: 'Hi Dive'}
    ]

  return (
    <Dialog className="relative z-10" open={true} onClose={() => console.log('closed')}>
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75"
      />

      <div className="fixed inset-0 z-10 w-screen max-h-dvh flex justify-center">
        <div className="flex min-h-full content-center justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform flex flex-col content-center overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 max-w-xl max-h-[90dvh] overflow-y-scroll my-12"
          >
            <div>
              <div className="mt-3 text-center flex flex-col items-center sm:mt-5">
                <DialogTitle as="h3" className="text-2xl leading-6 mb-6 mt-6 text-sky-800">
                  Recommend a movie
                </DialogTitle>
                
                <div className="w-72 mt-6">
                    <label htmlFor="name" className="block font-medium leading-6 text-gray-900">
                        Movie Name
                    </label>
                    <div className="mt-2">
                        <input
                        type="text"
                        name="name"
                        id="name"
                        className="block w-full rounded-md border-0 px-2.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                        placeholder="e.g. Game of Thrones"
                        />
                    </div>
                </div>

                <div className="w-72 mt-6">
                    <label htmlFor="name" className="block font-medium leading-6 text-gray-900">
                        Stars
                    </label>
                    <div className="mt-2">
                        <input
                        type="text"
                        name="name"
                        id="name"
                        className="block w-full rounded-md border-0 px-2.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                        placeholder="e.g. Tom Cruise, Tom Hanks, Tom Hardy"
                        />
                    </div>
                    <p className="mt-2 text-sm text-gray-500" id="email-description">
                        Separate names with a comma and space
                    </p>
                </div>

                <Selector array={platforms} state={platformList} func={togglePlatform} header='Platform to watch on (select all that apply)'/>
                <Selector array={genres} state={genreList} func={toggleGenre} header='Genre (select all that apply)'/>

              </div>
            </div>
            <div className="mt-5 sm:mt-6 w-full flex justify-center">
              <button
                type="button"
                className="inline-flex w-auto justify-center rounded-md bg-teal-500 px-3 py-2 my-4 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 hover:scale-105 transition-all duration-300"
              >
                Submit
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
