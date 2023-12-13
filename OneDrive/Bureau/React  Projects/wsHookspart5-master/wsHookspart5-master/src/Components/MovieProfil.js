import { useNavigate, useParams } from "react-router-dom"

const MovieProfil=({movies})=>{

    const {id} = useParams()
    const found = movies.find((el,i,t)=>el.id == id )
    const navigate = useNavigate()

    return (

<div>
 <h1>{found.title}</h1>
 <button onClick={()=>navigate('/')}>Home</button>

</div>
    )
}

export default MovieProfil