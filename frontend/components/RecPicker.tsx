import { Dispatch, SetStateAction } from "react";

export default function RecPicker ({setFunc}:Readonly<{setFunc:Dispatch<SetStateAction<any>>}>) {
    return (
        <fieldset className="p-4">
            <div className="text-3xl font-extralight leading-normal mb-8 text-slate-700">Recommend a:</div>
            <div className="mt-1 flex flex-wrap items-center justify-center gap-4">
                <div 
                    className={"relative flex w-[90px] h-[40px] text-center rounded-md px-4 items-center py-4 hover:shadow-md transition-all duration-300 hover:scale-105 hover:cursor-pointer bg-teal-500 hover:bg-sky-600"} onClick={() => setFunc('Show')}
                >
                    <div className="min-w-0 flex-1 text-sm font-semibold text-white leading-6 hover:cursor-pointer">
                        Show
                    </div>
                </div>

                <div 
                    className={"relative flex w-[90px] h-[40px] text-center rounded-md px-4 items-center py-4 hover:shadow-md transition-all duration-300 hover:scale-105 hover:cursor-pointer bg-teal-500 hover:bg-sky-600"} onClick={() => setFunc('Movie')}
                    >
                    <div className="min-w-0 flex-1 text-sm font-semibold text-white leading-6 hover:cursor-pointer">
                        Movie
                    </div>
                </div>

                <div 
                    className={"relative flex w-[90px] h-[40px] text-center rounded-md px-4 items-center py-4 hover:shadow-md transition-all duration-300 hover:scale-105 hover:cursor-pointer bg-teal-500 hover:bg-sky-600"} onClick={() => setFunc('Game')}
                    >
                    <div className="min-w-0 flex-1 text-sm font-semibold text-white leading-6 hover:cursor-pointer">
                        Game
                    </div>
                </div>

            </div>
        </fieldset>
    )
}