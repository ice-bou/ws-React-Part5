import CardMovies from "./CardMovies"


const ListMovies=({movies})=>{
return(
     <div className="cardsflex">
    {
        movies.map((el,i,t)=> <CardMovies el={el}/>)
    }
    </div>
    )
    
    }
    
    export default ListMovies