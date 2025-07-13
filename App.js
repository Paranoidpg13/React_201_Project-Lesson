import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutView from './components/AboutView';
import SearchView from './components/SearchView';
import MovieView from './components/MovieView';
import { Routes, Route} from 'react-router-dom';
import Page_nf from './components/Page_nf';




function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');
  
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmY4MjkxMzBkZDJhM2Y0NTZiMzhiNTg2ZGM2ZDUwYyIsIm5iZiI6MTczNjQ5OTk0OS4wOTksInN1YiI6IjY3ODBlMmVkMzg4MTc0MzdlMmJiMTY0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ",
        

      },
    };
 
    if (searchText) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=56f829130dd2a3f456b38b586dc6d50c&query=${searchText}&include_adult=false&language=en-US&page=1`,
        options
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data.results);
          setSearchResults(data.results);
        });
    }
  }, [searchText]);

  return (
    <div>  
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      
      <Routes>
        <Route path="/" exact element={<Home />} />
        
        <Route path="/about" element={<AboutView />} />

        <Route path="/search" element={<SearchView keyword={searchText} searchResults={searchResults} />} />
        
        <Route path="/movies/:id" element={<MovieView />} />

        <Route path="/*" element = {<Page_nf />} />
      </Routes>
      
    </div>
  );
}

export default App;
