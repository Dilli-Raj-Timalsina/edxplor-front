export default function SearchLocationBox() {
    return (
        <div className="flex mt-8">
            <div className="flex items-center rounded-l-md border border-gray-200 w-56 h-fit">
                <img src="/location-icon.svg" className="pl-1" />
                <input
                    type="text"
                    placeholder="Enter your location"
                    className="w-56 px-4 py-2  outline-none "
                />
            </div>

            <button className=" px-4 py-2 h-fit w-fit bg-orange-500 text-white rounded-r-lg">
                Search
            </button>
        </div>
    );
}
