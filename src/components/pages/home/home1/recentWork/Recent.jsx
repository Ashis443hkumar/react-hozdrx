import React from "react";
import SubHeading from "../../../../common/subHeading/SubHeading";
import './style.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const responsive = {

  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};


export default function RecentWork() {

  const Sdata = [
      {
        id:"1",
        cover:  "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        id:"2",
        cover: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        id:"3",
        cover:  "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        id:"4",
        cover: "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=400"
      },
      {
        id:"5",
        cover:  "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        id:"6",
        cover: "https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        id:"7",
        cover:  "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600"
      }
  ]

  return (
    <div className="recentwork my-5">
      <div className="container">
         <SubHeading title="Recent Work" />

        <Carousel responsive={responsive} 
            swipeable={false}
            draggable={false}
            autoPlay={true}
            showDots={false}
            responsive={responsive}
            infinite={true}
            keyBoardControl={true}
            transitionDuration={2000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
      
      >
        {
          Sdata.map((val) =>{
            return(
              <>
              <div className="slider">
                  <img src={val.cover} alt="" />
              </div>
              </>
            )
          })
        }
  
      </Carousel>
         
      </div>
       
    </div>
  );
}
