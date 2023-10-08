import { IAmReady, IAmReadySmall } from "./IAmReady";
export default function Hero() {
    return (
        <div className="h-4/5 w-screen bg-blue-50 flex justify-between px-2 md:px-6">
            {/* this is heading of landing page */}
            <div className="md:pl-20 md:pt-20  pt-10">
                <div className="flex flex-col ">
                    <h2 className="md:text-5xl text-xl font-bold text-sky-700">
                        Find the Best College
                    </h2>
                    <h2 className="md:text-5xl text-xl md:mt-2 font-bold text-sky-700">
                        for your Future.
                    </h2>
                    <h3 className="md:text-base text-xs font-semibold md:mt-4 mt-2 text-sky-700 ">
                        Take your education anywhere you want, you lead and
                        we'll help.
                    </h3>
                </div>
                {/* this is the sub heading of the lading page */}
                <div className="flex flex-col mt-4">
                    <div className="mb-5">
                        <IAmReady></IAmReady>
                    </div>
                    <div className="gap-4 flex">
                        <IAmReadySmall name="college"></IAmReadySmall>
                        <IAmReadySmall name="careers"></IAmReadySmall>
                    </div>
                </div>
            </div>
            <div className="mt-8 pr-28 hidden md:flex">
                <img src="/placeholder.png" alt="" className="w-80 h-fit" />
            </div>
        </div>
    );
}
