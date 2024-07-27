import React from "react";
import "./css/Header.css"
import Data from "./data/data";
import { Fade } from "react-slideshow-image"


function Header() {



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
            <div class="head_1">
            <Fade>
              {slideImages.map((item , index) =>(
                <div  key={index}>
                  <div className="imgslide" style={{ 'backgroundImage': `url(${item.url})`}}>
                    <div className="title">
                      <h1>{item.caption}</h1>
                      <p>{item.description}</p>
                      <div className="buttons">
                      <button className="btnwhites">watch Trailer</button>
                        <button class="button_1">
                      <span class="button_lg">
                          <span class="button_sl"></span>
                          <span class="button_text">Download Now</span>
                      </span>
                    </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
              }
            </Fade>
            </div>
      </header>
    );
}

export default Header;