import React from "react";
import "./css/Header.css"
import Data from "./data/data";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaDeaf } from "react-icons/fa";





function Header(props) {




  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    arrows: false,
    speed: 2000,
    autoplaySpeed: 5000,
    pauseOnHover:true,
    autoplay: true, // we manually rotate
    waitForAnimate: false,
    fade:true,
    cssEase: "linear"
  };

    const slideImages = [
      {
        url:"https://d23.com/app/uploads/2013/04/1180w-600h_a-to-z-monsters-inc.jpg",
        caption: Data.allmovies[46].title,
        description:Data.allmovies[46].description
      },
      {
        url: 'https://terrigen-cdn-dev.marvel.com/content/prod/2x/fox_logan_lob_mas_mob_01.jpg',
        caption: Data.allmovies[33].title,
        description:Data.allmovies[33].description
      },
      {
        url: "https://miro.medium.com/v2/resize:fit:1400/1*jT56BD_aMPdOjZgXPyCijw.jpeg",
        caption: Data.allmovies[32].title,
        description:Data.allmovies[32].description
      },
      ];
    

    return ( 
        <header>
            <div className="head1" style={{ maxWidth: '1250px', margin: 'auto' }}>
                <Slider {...settings}>
                  {slideImages.map((item , index) =>(
                    <div key={index}>
                    <div className="imgslide" style={{ 'backgroundImage':  `url(${item.url})`}}>
                    <div className="title">
                      <h1>{item.caption}</h1>
                      <p>{item.description}</p>
                      <div className="buttons">
                      <button className="btnwhites">watch Trailer</button>
                        <button className="button_1">
                      <span className="button_lg">
                          <span className="button_sl"></span>
                          <span className="button_text">Download Now</span>
                      </span>
                    </button>
                      </div>
                    </div>
                  </div>
                  </div>
                  ))

                  }
                </Slider>
            </div>
      </header>
    );
}

export default Header;