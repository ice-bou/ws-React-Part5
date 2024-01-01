import Produit from "./Produit";
import Name from "./composantes/Name";
import Description from "./composantes/Description";
import Price from "./composantes/Price"; 
import Pic from "./composantes/Pic"; 
import CardR from "./composantes/Card"; 
import "./App.css"
  
function App() {
  var name = "Motocycle Shop" 
  return (
    <div> 
 <h1 style={{color:"palevioletred",textAlign:"center"}}>Checkpoint</h1>
<div className="carte"> 
<CardR/> 
</div> 

<h2 style={{color:"black", textAlign:"center", fontsize:"large", fontFamily:"fantasy"}}> {name =="" ? "Hello guest!!":`Hello ${name}`}  </h2> 
    </div>
  );
} 

export default App;
