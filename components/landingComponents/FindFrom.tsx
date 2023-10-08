import SearchLocationBox from "./SearchLocationBox";
export default function FindFrom() {
    return (
        <div className="flex justify-between bg-blue-50 md:pl-24 pl-2 md:pr-24 mb-10">
            <img
                src="/college-student-walking.png"
                className="w-52 h-fit hidden md:flex"
            />
            <FindFromBox></FindFromBox>
        </div>
    );
}
function FindFromBox() {
    return (
        <div className="md:pt-14 pt-2 flex flex-col justify-start pb-2">
            <h2 className="text-cyan-900 md:text-5xl text-xl font-bold">
                Find From Where You Live
            </h2>
            <h3 className="md:text-base text-sm font-semibold md:mt-4 mt-2 text-cyan-700 ">
                Looking for local options? Search the best campus and online
                colleges by
            </h3>
            <h4 className="md:text-base text-sm font-semibold  text-cyan-700 ">
                location to find the right school close to home.
            </h4>
            <SearchLocationBox></SearchLocationBox>
        </div>
    );
}
