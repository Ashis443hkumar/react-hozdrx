import React from 'react'
import "./footer.css"
import SubHeading from '../subHeading/SubHeading'
export default function Footer() {
  return (
    <section className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3"> 
           <SubHeading title="ABOUT US" />
           <div className=""> 
               <p>Donec earum rerum hic tenetur ans sapiente delectus, ut aut reiciendise voluptat maiores alias consequaturs aut perferendis doloribus asperiores.</p>
               <p><i class="fa-solid fa-location-dot"></i> <strong>Address </strong>: #2021 Lorem Ipsum </p>
               <p><i class="fa-solid fa-phone"></i> <strong>Phone </strong>:91 9834 960553</p>
               <p><i class="fa-solid fa-envelope"></i> <strong>Email  </strong>: sumitsangam@gmail.com </p>
           </div>
          </div> 
          <div className="col-md-3"> 
           <SubHeading title="RECENT POSTS" />
           <div className=""> 
              <div>
                 <h6> Aenean commodo ligula eget dolor</h6>
                 <p>nonveber 7, 2021</p>
              </div>
              <div>
                 <h6> Temporibus autem quibusdam</h6>  
                 <p>nonveber 7, 2021</p>
              </div>
              <div>
                 <h6> Debitis aut rerum saepe</h6>  
                 <p>nonveber 7, 2021</p>
              </div>
              <div>
                 <h6>Et voluptates repudiandae </h6>  
                 <p>nonveber 7, 2021</p>
              </div>
           </div>
          </div> 
          <div className="col-md-3"> 
           <SubHeading title="TWITTER" />
           <div className=""> 
              <div>
                 <h6> Aenean commodo ligula eget dolor</h6>
                 <p>nonveber 7, 2021</p>
              </div>
              <div>
                 <h6> Temporibus autem quibusdam</h6>  
                 <p>nonveber 7, 2021</p>
              </div>
              <div>
                 <h6> Debitis aut rerum saepe</h6>  
                 <p>nonveber 7, 2021</p>
              </div>
              <div>
                 <h6>Et voluptates repudiandae </h6>  
                 <p>nonveber 7, 2021</p>
              </div>
           </div>
          </div> 
          <div className="col-md-3"> 
           <SubHeading title="FLICKR GALLERY" /> 
               
          </div>


        </div>
      </div>
    </section>
  );
}
