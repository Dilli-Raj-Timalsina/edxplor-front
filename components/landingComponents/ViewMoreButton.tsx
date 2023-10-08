export default function ViewMoreButton() {
    return (
        <div className="flex items-center border border-orange-400 w-fit h-fit md:mt-32 mt-20 rounded-md shadow-sm ml-2 md:ml-0 ">
            <button className="pl-3 pr-2 py-1 text-orange-400 transition transform hover:scale-105 whitespace-nowrap">
                View More
            </button>
            <img
                src="/right-pointer.svg"
                className="md:w-5 md:h-5 md:pt-1 w-3 h-3 hidden md:flex"
            />
        </div>
    );
}
