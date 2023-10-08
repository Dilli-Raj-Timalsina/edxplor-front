export default function AmplifyBox() {
    return (
        <div className="flex  md:mb-16 mb-10 bg-slate-50 relative">
            <AmplifyBoxSingle></AmplifyBoxSingle>
            <img
                src="/college-students.png"
                className="h-96 w-fit absolute -top-16 right-72 hidden md:flex"
            />
        </div>
    );
}

function AmplifyBoxSingle() {
    return (
        <div className="flex flex-col md:pl-24 pl-2">
            <AmplifySide></AmplifySide>
            <div className="flex items-center gap-4 mt-6">
                <CareerPlanning name={"College Planning"}></CareerPlanning>
                <CareerPlanning name={"Career Planning"}></CareerPlanning>
            </div>
            <div className="flex items-center gap-4 mt-4">
                <CareerPlanning name={"Financial Planning"}></CareerPlanning>
                <CareerPlanning name={"Health & Wellness"}></CareerPlanning>
            </div>
            <div className="flex items-center gap-4 mt-4 ">
                <CareerPlanning name={"Diversity & Inclution"}></CareerPlanning>
                <CareerPlanning name={"Continue Education"}></CareerPlanning>
            </div>
        </div>
    );
}

function AmplifySide() {
    return (
        <div className="pt-14">
            <h2 className="text-cyan-900 md:text-5xl text-xl font-bold inline md:block">
                Amplify Your College
            </h2>
            <h2 className="text-cyan-900 md:text-5xl text-xl block md:block font-bold">
                Experience
            </h2>
            <h3 className="md:text-base text-sm font-semibold md:mt-5 mt-2 text-cyan-700 ">
                In need of some guidance? Our in-depth resources help you
            </h3>
            <h3 className="md:text-base text-sm font-semibold  text-cyan-700 ">
                navigate the college experience and prepare for life after
                graduation
            </h3>
        </div>
    );
}

function CareerPlanning({ name }: { name: string }) {
    return (
        <div className="flex  ">
            <div className="bg-cyan-900 flex flex-col border-l-4  border-blue-400 pl-4 md:w-56 w-36 py-2 rounded-l-sm">
                <p className="text-white md:text-base  text-sm font-medium whitespace-nowrap">
                    {name}
                </p>
            </div>
            <div className="flex items-center bg-slate-600 rounded-r-sm">
                <img src="/right-arrow.svg" className="md:w-4 md:h-4 w-3 h-3" />
            </div>
        </div>
    );
}
