import Title from "./Title/Title.tsx";
import Ticker from "./Ticker/Ticker.tsx";
import LearnMore from "./LearnMore/LearnMore.tsx";
import BlueTicker from "./Ticker/BlueTicker.tsx";
import ImageSlider from "./Sliders/ImageSlider.tsx";
import RelyOnUs from "./RelyOnUS/RelyOnUs.tsx";
import WhyUs from "./WhyUs/WhyUs.tsx";
import Expertise from "./MarketingExpertise/Expertise.tsx";
import Benefits from "./Benefits/Benefits.tsx";
import GrowBusiness from "./GrowBusiness/GrowBusiness.tsx";
import AboutUs from "./AboutUs/AboutUS.tsx";
import Help from "./Help/Help.tsx";
import SwipeCards from "./SwipeCards/SwipeCards.tsx";
import RelyOnUsDT from "./RelyOnUS/RelyOnUsDT.tsx";
import BlueBlackTicker from "./Ticker/BlueBlackTicker.tsx";
import {useEffect} from "react";
import ContactForm from "../../components/ContactForm/ContactForm.tsx";

const Home = () => {
    useEffect(() => {
        window.scrollTo({top: 0});
    }, [])
    return (
        <div className="home-page">
            <Title/>
            <Ticker/>
            <LearnMore/>
            <div className="sm:hidden w-full sm:w-[1920px] overflow-y-hidden">
                <BlueTicker/>
            </div>
            <SwipeCards/>
            <ImageSlider/>
            <RelyOnUs/>
            <RelyOnUsDT/>
            <WhyUs/>
            <Expertise/>
            <Benefits/>
            <GrowBusiness/>
            <BlueBlackTicker/>
            <AboutUs/>
            <Help/>
            <ContactForm/>
        </div>
    );
};

export default Home;