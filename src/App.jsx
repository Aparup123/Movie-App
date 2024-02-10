import React, { useState, useEffect } from "react";
import MainMovie from "./MainMovie";
import MovieCard from './MovieCard'
export default function App() {
  const [movieData, setMovieData] = useState([]);
  const [movieName, setMovieName]= useState('');
  const [inputValue, setInputValue]=useState('');
  const [mainMovie, setMainMovie]=useState('');
  const [mainMovieData, setMainMovieData]=useState({});
  function click(){
    setMainMovieData([]);
    setMovieData([]);
    
    setMainMovie('');
    async function fetchData() {
      const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=eb5a9790&s=${inputValue}`);
      const data = await response.json();
      console.log(data);
      setMovieData(data.Search);
    }

    fetchData();
  }
  function mainMovieClicked(imdbID){
    setMainMovie(imdbID);
    console.log(mainMovie);
  }
  


  //for main movie
  useEffect(() => {
    if(mainMovie!=''){
      async function fetchMainData() {
        const response = await fetch(`http://www.omdbapi.com/?apikey=eb5a9790&i=${mainMovie}`);
        const data = await response.json();
        console.log(data);
        setMainMovieData(data);
      }
  
      fetchMainData();
    }
    
  }, [mainMovie]);
 
  
  return (
    <div className="mx-auto text-center">
    <div className="mx-auto">
<h1 className="mx-auto text-2xl text-sky-500 text-4xl mt-3">Movie search</h1>
    </div>
      <div className="text-2xl mb-{4px}">
      <input placeholder="Search" onChange={e=>setInputValue(e.target.value)} className="border-2 border-red-400 p-1 m-1 "></input>
      <button type="submit" onClick={click} className="button border-slate-300 m-2 p-1 bg-sky-400">Fetch</button>
      </div>
      { mainMovie==''?
        <div className="flex flex-wrap justify-center gap-5 movieCard">
          { movieData && movieData.map((item) => (
          <MovieCard item={item} click={mainMovieClicked} key={item.imdbID}/>
          ))}
        </div>:
        <div className="text-center inline">
          <MainMovie item={mainMovieData}/>
        </div>
      }
      
    </div>
  );
}
