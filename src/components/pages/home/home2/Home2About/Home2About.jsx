import React from "react";
import SubHeading from "../../../../common/subHeading/SubHeading";
import './style.css'
export default function Home2About() {
  return (
     <div className="home2about">
       <div className="container py-5">
         <div className="row">
         <div className="col-md-6">
            <SubHeading title="About Us"  />

            <div className="clienttt mt-4">
              <p>
                Cras mattis consectetur purus sit amet fermen. Lorem ipsum dolor
                sit amet, consec adipiscing elit. Maecenas sed diam eget risus
                varius bland sit amet non fringilla ullamcorper magna. Nulla eu
                mi magna. Etiam suscipit commodo ad gravida.
              </p>
              <ul className="ullist">
                <li><i class="fa-solid fa-angle-right"></i> Donec convallis, metus nec tempus aliquet</li>
                <li> <i class="fa-solid fa-angle-right"></i> Aenean commodo ligula eget dolor</li>
                <li> <i class="fa-solid fa-angle-right"></i> Cum sociis natoque penatibus mag ipsum</li>
                <li> <i class="fa-solid fa-angle-right"></i> Lorem ipsum dolor sit amet cons adipiscing</li>
                <li> <i class="fa-solid fa-angle-right"></i> Accumsan vulputate faucibus turpis dictum</li>
              </ul>
            </div>
          </div>


           <div className="col-md-6">
             <img src="https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
           </div>
         </div>
       </div>
     </div>
  );
}
