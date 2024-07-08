"use client"
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import Image from 'next/image'
import Logo from '../logo.svg'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Modal from './Modal'
import MovieForm from './MovieForm'
import GameForm from './GameForm'
import ShowForm from './ShowForm'
import RecPicker from './RecPicker'
import Success from './Success'
import { useState } from 'react'
import ErrorOccurred from './ErrorOccurred'

type recommendingState = 'Game' | 'Movie' | 'Show' | null

export default function Navbar() {
  const path = usePathname()
  const [modalOpen, setModalOpen] = useState<Boolean>(false)
  const [recommending, setRecommending] = useState<recommendingState>(null)
  const [submissionSuccess, setSubmissionSuccess] = useState<Boolean>(false)
  const [errorOccurred, setErrorOccurred] = useState<Boolean>(false)

  function modalClose() {
    setModalOpen(false)
    setRecommending(null)
    if(submissionSuccess) {setSubmissionSuccess(false)}
  }

  function submitSuccess() {
    setSubmissionSuccess(true)
    setRecommending(null)
  }

  function submitFailure() {
    setErrorOccurred(true)
    setRecommending(null)
  }

  return (
    <>
    <Disclosure as="nav" className="bg-white shadow-md z-10 sticky top-0">
      {({ open }) => (
        <>
          <div className="mx-auto  px-4">
            <div className="flex h-16 justify-between">
              <div className="flex">

                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5 hover:cursor-pointer"/>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:cursor-pointer">
                        <path className="hover:cursor-pointer" strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                  </DisclosureButton>
                </div>

                <div className="flex flex-shrink-0 items-center hover:cursor-pointer">
                    <Link href="/">
                        <Image className="h-10 w-auto hover:cursor-pointer" src={Logo} alt="Nerdy Recs"></Image>
                    </Link>
                </div>

                <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                    <Link href="/games" className={"rounded-md px-3 py-2 text-sm hover:cursor-pointer " + (path === "/games" ? "bg-gradient-to-r from-teal-500 to-sky-700 text-white" : 'text-gray-800 hover:text-cyan-700 hover:bg-slate-100')}>Games</Link>
                    <Link href="/movies" className={"rounded-md px-3 py-2 text-sm hover:cursor-pointer " + (path === "/movies" ? "bg-gradient-to-r from-teal-500 to-sky-700 text-white" : 'text-gray-800 hover:text-cyan-700 hover:bg-slate-100')}>Movies</Link>
                    <Link href="/shows" className={"rounded-md px-3 py-2 text-sm hover:cursor-pointer " + (path === "/shows" ? "bg-gradient-to-r from-teal-500 to-sky-700 text-white" : 'text-gray-800 hhover:text-cyan-700 hover:text-cyan-700 hover:bg-slate-100')}>Shows</Link>
                </div>
              </div>

              <div className="flex items-center hover:cursor-pointer">
                <div className="flex-shrink-0">
                  <button
                    type="button"
                    className="relative inline-flex items-center gap-x-1.5 rounded-md bg-teal-500 px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 hover:scale-105 hover:cursor-pointer transition-all ease-in-out duration-300"
                    onClick={() => setModalOpen(true)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 hover:cursor-pointer">
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
                  <Link href="/games" className={"block px-3 py-2 text-sm text-gray-800 font-medium border-l-4 hover:cursor-pointer " + (path === "/games" ? ' border-cyan-600' : 'border-white hover:bg-slate-100 hover:text-cyan-700')}>Games</Link>
                  <Link href="/movies" className={"block px-3 py-2 text-sm text-gray-800 font-medium border-l-4 hover:cursor-pointer " + (path === "/movies" ? ' border-cyan-600' : 'border-white hover:bg-slate-100 hover:text-cyan-700')}>Movies</Link>
                  <Link href="/shows" className={"block px-3 py-2 text-sm text-gray-800 font-medium border-l-4 hover:cursor-pointer " + (path === "/shows" ? ' border-cyan-600' : 'border-white hover:bg-slate-100 hover:text-cyan-700')}>Shows</Link>
                </DisclosureButton>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
    {modalOpen && <Modal closeFunc={() => modalClose()}>
        {recommending === 'Movie' && <MovieForm successFunc={submitSuccess} failFunc={submitFailure}/>}
        {recommending === 'Game' && <GameForm successFunc={submitSuccess} failFunc={submitFailure}/>}
        {recommending === 'Show' && <ShowForm successFunc={submitSuccess} failFunc={submitFailure}/>}
        {!recommending && !submissionSuccess && !errorOccurred && <RecPicker setFunc={setRecommending}/>}
        {!recommending && submissionSuccess && <Success closeFunc={() => modalClose()}/>}
        {errorOccurred && <ErrorOccurred closeFunc={() => modalClose()}/>}
    </Modal>}
    </>
  )
}