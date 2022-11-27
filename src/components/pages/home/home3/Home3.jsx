import React from "react";
import Banner from "../../../common/banner/Banner";
import Hero from "../hero/Hero";
import HomeCard from "../home1/homeCard/HomeCard";
import ToClient from "../home1/homeToClients/ToClient";
import RecentWork from "../home1/recentWork/Recent";
import Home2Clients from "../home2/home2Clients/Home2Clients";
import HomeBanner from "../homeBanner/HomeBanner";
import Home3Design from "./home3design/Home3Design";

export default function Home3() {
  return (
    <div>
      <Hero/>
      <HomeCard/>
      <Home3Design/>
      <RecentWork/>
      <HomeBanner/>
      <Home2Clients/>
      <ToClient/>
      <Banner/>
    </div>
  );
}
