export default function Footer() {
    return (
        <div className="flex  flex-col md:flex-row justify-around  bg-cyan-600 md:pt-12 pt-6 md:pb-12 pb-6 ">
            {/* first col  */}
            <div className="pl-4 md:pl-0">
                <h1 className="md:text-lg text-base font-bold  text-white drop-shadow-sm ">
                    Useful Links
                </h1>
                <div className="md:mt-6 mt-3 ">
                    <p className="md:text-base text-sm  text-white drop-shadow-sm">
                        Department of Cooperative
                    </p>
                    <p className="md:text-base text-sm  md:mt-2  mt-1 text-white drop-shadow-sm">
                        Nepal Rastra Bank Ltd.
                    </p>
                    <p className="md:text-base text-sm  md:mt-2 mt-1 text-white drop-shadow-sm">
                        Employees Provident Fund
                    </p>
                    <p className="md:text-base text-sm  md:mt-2 mt-1 text-white drop-shadow-sm">
                        Nepal Stock Exchange
                    </p>
                    <p className="md:text-base text-sm  md:mt-2 mt-1 text-white drop-shadow-sm">
                        NEFSCUN{" "}
                    </p>
                    <p className="md:text-base text-sm  md:mt-2 mt-1 text-white drop-shadow-sm">
                        Department of Transport Mgmt
                    </p>
                    <p className="md:text-base text-sm  md:mt-2 mt-1 text-white drop-shadow-sm">
                        Citizen Investment Trust
                    </p>
                </div>
            </div>
            {/* second col */}
            <div className="pl-4 md:pl-0 pt-4">
                <h1 className="md:text-lg text-base font-bold  text-white drop-shadow-sm ">
                    Our Services
                </h1>
                <div className="md:mt-6 mt-3 ">
                    <p className="md:text-base text-sm text-white drop-shadow-sm">
                        AMT
                    </p>
                    <p className="md:text-base text-sm  md:mt-2  mt-1 text-white">
                        Remittance
                    </p>
                    <p className="md:text-base text-sm  md:mt-2  mt-1 text-white">
                        Deposit
                    </p>
                    <p className="md:text-base text-sm  md:mt-2  mt-1 text-white">
                        Nepal Stock Exchange
                    </p>
                    <p className="md:text-base text-sm  md:mt-2  mt-1 text-white">
                        Loan{" "}
                    </p>
                    <p className="md:text-base text-sm  md:mt-2  mt-1 text-white">
                        Smart Banking
                    </p>
                </div>
            </div>
            {/* third col */}
            <div className="pl-4 md:pl-0 pt-4">
                <h1 className="md:text-lg text-base font-bold  text-white drop-shadow-sm">
                    Contact Details
                </h1>
                <div className="md:mt-6 mt-3 ">
                    <div className="flex items-center">
                        <img src="/location.svg" className="w-4 h-4" />
                        <p className="text-base  text-white drop-shadow-sm pl-1">
                            Chabahil -7, Kathmandu
                        </p>
                    </div>
                    <div className="flex items-center mt-2">
                        <img src="/call.svg" className="w-4 h-4" />
                        <p className="text-base  text-white drop-shadow-sm pl-1">
                            01 4478416, 4481746
                        </p>
                    </div>
                    <div className="flex items-center mt-2">
                        <img src="/mail.svg" className="w-4 h-4" />
                        <p className="text-base  text-white drop-shadow-sm pl-1">
                            abc@example.com
                        </p>
                    </div>
                </div>
            </div>
            {/* last row */}
            <div className="pl-4 md:pl-0 pt-4">
                <h1 className="md:text-lg text-base font-bold  text-white drop-shadow-sm">
                    Subscribe
                </h1>
                <div className="md:mt-6 mt-3 ">
                    <p className="md:text-base text-sm text-white drop-shadow-sm">
                        Subscribe to stay tuned for latest
                    </p>
                    <p className="md:text-base text-sm  text-white drop-shadow-sm">
                        updates.
                    </p>
                    <Subscribe></Subscribe>
                    <p className="md:text-lg text-base font-bold mt-2 text-white drop-shadow-sm">
                        Social Media
                    </p>
                    <IconList></IconList>
                </div>
            </div>
        </div>
    );
}
function Subscribe() {
    return (
        <div className="flex  w-fit">
            <input
                type="text"
                placeholder="Email"
                className="w-36 px-3 py-1  outline-none rounded-l-lg"
            />

            <button className=" px-3 py-2 h-fit w-fit bg-orange-500  rounded-r-lg  text-white text-sm font-bold">
                Subscribe
            </button>
        </div>
    );
}
function IconList() {
    return (
        <div className="flex gap-2 mt-2 items-center ">
            <div className="bg-white rounded-full p-2">
                <img src="/facebook.svg" className="" />
            </div>
            <div className="bg-white rounded-full p-2">
                <img src="/instagram.svg" className="" />
            </div>
            <div className="bg-white rounded-full p-2">
                <img src="/twitter.svg" className="" />
            </div>
        </div>
    );
}

export function CopyRight() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between md:pl-20 pl-2 md:pr-24 md:h-14  bg-cyan-800 text-base  text-white drop-shadow-sm">
            <p>© 2022 All Rights Reserved</p>
            <div className="flex flex-col md:flex-row md:gap-5 gap-2 pt-4 md:pt-0 items-center whitespace-nowrap ">
                <div>Privacy Policy</div>
                <div>Terms of Use</div>
                <div>Site Map</div>
            </div>
        </div>
    );
}
