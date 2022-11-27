import React from 'react'

export default function Button() {
  return (
    <div>
       <div className="container my-5">
         <h4>Buttons</h4>
         <hr/>
         <div className="row">
           <div className="col-md-2">
             <button className="btn bg-danger text-white px-4">LARGE BUTTON</button>
           </div>
           <div className="col-md-2">
             <button className="btn bg-primary text-white px-4">LARGE BUTTON</button>
           </div>
           <div className="col-md-2">
             <button className="btn bg-success text-white px-4">LARGE BUTTON</button>
           </div>
           <div className="col-md-2">
             <button className="btn bg-dark text-white px-4">LARGE BUTTON</button>
           </div>
           <div className="col-md-2">
             <button className="btn bg-warning text-white px-4">LARGE BUTTON</button>
           </div>
           <div className="col-md-2">
             <button className="btn bg-danger text-white px-4">LARGE BUTTON</button>
           </div>
         </div>

         <div className="row mt-5">
           <div className="col-md-2">
             <button className="btn bg-danger text-white py-1 px-3">Standard Button</button>
           </div>
           <div className="col-md-2">
             <button className="btn bg-primary text-white py-1 px-3">Standard Button</button>
           </div>
           <div className="col-md-2">
             <button className="btn bg-success text-white py-1 px-3">Standard Button</button>
           </div>
           <div className="col-md-2">
             <button className="btn bg-dark text-white py-1 px-3">Standard Button</button>
           </div>
           <div className="col-md-2">
             <button className="btn bg-warning text-white py-1 px-3">Standard Button</button>
           </div>
           <div className="col-md-2">
             <button className="btn bg-danger text-white py-1 px-3">Standard Button</button>
           </div>
         </div>

         <div className="row mt-5">
           <div className="col-md-2">
             <button className="btn bg-danger text-white py-1 px-4">Small Button</button>
           </div>
           <div className="col-md-2">
             <button className="btn bg-primary text-white py-1 px-4">Small Button</button>
           </div>
           <div className="col-md-2">
             <button className="btn bg-success text-white py-1 px-4">Small Button</button>
           </div>
           <div className="col-md-2">
             <button className="btn bg-dark text-white py-1 px-4">Small Button</button>
           </div>
           <div className="col-md-2">
             <button className="btn bg-warning text-white py-1 px-4">Small Button</button>
           </div>
           <div className="col-md-2">
             <button className="btn bg-danger text-white py-1 px-4">Small Button</button>
           </div>
         </div>

       </div>
    </div>
  );
}
