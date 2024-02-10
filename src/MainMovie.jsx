import react from "react";
export default function MainMovie({item}){
    return <div className="ml-7 flex justify-center gap-10 mt-10">
    <div className="main-movie-poster">
        <img src={item.Poster} className="m-auto"/>
    </div>
    <div className="main-movie-content text-left text-2xl">
        <h3 className="text-sky-400">{item.Title}</h3>
        <p>year: {item.Year}</p>
        <p>Imdb Rating: {item.imdbRating}</p>
        <p>Director: {item.Director}</p>
        <p>Actors: {item.Actors}</p>
    </div>
    </div>
}