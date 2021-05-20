import React from "react";

import Hero from "../components/Hero";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Plugins from "../components/Plugins";
import News from "../components/News";
import Trust from "../components/Trust";
import TrustCarousel from "../components/TrustCarousel";
import Tools from "../components/Tools";
import Customer from "../components/Customer";
import Discover from "../components/Discover";

export default function Home() {
    return (
        <>
            <Header/>
            <Hero/>
            <Carousel/>
            <Plugins/>
            <News/>
            <Trust/>
            <TrustCarousel/>
            <Tools/>
            <Customer/>
            <Discover/>
        </>
    )
}
