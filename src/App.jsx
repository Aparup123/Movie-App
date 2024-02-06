import react from "react";
import { useState } from "react";

export default function App(){
    const [movieData,setMovieData]=useState('');
    const [movieName, setMovieName]=useState('');
    console.log(movieData);
    
    setMovieData(fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=eb5a9790&s=${movieName}`).then((value)=>value.json()).then((data)=>data).catch((e)=>e));
        
    
    
    return <div>
        Hello World
        <form>
            <input placeholder="Search" onChange={(e)=>{setMovieName(e.target.value); console.log(e.target.value)}}></input>
            <button>Search</button>
        </form>
        {/* <div>
            <img src={} alt="Movie Image"></img>
            <h3>{}</h3>;
        </div> */}
    </div>
}