import SignInButton from "./SignInButton";
import SignUpButton from "./SignUpButton";

export default function NavBarTop() {
    return (
        <div className="w-screen h-16 bg-white flex justify-between">
            <div className="flex items-center ml-4 md:ml-28">
                <img className=" w-fit h-10" src="/logo.svg"></img>'
            </div>
            <div className="flex flex-row gap-3 items-center  mr-2 md:mr-28">
                <SignInButton href={""}>Sign In</SignInButton>
                <SignUpButton href={""}>Sign Up</SignUpButton>
            </div>
        </div>
    );
}
