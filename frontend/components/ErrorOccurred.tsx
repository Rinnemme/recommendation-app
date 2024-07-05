export default function ErrorOccurred ({closeFunc}: Readonly<{closeFunc: () => void }>) {
    return (
        <fieldset className="p-4 w-96">
            <div className="text-3xl font-extralight underline underline-offset-8 decoration-teal-500 decoration-1 leading-normal mb-4 text-sky-800">Uh oh!</div>
            <div className="text-l font-light underline-offset-8 decoration-teal-500 leading-normal mb-6 text-slate-900">Looks like an error occurred. 
                Make sure to format all form fields properly!</div>
            <div className="mt-1 flex flex-wrap items-center justify-center gap-4">
                <div 
                    className={"relative flex w-[90px] h-[40px] text-center px-4 items-center py-4 hover:shadow-md transition-all duration-300 hover:scale-105 hover:cursor-pointer bg-teal-300"}
                >
                    <div className="min-w-0 flex-1 text-sm font-medium text-slate-900 leading-6 hover:cursor-pointer" onClick={closeFunc}>
                        OK
                    </div>
                </div>
            </div>
        </fieldset>
    )
}