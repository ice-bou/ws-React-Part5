import { Rating } from "@mui/material"
import { Button } from "react-bootstrap"

const FilterMovies=({setSearch,setRate,search,rate})=>{

    const handleReset = () => {

        setSearch('')
        setRate(0)
    }

    return(

    <div className="filter">  

        <input value={search} placeholder="Search Title" type="text" onChange = {(e)=>setSearch(e.target.value)}></input>

        <p>Rating : </p>
    
        <Rating value={rate} onChange={(e)=>setRate(e.target.value)}/>
        
        <Button onClick={handleReset}>Reset</Button>
        
    </div>
    )
    
    }
    
    export default FilterMovies