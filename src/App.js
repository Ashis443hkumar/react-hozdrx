import React from "react";
import "./style.css";
import Head from './components/common/head/Head'
import Header from './components/common/header/Header'
import Footer from './components/common/footer/Footer'
import HomeSection from './components/pages/home/HomeSection';
import SortCoder from './components/pages/sortCoder/SortCoder'
import PagesSection from './components/pages/pages/PagesSection'


import {BrowserRouter,Routes, Route} from 'react-router-dom'

export default function App() {
  return (
    <div>
      <BrowserRouter>
         <Head/>
         <Header/>
         <HomeSection/>
         <SortCoder/>
         <PagesSection/>
         <Footer/>
      </BrowserRouter>
    </div>
  );
}
