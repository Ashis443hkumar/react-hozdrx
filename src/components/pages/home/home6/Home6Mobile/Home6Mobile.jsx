import React from 'react'
import "./style.css"
export default function Home6Mobile() {
  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <img src="https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg?auto=compress&cs=tinysrgb&w=600" className="img-fluid w-100" alt="" />
          </div>
          <div className="col-md-6">
             <h3>Responsive Designs</h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae cum dolore fugit impedit nisi, quasi saepe temporibus velit! Debitis, nihil velit? A accusantium adipisci aliquam amet aperiam aut consequuntur dolore ducimus eaque eius est eveniet fugiat maxime molestias natus necessitatibus quae sapiente suscipit tenetur veniam vero, voluptate voluptatum! At, quia!</p>
             <hr/>
              <div className="home6btn">
                 <i class="fa-solid fa-apple-whole"></i>
                 <i class="fa-brands fa-windows"></i>
                 <i class="fa-brands fa-android"></i>
                 <i class="fa-solid fa-paperclip"></i>
                 <i class="fa-brands fa-skype"></i>
                 <i class="fa-solid fa-download"></i>
              </div>
              <hr/>
              <div>
                <a href="" className="btn bg-warning">Read More</a>
                <a href="" className="btn bg-warning mx-3">Purchase Now</a>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
