import React from 'react'
import { usePopup } from '../components/Context/PopUpcontext'
import '../components/css/MovieD.css'
import { FaStar } from 'react-icons/fa6';
import { FaPlay } from "react-icons/fa6";
import { CiBookmark } from "react-icons/ci";
import { BsCloudDownload } from "react-icons/bs";
import Card from "../components/card.js";
import Nav from '../components/Nav.js';
 

function Moviedetails(props) {
    const [ pop , setPop ] = usePopup([]);

    const apps = props.api;

    const filterapps = apps.filter(n => n.title !== pop.title);
    console.log(pop)
    const stars = Array(5).fill(pop.vote_average.toFixed(0))
        const colors={
            yellow: "yellow",
            grey:"a9a9a9"
        }
        const sizes = document.querySelectorAll('.size');
        sizes.forEach(button => {
            button.addEventListener('click', () => {
            sizes.forEach(button => button.classList.remove(' select'));
            button.classList.add(' select');
            });
          });

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
  function getGenreNameById(id) {
  const genreObj = genre.genres.find(g => g.id === id);
  return genreObj ? genreObj.name : "Sci-fi";
}


function filterd(genreName) {
    const genreObje = genre.genres.find(
      g => g.name === genreName
    );
  
    if (!genreObje) return []; // Return empty array if genre not found
  
    const filtered = filterapps.filter(movie =>
      movie.genre_ids.includes(genreObje.id)
    );
  
    return filtered;
  }

return (
    <div className='MovieD'>
        <Nav
              data={props.api}
              />
        <div className='backdrop' style={{backgroundImage:`url(https://image.tmdb.org/t/p/w500${pop.backdrop_path})`}} >
            <div className='deti'>
                <div className='dede'>
                    <div className='de'>
                    <img src={`https://image.tmdb.org/t/p/w500${pop.poster_path}`} alt='poster' height='300px' width='200px' className='post' />
                    <div className='boxof'>
                        <h3>{pop.title}</h3>
                        <h3>Movie</h3>
                        <div className='rate'>
                                <div style={{color:'yellow' , paddingRight:'10px'}}>{pop.vote_average.toFixed(1)}</div>
                            <div>
                                {stars.map((rating ,index) => {
                                    return (
                                            <FaStar
                                                key={index}
                                                size={15}
                                                color={(rating) > index ? colors.yellow : colors.grey}
                                            />
                                        )
                                    })}
                            </div>
                            
                        </div> 
                        <div>
                            <h3 className='mt-3'>Date: {pop.release_date}</h3>
                        </div>
                        <div className='gen'>
                            {pop.genre_ids.map((num) =>(
                                <div key={num} className='g'>
                                {getGenreNameById(num)}
                                </div>
                            ))
                            }
                        </div>
                        <p>{pop.overview}</p>
                    </div>
                </div>
                <div className='btnsD'>
                    <button>
                        Play <FaPlay/>
                    </button>
                    <button>
                        Add to watchlist <CiBookmark/>
                    </button>
                    <button>
                        Download <BsCloudDownload/>
                    </button>
                </div>
                </div>
                
            </div>
        </div>
        <div className='liket'>
            <div className='lk'>
                <h1>
                    Similar Movies
                </h1>
            </div>
            <div className='apilist'>
            {filterd(getGenreNameById(pop.genre_ids[0])).slice(0,31).map((item) => (
                <Card
                key={item.id}
                title={item.title}
                image={item.poster_path}
                item={item}
              />
            ))
            }
            </div>
            
        </div>
    </div>
  )
}

export default Moviedetails