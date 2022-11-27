import React from "react";
import SubHeading from "../../../../common/subHeading/SubHeading";
import './style.css'

export default function MeetTeam() {

  return (
     <div>
       <div className="container my-4">
         <SubHeading title='Meet the Team' />
         <div className="row">
           <div className="col-md-3 meetTeam">
             <img src="https://images.pexels.com/photos/313690/pexels-photo-313690.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
           </div>
           <div className="col-md-3 meetTeam">
             <img src="https://images.pexels.com/photos/313690/pexels-photo-313690.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
           </div>
           <div className="col-md-3 meetTeam">
             <img src="https://images.pexels.com/photos/313690/pexels-photo-313690.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
           </div>
           <div className="col-md-3 meetTeam">
             <img src="https://images.pexels.com/photos/313690/pexels-photo-313690.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
           </div>

         </div>
       </div>
     </div>
  );
}
