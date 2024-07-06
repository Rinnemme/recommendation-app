import { Dispatch, SetStateAction } from "react";

export default function RecPicker ({setFunc}:Readonly<{setFunc:Dispatch<SetStateAction<any>>}>) {
    return (
        <fieldset className="p-4">
            <div className="text-3xl font-extralight leading-normal mb-8 text-sky-800">Recommend a:</div>
            <div className="mt-1 flex flex-wrap items-center justify-center gap-4">
                <div 
                // relative inline-flex items-center gap-x-1.5 rounded-md bg-teal-500 px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 hover:scale-105 transition-all ease-in-out duration-300
                    className={"relative flex w-[90px] h-[40px] text-center rounded-md px-4 items-center py-4 hover:shadow-md transition-all duration-300 hover:scale-105 hover:cursor-pointer bg-sky-600 hover:bg-teal-500"}
                >
                    <div className="min-w-0 flex-1 text-sm font-semibold text-white leading-6 hover:cursor-pointer" onClick={() => setFunc('Show')}>
                        Show
                    </div>
                </div>

                <div 
                    className={"relative flex w-[90px] h-[40px] text-center rounded-md px-4 items-center py-4 hover:shadow-md transition-all duration-300 hover:scale-105 hover:cursor-pointer bg-sky-600 hover:bg-teal-500"}
                    >
                    <div className="min-w-0 flex-1 text-sm font-semibold text-white leading-6 hover:cursor-pointer" onClick={() => setFunc('Movie')}>
                        Movie
                    </div>
                </div>

                <div 
                    className={"relative flex w-[90px] h-[40px] text-center rounded-md px-4 items-center py-4 hover:shadow-md transition-all duration-300 hover:scale-105 hover:cursor-pointer bg-sky-600 hover:bg-teal-500"}
                    >
                    <div className="min-w-0 flex-1 text-sm font-semibold text-white leading-6 hover:cursor-pointer" onClick={() => setFunc('Game')}>
                        Game
                    </div>
                </div>

            </div>
        </fieldset>
    )
}