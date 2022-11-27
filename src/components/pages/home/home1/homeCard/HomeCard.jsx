import React from "react";
import Heading from "../../../../common/heading/Heading";
import './style.css'
export default function HomeCard() {
  return (
    <section className="homeCard">
      <div className="container">
      <Heading   title="ProBusiness ! We are ProBusiness Template" 
        subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nesciunt odit sunt vitae voluptatibus. Ad animi dicta dolore et illo incidunt sint."
        />
        <div className="row">

          <div className="col-md-3">
            <div className="card">
              <div className="imgcard">
                  <i class="fa-brands fa-firefox"></i>
              </div>
              <div className="card-body">
                <h3>Web Development</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum malesuada.</p>
                <a href="">Read More........</a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="imgcard">
                  <i class="fa-brands fa-firefox"></i>
              </div>
              <div className="card-body">
                <h3>Web Development</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum malesuada.</p>
                <a href="">Read More........</a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="imgcard">
                  <i class="fa-brands fa-firefox"></i>
              </div>
              <div className="card-body">
                <h3>Web Development</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum malesuada.</p>
                <a href="">Read More........</a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="imgcard">
                  <i class="fa-brands fa-firefox"></i>
              </div>
              <div className="card-body">
                <h3>Web Development</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum malesuada.</p>
                <a href="">Read More........</a>
              </div>
            </div>
          </div>
          

        </div>
      </div>
    </section>
  );
}
