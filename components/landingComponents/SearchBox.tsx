import DropdownMenu from "./SelectOption";
export default function SearchBox() {
    return (
        <div className="mb-16">
            <p className="md:text-xl text-base font-semibold text-cyan-700 text-center ">
                Start your search below
            </p>
            <div className="flex md:flex-row flex-col  md:ml-28 ml-2 md:mt-4 mt-2 border rounded-md  border-gray-300 items-center md:w-fit w-screen mr-4 md:mr-0 ">
                <DropdownMenu name="Select degree"></DropdownMenu>
                <DropdownMenu name="Select categories"></DropdownMenu>
                <DropdownMenu name="Select subject"></DropdownMenu>
                <DropdownMenu name="Select degree"></DropdownMenu>
                <button className=" px-3 h-fit py-2 mx-2 bg-orange-500 text-white rounded-lg my-2 md:my-0">
                    Search programs
                </button>
            </div>
        </div>
    );
}
