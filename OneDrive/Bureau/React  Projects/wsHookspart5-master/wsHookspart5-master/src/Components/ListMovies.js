import AddMovies from "./AddMovies"
import CardMovies from "./CardMovies"
import FilterMovies from "./FilterMovies"


const ListMovies=({movies,search,rate,setMovies,setSearch,setRate})=>{ 
    var x = movies.filter((el,i,t)=>el.title.toUpperCase().includes(search.toUpperCase()) && el.rating >= rate)
return(
     <div className="cardsflex" >
<FilterMovies setSearch={setSearch} setRate={setRate} search={search} rate={rate}/>
<AddMovies movies ={movies} setMovies={setMovies}/>
  <div className="cardsflex">
    {
        x.length === 0 ? <h1>Movie Not Found</h1> : x.map((el,i,t)=> <CardMovies el={el}/>)
    }
    </div>
    </div>
    )
    
    }
    
    export default ListMovies