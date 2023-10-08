export default function AgricultureBox() {
    return (
        <div className="flex flex-row bg-white gap-3 md:mb-20 mb-10 pl-2 pt-5 md:pl-24 md:pt-10 overflow-x-auto">
            {/* this is one box */}
            <div className="flex flex-col justify-start w-72 md:h-fit h-80 p-5 bg-blue-50  drop-shadow-sm">
                <img
                    src="/home-icon.svg"
                    className="md:w-24 md:h-24 w-20 h-20"
                />
                <div className="md:pl-4">
                    <h1 className="text-gray-700 md:text-2xl text-lg font-bold">
                        Agriculture
                    </h1>
                    <p className="  text-xs md:text-sm font-medium text-gray-500 pt-2">
                        We provide various services <br />
                        for online money transfers. Our service is the best...
                    </p>
                </div>
            </div>
            {/* this is second box */}
            <div className="flex flex-col justify-start w-72 md:h-fit h-80 p-5 bg-blue-50  drop-shadow-sm">
                <img
                    src="/home-icon.svg"
                    className="md:w-24 md:h-24 w-20 h-20"
                />
                <div className="md:pl-4">
                    <h1 className="text-gray-700 md:text-2xl text-lg font-bold whitespace-nowrap">
                        Achitecture
                    </h1>
                    <p className="  text-xs md:text-sm font-medium text-gray-500 pt-2">
                        We provide various services <br />
                        for online money transfers. Our service is the best...
                    </p>
                </div>
            </div>
            {/* this is third box */}
            <div className="flex flex-col justify-start w-72 md:h-fit h-80 p-5 bg-blue-50  drop-shadow-sm">
                <img
                    src="/home-icon.svg"
                    className="md:w-24 md:h-24 w-20 h-20"
                />
                <div className="md:pl-4">
                    <h1 className="text-gray-700 md:text-2xl text-lg font-bold whitespace-nowrap">
                        Chemical Enginering
                    </h1>
                    <p className="  text-xs md:text-sm font-medium text-gray-500 pt-2">
                        We provide various services <br />
                        for online money transfers. Our service is the best...
                    </p>
                </div>
            </div>
            {/* this is forth box */}
            <div className="flex flex-col justify-start w-72 md:h-fit h-80 p-5 bg-blue-50  drop-shadow-sm">
                <img
                    src="/home-icon.svg"
                    className="md:w-24 md:h-24 w-20 h-20"
                />
                <div className="md:pl-4">
                    <h1 className="text-gray-700 md:text-2xl text-lg font-bold whitespace-nowrap">
                        Finance
                    </h1>
                    <p className="  text-xs md:text-sm font-medium text-gray-500 pt-2">
                        We provide various services <br />
                        for online money transfers. Our service is the best...
                    </p>
                </div>
            </div>
        </div>
    );
}
