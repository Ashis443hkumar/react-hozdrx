import React from 'react'

export default function SocailButton(){
  return (
    <div>
      <div className="container">
        <h4>Social Button</h4>
        <hr/>
        <div className="row">
          <div className="col-md-4">
            <button className="btn bg-danger text-white">Connect With Google</button>
          </div>
          <div className="col-md-4">
            <button className="btn bg-primary  text-white">Connect With Facebook</button>
          </div>
          <div className="col-md-4">
            <button className="btn bg-success  text-white">Connect With Twitter</button>
          </div>
          <div className="col-md-4 mt-5">
            <button className="btn bg-warning  text-white">Connect With YouTube</button>
          </div>
          <div className="col-md-4 mt-5">
            <button className="btn bg-danger  text-white">Connect With Linkdine</button>
          </div>
          <div className="col-md-4 mt-5">
            <button className="btn bg-dark  text-white">Connect With Google</button>
          </div>
        </div>
      </div>
       
    </div>
  );
}
