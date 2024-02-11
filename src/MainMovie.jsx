import react from "react";
export default function MainMovie({item}){
    return (!item )?<p>Loading...</p>
    : <div className="md:flex md:justify-center md:gap-10 mt-10 md:w-10/12 lg:w-3/5 sm:h-3/5 border-2 border-slate-400 mx-auto p-4 ">
    <div className="main-movie-poster">
        <img src={item.Poster} className="m-auto h-full w-[32rem]"/>
    </div>
    <div className="main-movie-content md:text-left text-2xl text-center mt-5">
        <h3 className="text-sky-400 text-4xl font-bold">{item.Title}</h3>
        <p>{item.Year} {(item.Runtime!="N/A")&&<>| {item.Runtime}</>} {(item.Rated!="N/A")&&<>| {item.Rated}</>} </p>
        <p>{item.Genre}</p>
        {(item.Ratings.length!=0)?
        <div className="my-2">
        {(item.Ratings[0])?<p className="bg-yellow-300 inline-block px-2 py-0.5 rounded-lg font-bold mr-2">IMDb {(item.Ratings[0]).Value}</p>:<></>}
        {(item.Ratings[1])?<p className="bg-red-500 inline-block px-2 py-0.5 rounded-lg font-bold"><img src="../public/rotten-tomato.svg" className="size-6 inline-block" / > {(item.Ratings)[1].Value}</p>:<></>
        }
        </div>:<></>}
        <p>Director: {item.Director}</p>
        <p>Actors: {item.Actors}</p>
    </div>
    </div>
}