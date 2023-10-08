import ViewMoreButton from "./ViewMoreButton";

export default function TrustUs() {
    return (
        <div className="flex justify-between md:px-24 pl-2 bg-white">
            <TrusUsSide></TrusUsSide>
            <ViewMoreButton></ViewMoreButton>
        </div>
    );
}

function TrusUsSide() {
    return (
        <div className="md:pt-14 pt-4">
            <h2 className="text-cyan-900 md:text-5xl text-xl font-bold">
                These Colleges Trust Us
            </h2>
            <h3 className="md:text-base text-sm font-semibold md:mt-4 mt-2 text-cyan-700 ">
                Fusce tempor, tortor et vehicula ermpts posuere, mi est iaculis
                quamec luctus enim erat
            </h3>
            <h4 className="md:text-base text-sm font-semibold  text-cyan-700 ">
                iaculis quamec quisque elit diam
            </h4>
        </div>
    );
}
