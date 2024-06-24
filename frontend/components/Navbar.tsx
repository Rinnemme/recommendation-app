"use client"
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import Image from 'next/image'
import Logo from '../logo.svg'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Example() {

    const path = usePathname()
    console.log(path)

  return (
    <Disclosure as="nav" className="bg-white shadow-md sticky">
      {({ open }) => (
        <>
          <div className="mx-auto  px-4">
            <div className="flex h-16 justify-between">
              <div className="flex">

                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <span className="sr-only">Open main menu</span>
                  </DisclosureButton>
                </div>

                <div className="flex flex-shrink-0 items-center">
                    <Link href="/">
                        <Image className="h-10 w-auto" src={Logo} alt="Nerdy Recs"></Image>
                    </Link>
                </div>

                <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                    <Link href="/games" className={"rounded-md px-3 py-2 text-sm " + (path === "/games" ? "bg-gradient-to-r from-teal-500 to-sky-700 text-white" : 'text-gray-800 hover:text-cyan-700 hover:bg-slate-100')}>Games</Link>
                    <Link href="/movies" className={"rounded-md px-3 py-2 text-sm " + (path === "/movies" ? "bg-gradient-to-r from-teal-500 to-sky-700 text-white" : 'text-gray-800 hover:text-cyan-700 hover:bg-slate-100')}>Movies</Link>
                    <Link href="/shows" className={"rounded-md px-3 py-2 text-sm " + (path === "/shows" ? "bg-gradient-to-r from-teal-500 to-sky-700 text-white" : 'text-gray-800 hhover:text-cyan-700 hover:text-cyan-700 hover:bg-slate-100')}>Shows</Link>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <button
                    type="button"
                    className="relative inline-flex items-center gap-x-1.5 rounded-md bg-sky-700 px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Recommend
                  </button>
                </div>
              </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                <DisclosureButton>                  
                  <Link href="/games" className={"block px-3 py-2 text-sm text-gray-800 font-medium border-l-4 " + (path === "/games" ? ' border-cyan-600' : 'border-white hover:bg-slate-100 hover:text-cyan-700')}>Games</Link>
                  <Link href="/movies" className={"block px-3 py-2 text-sm text-gray-800 font-medium border-l-4 " + (path === "/movies" ? ' border-cyan-600' : 'border-white hover:bg-slate-100 hover:text-cyan-700')}>Movies</Link>
                  <Link href="/shows" className={"block px-3 py-2 text-sm text-gray-800 font-medium border-l-4 " + (path === "/shows" ? ' border-cyan-600' : 'border-white hover:bg-slate-100 hover:text-cyan-700')}>Shows</Link>
                </DisclosureButton>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}