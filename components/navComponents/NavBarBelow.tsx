import { NavigateButton, NavigateButtonIcon } from "./NavigateButton";

export default function NavBarBelow() {
    return (
        <div className="w-screen h-14 bg-sky-700 flex justify-between md:justify-start items-center gap-5 pl-2 md:pl-28">
            <NavigateButton href={""}>Home</NavigateButton>
            <NavigateButtonIcon href={""}>Courses</NavigateButtonIcon>
            <NavigateButtonIcon href={""}>Colleges</NavigateButtonIcon>
            <NavigateButton href={""}>News </NavigateButton>
            <NavigateButton href={""}>Contact Us</NavigateButton>
        </div>
    );
}
