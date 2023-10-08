import Link from "next/link";

interface NewsBoxSingleProps {
    imageUrl: string;
}
export default function NewsBox() {
    return (
        <div className="flex flex-row items-center gap-4 md:ml-24 ml-2 overflow-x-auto">
            <NewsBoxSingle imageUrl="/study.png"></NewsBoxSingle>
            <NewsBoxSingle imageUrl="/study2.png"></NewsBoxSingle>
            <NewsBoxSingle imageUrl="/study3.png"></NewsBoxSingle>
        </div>
    );
}
function NewsBoxSingle({ imageUrl }: NewsBoxSingleProps) {
    return (
        <div className="flex flex-col w-fit h-fit  shadow-md md:mb-44 mb-16 gap-3 pb-6 rounded-b-md">
            <img src={imageUrl} className="w-96 h-fit" />
            <div className="flex items-center mx-4  justify-between">
                <div className="text-xs px-1 rounded-md text-gray-500 bg-gray-100">
                    Information Technology
                </div>
                <div className="flex items-center gap-2">
                    <img src="/lady-icon.svg" className="" />
                    <span className="text-xs text-gray-400">Mick Harris</span>
                </div>
            </div>
            <div className="text-base text-gray-800 font-medium  justify-start ml-4  ">
                <span className="block">
                    Goodwill Saving closes NPR 16 Billion
                </span>
                <span className="block"> Project Loan....</span>
            </div>
            <div className="flex justify-between mx-4 items-center">
                <Link href={"#"} className="text-xs font-semibold text-sky-600">
                    Read More
                </Link>
                <div className="flex items-center gap-1">
                    <img src="/icon-base.svg" className="" />
                    <span className="block text-xs text-gray-400  ">
                        November 17, 2021
                    </span>
                </div>
            </div>
        </div>
    );
}
