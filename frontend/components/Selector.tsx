
export default function Selector ({array, state, func, header}: Readonly<{array: {id:number, name:string}[]; state:string[]; func: (name:string) => void; header:string}>) {
    return (
        <fieldset className="mt-10">
            <legend className="text-base leading-6 mb-2 text-slate-900">{header}</legend>
            <div className="mt-4 flex flex-wrap justify-center content-center gap-4">
                {array.map((item) => (
                <div 
                    key={item.id} 
                    className={"relative flex w-[180px] h-[40px] text-center px-4 items-center py-4 hover:shadow-md transition-all duration-300 hover:scale-105 hover:cursor-pointer " + (state.includes(item.name as never) ? "bg-teal-300" : "bg-slate-100")}
                    onClick={() => func(item.name)}
                >
                    <div className="min-w-0 flex-1 text-sm leading-6 hover:cursor-pointer">
                    <label htmlFor={`item-${item.id}`} className="select-none font-medium text-gray-900 hover:cursor-pointer">
                        {item.name}
                    </label>
                    </div>
                </div>
                ))}
            </div>
        </fieldset>
    )
}