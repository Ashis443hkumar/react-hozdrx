import React from "react";
import Banner from "../../../common/banner/Banner";
import Hero from "../hero/Hero";
import ToClient from "../home1/homeToClients/ToClient";
import HomeBanner from "../homeBanner/HomeBanner";

export default function Home4() {
  return (
    <div>
      <Hero/>
      <Banner/>
      
      <HomeBanner/>
      <ToClient/>

    </div>
  );
}
