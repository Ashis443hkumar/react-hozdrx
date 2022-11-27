import React from "react";
import "./style.css"
export default function Banner() {
  return (
     <section className="banner">
       <div className="container">
         <div className="row">
           <div className="col-md-8">
             <h4>ProBusiness is awesome responsive template, with clean design.</h4>
             <p>Lorem ipsum dolor sit amet, cons adipiscing elit. Aenean commodo ligula eget dolor.</p>
           </div>
           <div className="col-md-4 banner_right">
             <a href="" className="">DownLoad Now</a>
           </div>
         </div>
       </div>
     </section>
  );
}
