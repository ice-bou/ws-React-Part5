import Produit from "../Produit"

const Pic=()=> {
    return (
       <>
       <img style= {{height:"200px", width:"250px"}} src={Produit.URL} alt="not found"/> 
       </>
    )
}

export default Pic  