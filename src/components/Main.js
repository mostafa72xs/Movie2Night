import React  from "react";
import "./css/Main.css";
import Header from "./Header";
import Card from "./card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {usePopup} from './Context/PopUpcontext';



function Main(props) {
  
  
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 10,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 2,
    },
  };



  const genre = {
    genres: [
      { id: 28, name: "Action" },
      { id: 12, name: "Adventure" },
      { id: 16, name: "Animation" },
      { id: 35, name: "Comedy" },
      { id: 80, name: "Crime" },
      { id: 18, name: "Drama" },
      { id: 10751, name: "Family" },
      { id: 14, name: "Fantasy" },
      { id: 36, name: "History" },
      { id: 27, name: "Horror" },
      { id: 9648, name: "Mystery" },
      { id: 10749, name: "Romance" },
      { id: 53, name: "Thriller" },
      { id: 10752, name: "War" },
    ]
  };



  const [pop, setPop] = usePopup([]);


/*   const x = Math.floor(Math.random() * (Data.allmovies.length - 1));
 */
  
function filter(genreName) {
  const genreObj = genre.genres.find(
    g => g.name.toLowerCase() === genreName.toLowerCase()
  );

  if (!genreObj) return []; // Return empty array if genre not found

  const filtered = props.api.filter(movie =>
    movie.genre_ids.includes(genreObj.id)
  );

  return filtered;
}



  return (
    <div className="mainContent">
        <Header />
      

      <div className="titii">
        <div className="slider">
          <div className="h1">
            <h4>Popular movies</h4> <button className='button'>more</button>
          </div>
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            slidesToSlide={1}
            centerMode={true}
            className="cards"
            
          >
            {props.api.slice(0,20).map((item) => (
              <Card
                key={item.id}
                title={item.title}
                image={item.poster_path}
                item={item}
              />
            ))}
          </Carousel>
        </div>
        {genre.genres.map((ge)=>(
            <div className="slider">
            <div className="h1">
              <h4>{ge.name} movies</h4> <button className='button'>more</button>
            </div>
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              slidesToSlide={1}
              centerMode={true}
              className="cards"
            >
              {filter(ge.name).slice(0,20).map(
                (item, index) =>
                  index < 20 && (
                    <Card
                      key={item.id}
                      title={item.title}
                      image={item.poster_path}
                      item={item}
                    />
                  )
              )}
            </Carousel>
          </div>
          ))
          }
      </div>
    </div>
  );
}

export default Main;
