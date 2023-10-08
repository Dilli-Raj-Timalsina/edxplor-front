import ViewMoreButton from "./ViewMoreButton";

export default function LatestNews() {
    return (
        <div className="flex justify-between md:px-24 px-2 bg-white md:mb-44 mb-20">
            <LatestNewsBox></LatestNewsBox>
            <ViewMoreButton></ViewMoreButton>
        </div>
    );
}
function LatestNewsBox() {
    return (
        <div className="md:pt-14 pt-6">
            <h2 className="text-cyan-900 md:text-5xl text-xl font-bold">
                Latest News & Views
            </h2>
            <h3 className="md:text-base text-xs font-semibold md:mt-4 mt-2 text-cyan-700 ">
                Looking for the latest education news and advice? Visit our blog
                for articles
            </h3>
            <h4 className="md:text-base text-xs font-semibold  text-cyan-700 ">
                covering all the topics that impact your student life.
            </h4>
        </div>
    );
}
