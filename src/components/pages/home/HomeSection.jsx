import React from "react";
import Home1 from "./home1/Home1";
import Home2 from "./home2/Home2";
import Home3 from "./home3/Home3";

import { Routes, Route} from "react-router-dom";

import Home4 from "./home4/Home4";
import Home5 from "./home5/Home5";
import Home6 from "./home6/Home6";

export default function HomeSection() {
  return (
    <>
      <Routes>
        <Route path="/home1" element={<Home1/>} />
        <Route path='/home2' element={<Home2/>} />
        <Route path='/home3' element={<Home3/>}/>
        <Route path='/home4' element={<Home4/>}/>
        <Route path='/home5' element={<Home5/>}/>
        <Route path='/home6' element={<Home6/>}/>
      </Routes>
    </>
  );
}
