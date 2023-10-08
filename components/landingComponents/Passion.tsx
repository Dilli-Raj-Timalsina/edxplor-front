import ViewMoreButton from "./ViewMoreButton";

export default function Passion() {
    return (
        <div className="flex justify-between md:px-24 px-2 bg-white">
            <PassionBox></PassionBox>
            <ViewMoreButton></ViewMoreButton>
        </div>
    );
}
function PassionBox() {
    return (
        <div className="md:pt-14 pt-6">
            <h2 className="text-cyan-900 md:text-5xl text-xl font-bold">
                Find Your Passion
            </h2>
            <h3 className="md:text-base text-xs font-semibold md:mt-4 mt-2 text-cyan-700 ">
                Expand your skills or start something new. Discover the best by
            </h3>
            <h4 className="md:text-base text-xs font-semibold  text-cyan-700 ">
                subject areas that matter to you.
            </h4>
        </div>
    );
}
