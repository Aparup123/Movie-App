import react from "react";
export default function MainMovie({item}){
    return <div className="md:flex md:justify-center md:gap-10 mt-10 md:w-3/5 sm:h-3/5 border-2 border-slate-400 mx-auto p-4 ">
    <div className="main-movie-poster">
        <img src={item.Poster} className="m-auto h-full w-[32rem]"/>
    </div>
    <div className="main-movie-content md:text-left text-2xl text-center mt-5">
        <h3 className="text-sky-400 text-4xl font-bold">{item.Title}</h3>
        <p>year: {item.Year}</p>
        <p>Imdb Rating: {item.imdbRating}</p>
        <p>Director: {item.Director}</p>
        <p>Actors: {item.Actors}</p>
    </div>
    </div>
}