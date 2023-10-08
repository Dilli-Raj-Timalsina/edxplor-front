export default function CompareBox() {
    return (
        <div className="flex justify-between md:pl-24 pl-2 md:mb-16 mb-6 ">
            <div className="">
                <h1 className="text-cyan-900 md:text-5xl text-xl font-bold inline md:block">
                    Compare Your
                </h1>
                <h1 className="text-cyan-900 md:text-5xl text-xl font-bold inline">
                    school options.
                </h1>
                <h2 className="md:text-base text-xs font-semibold md:mt-4 mt-2 text-cyan-700 ">
                    View the most relevant school for your interests and compare
                    them <br /> by tuition, programs, acceptance rate, and other
                    factors important <br />
                    to find your college home.
                </h2>
            </div>
            <div>
                <img
                    src="/loading-image.png"
                    alt=""
                    className="pr-44 hidden md:flex"
                />
            </div>
        </div>
    );
}
