import react from 'react'
export default function MovieCard({item,click}){
  
  return <div className="h-56 w-46  lg:h-80 lg:w-56 hover:cursor-pointer" key={item.imdbID} onClick={()=>{click(item.imdbID)}}>
          
          {/* <h1 className="">{item.Title}</h1> */}
          <img src={item.Poster} alt={item.Title} className="h-full w-full"/>
          {/* <a className="border-0 appearance-none">imb</a> */}
         
        </div>;
}