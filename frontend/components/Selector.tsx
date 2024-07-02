
export default function Selector ({array, state, func}: Readonly<{array: {id:number, name:string}[]; state:string[]; func: (name:string) => void}>) {
    return (
        <fieldset className="">
            <div className="mt-4 flex flex-wrap justify-center content-center gap-4">
                {array.map((item) => (
                <div 
                    key={item.id} 
                    className={"relative flex w-[180px] h-[40px] text-center px-4 items-center py-4 hover:shadow-md transition-all duration-300 hover:scale-105 hover:cursor-pointer " + (state.includes(item.name as never) ? "bg-teal-300" : "bg-slate-100")}
                    onClick={() => func(item.name)}
                >
                    <div className="min-w-0 flex-1 text-sm font-medium text-slate-900 leading-6 hover:cursor-pointer">
                        {item.name}
                    </div>
                </div>
                ))}
            </div>
        </fieldset>
    )
}