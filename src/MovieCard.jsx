import react from 'react'
export default function MovieCard({item,click}){
  
  return <div className="" key={item.imdbID}>
          <button onClick={()=>{click(item.imdbID)}}>
          <h1 className="overflow-x-clip">{item.Title}</h1>
          <img src={item.Poster} alt={item.Title} className="size-15"/>
          <a className="border-0 appearance-none">imb</a>
          </button>
        </div>;
}