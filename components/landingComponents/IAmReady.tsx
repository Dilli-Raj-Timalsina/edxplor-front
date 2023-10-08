export function IAmReady() {
    return (
        <div className="flex w-screen md:w-fit mr-2 md:mr-0">
            <div className="bg-cyan-900 flex flex-col border-l-4  border-orange-500 md:pl-5 md:pr-80 w-full py-2 rounded-l-sm">
                <p className=" text-gray-400 text-xs md:text-sm px-1 md:px-2">
                    I'M READY TO
                </p>
                <p className="text-white md:text-sm px-1 md:px-2 ">
                    Find courses
                </p>
            </div>
            <div className="flex items-center bg-sky-700 rounded-r-sm">
                <img src="/right-arrow.svg" className="md:w-5 md:h-5 w-3 h-3" />
            </div>
        </div>
    );
}
export function IAmReadySmall({ name }: { name: string }) {
    return (
        <div className="flex  md:w-fit mr-2 md:mr-0">
            <div className="bg-cyan-900 flex flex-col border-l-2  border-orange-500 pl-2 md:pr-28 pr-14  py-2 rounded-l-sm">
                <p className=" text-gray-400 whitespace-nowrap text-xs md:text-sm">
                    I'M READY TO
                </p>
                <p className="text-white text-xs md:text-sm">Find {name}</p>
            </div>
            <div className="flex items-center bg-sky-700 rounded-r-sm">
                <img src="/right-arrow.svg" className="md:w-4 md:h-4 w-3 h-3" />
            </div>
        </div>
    );
}
