"use client"

export default function Example() {
  return (
    <div className="bg-white fixed flex justify-center h-dvh w-dvw top-0 fade-in">
      <div className="relative flex items-center isolate px-8 pt-14">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-cyan-200 to-sky-200 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        <div className="max-w-xl">
          <div className="text-center flex flex-col">
            <h1 className="text-5xl font-semibold leading-10 text-sky-950 sm:text-6xl mb-2">
              <span className="text-teal-600">Nerdy </span><span className="text-sky-700">Recs</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Recommendations by nerds, for nerds. For now, we support recommendations for shows, 
              movies, and video games. Feel free to browse around for some media consumption inspiration!
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-6">
              <a
                href="/games"
                className="rounded-md bg-gradient-to-r from-teal-500 to-sky-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gradient-to-r hover:from-teal-400 hover:to-sky-600 hover:scale-105 transition-all ease-in-out duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Games
              </a>
              <a
                href="/movies"
                className="rounded-md bg-gradient-to-r from-teal-500 to-sky-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gradient-to-r hover:from-teal-400 hover:to-sky-600 hover:scale-105 transition-all ease-in-out duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Movies
              </a>
              <a
                href="/shows"
                className="rounded-md bg-gradient-to-r from-teal-500 to-sky-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gradient-to-r hover:from-teal-400 hover:to-sky-600 hover:scale-105 transition-all ease-in-out duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Shows
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
