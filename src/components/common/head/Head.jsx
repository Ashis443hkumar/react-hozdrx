import React from "react";
import './head.css'
export default function Head() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-6 head_left">
            
            <i class="fa-solid fa-envelope"></i>
            <label htmlFor="">SumitsangamSnp@gmail</label>
            <i class="fa-solid fa-phone"></i>
            <label htmlFor="">+91 98349 60553</label>
          </div>
          <div className="col-md-6 head_right">
            <div className="">
                <i class="fa-solid fa-cart-shopping"></i>

            </div>
          </div>
        </div>
      </div>
    </section>
     
  );
}
