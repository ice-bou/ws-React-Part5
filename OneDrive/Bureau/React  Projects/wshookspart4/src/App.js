import { useState } from 'react';
import './App.css';
import NavMovies from './Components/NavMovies';
import ListMovies from './Components/ListMovies';
import AddMovies from './Components/AddMovies';


function App() {
  const [movies,setMovies] = useState(

    [
      {title : 'Inception',type : 'Action/Spy', description :'Cobb steals information from his targets by entering their dreams. He is wanted for his alleged role in his wifes murder and his only chance at redemption is to perform a nearly impossible task.', yearDate:"2010", videoURL : 'https://www.youtube.com/watch?v=HcoZbHBDHQA', posterURL:'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg',rating : 5, id : Math.random()},
      {title : 'Interstellar',type : 'Sci-Fi', description :' When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.',yearDate:"2014",videoURL : 'https://www.youtube.com/watch?v=USns-G2mxoc', posterURL:'https://m.media-amazon.com/images/I/814E2+pjjzL._AC_UF1000,1000_QL80_.jpg',rating : 3, id : Math.random()},
      {title : 'Tenet',type : 'Action/Spy', description :'When a few objects that can be manipulated and used as weapons in the future fall into the wrong hands, a CIA operative, known as the Protagonist, must save the world.',yearDate:"2021", videoURL : 'https://www.youtube.com/watch?v=HcoZbHBDHQA' ,posterURL:'https://m.media-amazon.com/images/I/71D8LFlOiDL._AC_UF894,1000_QL80_.jpg',rating : 4, id : Math.random()},
      {title : 'Dunkerk',type : 'Action/History', description :'During World War II, soldiers from the British Empire, Belgium and France try to evacuate from the town of Dunkirk during a arduous battle with German forces.',yearDate:"2017",videoURL : 'https://www.youtube.com/watch?v=HcoZbHBDHQA', posterURL:'https://alternativemovieposters.com/wp-content/uploads/2017/12/cesar_dunkirk.jpg',rating : 2, id : Math.random()},
  
    ]
  )


  return (
<div>
<NavMovies/>
<br></br>
<br></br>
<AddMovies movies ={movies} setMovies={setMovies}/>
<br></br>
<br></br>
<ListMovies movies={movies}/>
</div> 
  );
}

export default App;
