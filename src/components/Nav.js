import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { FaHouse, FaStar, FaFolder } from "react-icons/fa6";
import { FaGithub, FaRegTrashAlt } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { FormContext } from "../components/Context/LoginContext";
import { RxHamburgerMenu } from "react-icons/rx";
import { usePopup } from "./Context/PopUpcontext";
import { useDispatch } from "react-redux"
import { removeItem } from './Reducer/reducer'
import "./css/Nav.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function Nav({ data }) {

  const cartItem = useSelector((state) => state.cart.cart);
      const dispatch = useDispatch()
  
  const [pop, setPop] = usePopup();
  const { formData, resetForm } = useContext(FormContext);
  const [settings, setSettings] = useState(false);
  const [library, setLibrary] = useState(false);
  const [search, setSearch] = useState(false);
  const [val, setVal] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const navigate = useNavigate();

  const handleLogout = () => {
    resetForm();
    navigate("/Logs");
  };

  const openMovieDetails = (movie) => {
    setPop(movie);
    navigate("/Moviedetails");
  };

  const handleNavigation = (view) => {
    setSearch(false);
    setSettings(false);
    setLibrary(false);
    if (view === "home") navigate("/");
    if (view === "settings") setSettings(true);
    if (view === "search") setSearch(true);
    if (view === "library") setLibrary(true);
  };

  const getGenreName = (genreId) => {
    const genres = {
      28: "Action",
      35: "Comedy",
      18: "Drama",
      27: "Horror",
      16: "Animation",
    };
    return genres[genreId] || "Unknown";
  };

  const handleFilter = (e) => {
    const input = e.target.value;
    setVal(input);

    const formattedInput = input.replace(/(^\w|\s\w)(\S*)/g, (_, m1, m2) =>
      m1.toUpperCase() + m2.toLowerCase()
    );

    if (input.length > 1) {
      const filtered = data.filter((item) =>
        item.title.includes(formattedInput)
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  };

  return (
    <nav className="navbar mainnav navbar-expand-lg">
      <a className="navbar-brand text-white h1 bran" href="/">Movie2Night</a>
      <button
        className="navbar-toggler mr-3"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style={{color:'white'}}
      >
        <RxHamburgerMenu />
      </button>
      <div className="collapse navbar-collapse navbarContent " id="navbarContent">
        <div className="me-auto mt-2 mb-2 mt-lg-0 d-flex align-items-center">
          <input 
            type="text"
            className="sera"
            placeholder="Search"
            value={val} 
            onClick={() => handleNavigation("search")}
            onChange={handleFilter}
            style={{ maxWidth: "300px" }}
          />
        </div>

        {/* Right Icons + Login */}
        <div className="d-flex align-items-center gap-3 flex-wrap text-white navight ml-2">
          <div className="icon d-flex gap-2">
            <div className='hovre' onClick={() => handleNavigation("home")} style={{ cursor: "pointer" }}>
            <FaHouse size={20} />
          </div>
          <div className='hovre' onClick={() => handleNavigation("library")} style={{ cursor: "pointer" }}>
            <FaFolder size={20} />
          </div>
          <div className='hovre' onClick={() => handleNavigation("settings")} style={{ cursor: "pointer" }}>
            <IoIosSettings size={22} />
          </div>
          <a
            href="https://github.com/mostafa72xs/movie2Night"
            className="text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={20} />
          </a>
          </div>
          

          {/* Login Section */}
          <div className="d-flex align-items-center">
            {formData.name === "" ? (
              <a href="/Logs">
                <button className="btn btn-outline-light btn-sm">Sign In</button>
              </a>
            ) : (
              <div className="text-white d-flex align-items-center gap-2">
                <div>
                  <p className="mb-0">Welcome {formData.name}</p>
                  <p className="mb-0">Email: {formData.email}</p>
                </div>
                <button className="btn btn-sm btn-outline-danger" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Settings Modal */}
      {settings && (
        <div className="models">
          <div className="modeeds sett">
            <button className="closebtnssx" onClick={() => setSettings(false)}>
              X
            </button>
            <div className="settings">
              <div className="themes">
                <h1>Themes</h1>
                <div className="themsbtns">
                  <button
                    className="btnsss bp"
                    onClick={() =>
                      document.body.setAttribute("data-theme", "darkBlue-theme")
                    }
                  >
                    H <span>Default</span>
                  </button>
                  <button
                    className="btnsss bg"
                    onClick={() =>
                      document.body.setAttribute("data-theme", "black-theme")
                    }
                  >
                    H <span>Black</span>
                  </button>
                  <button
                    className="btnsss pc"
                    onClick={() =>
                      document.body.setAttribute("data-theme", "purple-theme")
                    }
                  >
                    H <span>Purple</span>
                  </button>
                  <button
                    className="btnsss bo"
                    onClick={() =>
                      document.body.setAttribute("data-theme", "brown-theme")
                    }
                  >
                    H <span>Brown</span>
                  </button>
                </div>
              </div>

              <div className="feedback">
                <h1>Feedback</h1>
                <form>
                  <input type="email" placeholder="Email" />
                  <input type="text" placeholder="Enter your Feedback" />
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Search Modal */}
      {search && (
        <div className="models">
          <div className="modeeds search">
            <div className="maps">
              <div className="guner">
                <input
                  type="text"
                  placeholder="Search"
                  value={val}
                  onChange={handleFilter}
                />
                <button
                  className="closebtnss sea"
                  onClick={() => setSearch(false)}
                >
                  x
                </button>
              </div>

              <div className="list">
                {filteredData.map((item) => (
                  <div
                    key={item.id}
                    className="cardwatchlist"
                    style={{
                      backgroundImage: `url("https://image.tmdb.org/t/p/w500${item.poster_path}")`,
                    }}
                  >
                    <div className="showup" onClick={() => openMovieDetails(item)}>
                      <div className="h3">{item.title}</div>
                      <div className="h4">
                        {getGenreName(item.genre_ids[0])},{" "}
                        {getGenreName(item.genre_ids[1])},{" "}
                        {getGenreName(item.genre_ids[2])}
                      </div>
                      <div className="divi">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
                          alt="IMDB"
                        />
                        <FaStar />
                        <span>{item.vote_average.toFixed(1)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Watchlist Modal */}
      {library && (
        <div className="models">
          <div className="modeeds modes">
            <button className="closebtnss" onClick={() => setLibrary(false)}>
              x
            </button>
            <div className="namee">Watchlist</div>
            <div className="watchlist">
              {cartItem.map((item) => (
                <div
                  key={item.id}
                  className="cardwatchlist"
                  style={{
                    backgroundImage: `url("https://image.tmdb.org/t/p/w500${item.poster_path}")`,
                  }}
                >
                  <button className="c" onClick={() => dispatch(removeItem(item.id))}>
                    <FaRegTrashAlt />
                  </button>
                  <div className="showup" onClick={() => openMovieDetails(item)}>
                    <div className="h3">{item.title}</div>
                    <div className="h4">
                      {getGenreName(item.genre_ids[0])},{" "}
                      {getGenreName(item.genre_ids[1])},{" "}
                      {getGenreName(item.genre_ids[2])}
                    </div>
                    <div className="divi">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
                        alt="IMDB"
                      />
                      <FaStar />
                      <span>{item.vote_average.toFixed(1)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;


/* function getGenreId(genreName) {
        const genres = {
          /* Action: 28,
          Comedy: 35,
          Drama: 18,
          Horror: 27,
          Animation: 16, 
          28:"Action",
          35:"Comedy",
          18:"Drama",
          27:"Horror",
          16:"Animation",

        };
        return genres[genreName] || null;
      } */