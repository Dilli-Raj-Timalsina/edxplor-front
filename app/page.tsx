import Hero from "@/components/landingComponents/Hero";
import Passion from "@/components/landingComponents/Passion";
import AgricultureBox from "@/components/landingComponents/AgricultureBox";
import CompareBox from "@/components/landingComponents/CompareBox";
import SearchBox from "@/components/landingComponents/SearchBox";
import FindFrom from "@/components/landingComponents/FindFrom";
import LatestNews from "@/components/landingComponents/LatestNews";
import NewsBox from "@/components/landingComponents/NewsBox";
import AmplifyBox from "@/components/landingComponents/AmplifyBox";
import TrustUs from "@/components/landingComponents/TrustUs";
import LogoList from "@/components/landingComponents/LogoList";
import Footer, { CopyRight } from "@/components/footerComponents/Footer";

export default function Home() {
    return (
        <div className=" w-screen overflow-x-hidden bg-white">
            <Hero></Hero>
            <Passion></Passion>
            <AgricultureBox></AgricultureBox>
            <CompareBox></CompareBox>
            <SearchBox></SearchBox>
            <FindFrom></FindFrom>
            <LatestNews></LatestNews>
            <NewsBox></NewsBox>
            <AmplifyBox></AmplifyBox>
            <TrustUs></TrustUs>
            <LogoList></LogoList>
            <Footer></Footer>
            <CopyRight></CopyRight>
        </div>
    );
}
