import React from 'react';
import './style.css';
import Carousel from 'react-material-ui-carousel';

export default function HomeTeam() {
  const data = [
    {
      id: '1',
      title: 'JONATHAN DOWER ',
      desc: 'Nunc aliquet tincidunt metus, sit amet mattis lectus sodales ac. Suspendisse rhoncus dictum eros, ut egestas eros luctus eget. Nam nibh sem, mattis et feugiat ut, porttitor nec risus',
      cover: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: '2',
      title: 'JONATHAN DOWER',
      desc: 'Metus aliquet tincidunt metus, sit amet mattis lectus sodales ac. Suspendisse rhoncus dictum eros, ut egestas eros luctus eget. Nam nibh sem, mattis et feugiat ut, porttitor nec risus',
      cover: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: '3',
      title: 'JONATHAN DOWER',
      desc: 'Donec convallis, metus nec tempus aliquet, nunc metus adipiscing leo, a lobortis nisi dui ut odio. Nullam ultrices, eros accumsan vulputate faucibus, turpis tortor dictum.:)',
      cover: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];
  return (
    <div className="teamhome">
      <Carousel
        className="carousel"
        indicators={false}
        animation="slide"
        duration="500"
        navButtonsAlwaysVisible={true}
      >
        {data.map((val) => (
          <div className="box">
            <div className="boximg">
                <p>{val.desc}</p>
                <img src={val.cover} />
                <h5>{val.title}</h5>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
