import React from 'react'
import Banner from '../../../common/banner/Banner';
import Hero from '../hero/Hero';
import ToClient from '../home1/homeToClients/ToClient';
import RecentWork from '../home1/recentWork/Recent';
import Home5About from './home5About/Home5About';
import Home5Design from './Home5design/Home5Design';

export default function Home5() {
  return (
    <div>
      <Hero/>
      <Home5About/>
      <RecentWork/>
      <Home5Design/>
      <ToClient/>
      <Banner/>

    </div>
  );
}
