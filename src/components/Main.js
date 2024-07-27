import React ,{useState} from "react";
import "./css/Main.css";
import Header from "./Header";
import Data from "./data/data";
import Card from "./card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaStar } from "react-icons/fa6";
import {usePopup} from './Context/Themecontext';



function Main() {


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
      items: 1,
    },
  };


  const [pop, setPop] = usePopup(false);




/*   const x = Math.floor(Math.random() * (Data.allmovies.length - 1));
 */
  function filter(fill) {
    const filteredcomedy = Data.allmovies.filter((val) =>
      val.genre.includes(fill)
    );
    return filteredcomedy;
  }

  return (
    <div className="main-content">
      <Header />

      <div className="container">
        {/* <div className="filterbtn">
                    <button>Comedy</button>
                    <button>Action</button>
                    <button>Adventure</button>
                    <button>Drama</button>
                    <button>Crime</button>
                    <button>Mystery</button>
                    <button>Romance</button>
                    <button>War</button>
                    <button>Horror</button>
                    <button>Sci-Fi</button>
                    <button>Family</button>
                    <button>Animation</button>
                </div> */}
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
            {Data.pop.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                image={item.image}
                item={item}
                click={() => {
                  setPop(item);
                }}
              />
            ))}
          </Carousel>
        </div>
        <div className="slider">
          <div className="h1">
            <h4>Action movies</h4> <button className='button'>more</button>
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
            {filter("Action").map(
              (item, index) =>
                index < 20 && (
                  <Card
                    key={index}
                    title={item.title}
                    image={item.image}
                    item={item}
                    click={() => {
                      setPop(item);
                    }}
                  />
                )
            )}
          </Carousel>
        </div>
        <div className="slider">
          <div className="h1">
            <h4>Comedy movies</h4> <button className='button'>more</button>
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
            {filter("Comedy").map(
              (item, index) =>
                index < 20 && (
                  <Card
                    key={index}
                    title={item.title}
                    image={item.image}
                    item={item}
                    click={() => {
                      setPop(item);
                    }}
                  />
                )
            )}
          </Carousel>
        </div>
        <div className="slider">
          <div className="h1">
            <h4>Horrer movies</h4> <button className='button'>more</button>
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
            {filter("Horror").map(
              (item, index) =>
                index < 20 && (
                  <Card
                    key={index}
                    title={item.title}
                    image={item.image}
                    item={item}
                    click={() => {
                      setPop(item);
                    }}
                  />
                )
            )}
          </Carousel>
        </div>
        <div className="slider">
          <div className="h1">
            <h4>Animation movies</h4> <button className='button'>more</button>
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
            {filter("Animation").map(
              (item, index) =>
                index < 20 && (
                  <Card
                    key={index}
                    title={item.title}
                    image={item.image}
                    item={item}
                    click={() => {
                      setPop(item);
                    }}
                  />
                )
            )}
          </Carousel>
        </div>
        <div className="slider">
          <div className="h1">
            <h4>Drama movies</h4> <button className='button'>more</button>
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
            {filter("Drama").map(
              (item, index) =>
                index < 20 && (
                  <Card
                    key={index}
                    title={item.title}
                    image={item.image}
                    item={item}
                    click={() => {
                      setPop(item);
                    }}
                  />
                )
            )}
          </Carousel>
        </div>
      </div>
      {pop  ? (
        <div className ='model'>
        <div className="modeed">
          <div className='imagedd'>
            <img src={pop.image} alt="imfa" />
          </div>

          <button
            onClick={() => {
              setPop(false);
            }}
            className="close"
          >
            X
          </button>
          <div className="info">
            <h4 style={{"marginTop" : "-20px" , "paddingBottom": "20px" , "paddingTop": "20px"}}>Year:  {pop.year}</h4>
            <h3 style={{"marginTop" : "-20px" , "paddingBottom": "20px" , "paddingTop": "20px"}}>{pop.title}</h3>
            <h4 style={{"marginTop" : "-20px" , "paddingBottom": "20px" , "paddingTop": "20px"}}>
              Rating:   {pop.rating}
              <FaStar style={{ color: "gold"}} />
            </h4>
            <button className="imdbbtn">IMDB</button>
          </div>
          <div className="btnsd">
              <button className='playbtn'>Watch Now</button>
              <button className='playbtn'>Download It</button>

          </div>
          <div className="des">
            <h1>Description</h1>
            <h3>{pop.description}</h3>
          </div>
        </div>
      </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Main;
