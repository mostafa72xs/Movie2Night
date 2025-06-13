/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import { useState , useEffect } from 'react';
import axios from 'axios'
import Home from './pages/Home.js';
import { Routes , Route } from 'react-router'
import Moviedetails from './pages/Moviedetails.js';
import Logs from './pages/Logs.js'
import Head from './head';


function App() {


const [ api , setApi ] = useState([]);

const TOTAL_PAGES = 10;

  const fetchMovies = async () => {
    let movies = [];

    try {
      for (let page = 1; page <= TOTAL_PAGES; page++) {
        const response = await axios.get("https://api.themoviedb.org/3/discover/movie", {
          headers: {
            accept: "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzhlNWYxOTVhYjQxMGM0OWEzNjM4ZTUxZjNmZjA1MiIsIm5iZiI6MTcxMzEyMDc3MC42ODIsInN1YiI6IjY2MWMyNjAyM2M4ODdkMDE5YmY0OWRhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c8ky44A-0ngGm2QSdPN5I_1bch7pZ7POfbn_CUuGc-s`,
          },
          params: {
            language: "en-US",
            page: page,
          },
        });

        movies = [...movies, ...response.data.results]; // Merge new movies
      }

      setApi(movies); // Update state with all fetched movies
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  }; 
  useEffect(() => {
    fetchMovies()
    console.log(api)
  }, []); 



  return (
    <div className="App">
      <Head />
      <Routes>
        <Route path='/' element={<Home api={api} />} />
        <Route path='/Logs' element={<Logs />} />
        <Route path='/MovieDetails' element={<Moviedetails api={api} />} />
      </Routes>
    </div>
  );
}

export default App;
