import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const CardMovies=({el})=>{
  const [showMore, setShowMore] = useState(false);
    return(
        
        <Card style={{ width: '20rem'}}>
        <Card.Img variant="top" src={el.posterURL} />
        <Card.Body>
          <Card.Title as={Link} to={`/movie/${el.id}`}>{el.title}</Card.Title>
          <Card.Text>
            <h6>
  {showMore ? el.description : `${el.description.substring(0, 50)}`}
  <button onClick={()=>setShowMore(!showMore)} className={showMore ? "blue" : "red"}>{showMore ? "Show Less" : "Show More"}</button>
</h6>
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{el.type}</ListGroup.Item>
          <ListGroup.Item>{el.yearDate}</ListGroup.Item>
          <Rating name="read-only" value={el.rating} readOnly />
        </ListGroup>
        <Card.Body>
          <Card.Link href={el.videoURL}>Trailer</Card.Link>
        </Card.Body>
      </Card>
    );
    
    }
    
    export default CardMovies