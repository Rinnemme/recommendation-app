"use client"

import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'

export default function Modal({children, closeFunc}: Readonly<{children: React.ReactNode; closeFunc: () => void }> ) {
  return (
    <Dialog className="relative z-10" open={true} onClose={() => console.log('closed')}>
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75"
      />
      <div className="fixed inset-0 z-10 w-screen max-h-dvh flex justify-center">
        <div className="flex min-h-full min-w-96 content-center justify-center p-4 text-center items-center sm:p-0">
          <DialogPanel
            transition
            className="flex flex-col relative content-center rounded-md bg-white px-4 pb-4 pt-5 max-w-xl max-h-[90dvh] overflow-scroll my-12"
          >
            <div className="sticky top-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.75" className="absolute top-0 right-0 size-6 stroke-slate-400 hover:cursor-pointer hover:stroke-rose-500" onClick={closeFunc}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
            {children}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
