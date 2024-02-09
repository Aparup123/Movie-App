import react from 'react'
export default function MovieCard({item,click}){
  
  return <button className="border-none" onClick={()=>{click(item.imdbID)}}><div className="inline mx-auto p-2 m-3 border-2 border-gray-300" key={item.imdbID}>
          <h1 className="overflow-x-clip">{item.Title}</h1>
          <img src={item.Poster} alt={item.Title} className="mx-auto border-1"/>
          <a className="border-0">imb</a>
        </div></button>;
}