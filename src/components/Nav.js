import React, { useState } from "react"
import "./css/Nav.css"

import { FiSearch } from "react-icons/fi";
import { FaHouse } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";
import { FaFolder } from "react-icons/fa";
import Data from "./data/data"
import { usePopup } from "./Context/Themecontext";
import { useSelector } from "react-redux"


function Nav(){
    const cartitem = useSelector(state => state.cart.cart)
    const [pop ,setPop] = usePopup()
    const [ settings , setSettings ] = useState(false)
    const [ library , setLibrary ] = useState(false)
    const [ search , setSearch ] = useState(false)
    
    
    const handle = () => {
        setSettings(true);
        setSearch(false);
        setLibrary(false)
    }
    const sec = ()=>{
        setSearch(true);
        setSettings(false);
        setLibrary(false)
    } 
    const third = ()=>{
        setSearch(false);
        setSettings(false);
        setLibrary(true);
        setPop(false)
    } 
    const handlhome = () =>{
        setSearch(false);
        setSettings(false);
        setLibrary(false)
        window.location.reload()
    }

    const [filtereded , setFiltered] =useState(Data.allmovies);

    const handleFilter = (event) => {
        const value = event.target.value;
        const mode = value.replace(/(^\w|\s\w)(\S*)/g, (_,m1,m2) => m1.toUpperCase()+m2.toLowerCase());
        if(value.length > 1){
            const filtered = Data.allmovies.filter(user => user.title.includes(mode));
            
        setFiltered(filtered);
        }
        else{
            return setFiltered(Data.allmovies)
        }
        
    };

    return(
            <nav>
                <div className="mainnav">
                    <h1>M2N</h1>
                    <h2>Movie2Night</h2>
                    <div className="Login">
                        <button>Login in</button>
                        <button>Sign Up</button>
                    </div>
                </div>
        <div class="sidenav" id="sidenav" >
            <div className="i1 " onClick={handlhome}>
                <div className='logos'>
                    Movie2Night
                </div>
                <div class="icon ph">
                    <FaHouse />
                </div>
                <span>HOME</span>
            </div>
            <div className="i1 px" onClick={third}>
                <div class="icon">
                    <FaFolder />
                </div>
                <span>LIBRARY</span>
            </div>
            <div className="i1 pi" id="search" onClick={sec }>
                <div class="icon">
                    <FiSearch />
                </div>
                <span>SEARCH</span>
            </div>
            
            <div className="i1 px">
                <div class="icon">
                <a href="https://github.com/mostafa72xs/movie2Night">
                <FaGithub />
                </a>
                </div>
                <span>GITHUB</span>
            </div>
            <div className="i1 pi"  onClick={ handle } >
                <div class="icon">
                    <IoIosSettings />
                </div>
                <span>SETTINGS</span>
            </div>
        </div>
        {settings ? <div className="models">
                
                <div className="modeeds sett" >
                        <button className="closebtnssx" onClick={() => setSettings(false)}>X</button>
                        <div className="settings">
                            <div className="themes">
                            <h1>Themes</h1>
                        <div className="themsbtns">
                            <button className="btnsss bp" variant="primary"  onClick={() => document.body.setAttribute("data-theme", "darkBlue-theme")}>H <span>Default</span></button>
                            <button className="btnsss bg" variant="sec"  onClick={() => document.body.setAttribute("data-theme", "black-theme")}>H<span>Black</span></button>
                            <button className="btnsss pc" variant="succes"  onClick={() => document.body.setAttribute("data-theme", "purple-theme")}>H <span>Purple</span></button>
                            <button className="btnsss bo" variant="third"  onClick={() => document.body.setAttribute("data-theme", "brown-theme")}>H <span>Brown</span></button>
                        </div>
                    </div>
                    <div className="feedback">
                        <h1>Feedback</h1>
                        <form>
                            <input type='email' placeholder="Email"/>
                            <input type='text' placeholder="Enter your Feedback" />
                            <button>Submit</button>
                        </form>
                    </div>
                        </div>
                    
                </div>
            </div>
            : ""}

            {search ? <div className="models">
                <div className="modeeds search">
                <button className="closebtnss sea" onClick={() => setSearch(false)}>x</button>
                <div className="maps">
                <input type='text' placeholder='Search' onChange={handleFilter} />
                <div className="list">
                    {filtereded.map(item  => (
                        <div  className='cardwatchlist' style={{backgroundImage:`url("${item.image}")`}}>
                        <div className="showup" onClick={() => setPop(item)} >
                            <div className="h3">{item.title}</div>
                            <div className="h4">{item.genre[0]} , {item.genre[1]} , {item.genre[2]}</div>
                            <div className='divi'>
                                <div>
                                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png' alt='pngg' />
                                </div>
                                <FaStar />
                                <span>{item.rating}</span>
                            </div>
                    </div>
                    </div>
                ))}
                </div>
                </div>
                </div>
            </div>
            : ''}
            {library ? <div className="models">
                <div className="modeeds modes">
                <button className="closebtnss" onClick={() => setLibrary(false)}>x</button>
                <div className="namee">Watchlist</div>
                <div className="watchlist">
                    {cartitem.map((item , index) => {
                            return(
                                <div key={index.id} className='cardwatchlist' style={{backgroundImage:`url("${item.image}")`}}>
                                <div className="showup" onClick={() => setPop(item)} >
                                    <div className="h3">{item.title}</div>
                                    <div className="h4">{item.genre[0]} , {item.genre[1]} , {item.genre[2]}</div>
                                    
                                    <div className='divi'>
                                        <div>
                                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png' alt='pngg' />
                                        </div>
                                        <FaStar />
                                        <span>{item.rating}</span>
                                        
                                    </div>
                            </div>
                            </div>
                            )
                            
                        })
                    }
                </div>
                </div>
            </div>
            : ''}
            
    </nav>
    
    
    )
}



export default Nav;