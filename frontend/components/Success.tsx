export default function RecPicker ({closeFunc}: Readonly<{closeFunc: () => void }>) {
    return (
        <fieldset className="p-4 w-full sm:w-96">
            <div className="text-3xl font-extralight leading-normal mb-4 text-sky-800">Submission successful!</div>
            <div className="text-l font-light underline-offset-8 decoration-teal-500 leading-normal mb-6 text-slate-900">Thanks for your recommendation!</div>
            <div className="mt-1 flex flex-wrap items-center justify-center gap-4">
                <div 
                    className={"relative flex w-[90px] h-[40px] text-center rounded-md px-4 items-center py-4 hover:shadow-md transition-all duration-300 hover:scale-105 hover:cursor-pointer bg-sky-600 hover:bg-teal-500"}
                    >
                    <div className="min-w-0 flex-1 text-sm font-semibold text-white leading-6 hover:cursor-pointer" onClick={closeFunc}>
                        OK
                    </div>
                </div>
            </div>
        </fieldset>
    )
}