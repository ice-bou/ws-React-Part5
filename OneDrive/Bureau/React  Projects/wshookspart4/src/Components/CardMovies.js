import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Rating from '@mui/material/Rating';

const CardMovies=({el})=>{

    return(
    
        <Card style={{ width: '20rem'}}>
        <Card.Img variant="top" src={el.posterURL} />
        <Card.Body>
          <Card.Title>{el.title}</Card.Title>
          <Card.Text>
            {el.description}
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