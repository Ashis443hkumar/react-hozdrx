import React from "react";
import Banner from "../../../common/banner/Banner";
import Hero from "../hero/Hero";
import HomeCard from "./homeCard/HomeCard";
import HomeClients from "./homeClient/HomeClients";
import MeetTeam from "./homeMeetTeam/MeetTeam";
import HomeTeam from "./homeTeam/HomeTeam";
import ToClient from "./homeToClients/ToClient";
import RecentWork from "./recentWork/Recent";

export default function Home1() {
  return (
    <div>
      <Hero/>
      <HomeCard/>
      <RecentWork/>
      <HomeTeam/>
      <HomeClients/>
      <MeetTeam/>
      <ToClient/>
      <Banner className="bbbrr" style={{padding:'12rem'}} />

    </div>
  );
}
