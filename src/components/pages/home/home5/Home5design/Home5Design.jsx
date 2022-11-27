import React from 'react'

export default function Home5Design() {
  return (
    <div className="container my-5">
      <div className="row my-4">
        <div className="col-md-6">
          <img src="https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=600" className="img-fluid" alt=""/>
        </div>
        <div className="col-md-6">
          <h3>Responsive Designs</h3>
          <hr/>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae cum dolore fugit impedit nisi, quasi saepe temporibus velit! Debitis, nihil velit? A accusantium adipisci aliquam amet aperiam aut consequuntur dolore ducimus eaque eius est eveniet fugiat maxime molestias natus necessitatibus quae sapiente suscipit tenetur veniam vero, voluptate voluptatum! At, quia!</p>
          <div className="home5btn">
            <a href="" className="btn bg-warning">Read More</a>
            <a href="" className="btn bg-warning danger mx-4">Purchase Now</a>
          </div>
        </div>
      </div>
    </div>
  );
}
