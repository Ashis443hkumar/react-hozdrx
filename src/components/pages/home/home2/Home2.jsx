import React from "react";
import Banner from "../../../common/banner/Banner";
import Hero from "../hero/Hero";
import ToClient from "../home1/homeToClients/ToClient";
import HomeBanner from "../homeBanner/HomeBanner";
import Home2About from "./Home2About/Home2About";
import Home2Banner from "./home2Banner/Home2Banner";
import Home2Card from "./home2Card/Home2Card";
import Home2Clients from "./home2Clients/Home2Clients";

export default function Home2() {
  return (
     <div>
       <Hero/>
       <Banner/>
       <Home2Card/>
       <Home2About/>
       <Home2Clients/>
       <HomeBanner/>
       <ToClient/>
       <Home2Banner/>


       
     </div>
  );
}
