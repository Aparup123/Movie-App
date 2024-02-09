import React, { useState, useEffect } from "react";

import MovieCard from './MovieCard'
export default function App() {
  const [movieData, setMovieData] = useState([]);
  const [movieName, setMovieName]= useState('');
  const [inputValue, setInputValue]=useState('');
  const [mainMovie, setMainMobvie]=useState('');
function click(){
    setMovieName(inputValue);
  }
  function mainMovieClicked(imdbID){
    setMainMobvie(imdbID);
    console.log(mainMovie);
  }
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=eb5a9790&s=${movieName}`);
      const data = await response.json();
      console.log(data);
      setMovieData(data.Search);
    }

    fetchData();
  }, [movieName]);
 
  
  return (
    <div className="mx-auto">
    <div className="mx-auto">
<h1 className="mx-auto text-2xl text-sky-500 text-4xl mt-3">Movie search</h1>
    </div>
      <div className="text-2xl">
      <input placeholder="Search" onChange={e=>setInputValue(e.target.value)} className="border-2 border-red-400 p-1 m-1 "></input>
      <button onClick={click} className="button border-slate-300 m-2 p-1 bg-sky-400">Fetch</button>
      </div>
      <div className="flex flex-wrap justify-around">
      { movieData && movieData.map((item) => (
        <MovieCard item={item} click={mainMovieClicked} key={item.imdbID}/>
      ))}
      </div>
    </div>
  );
}
