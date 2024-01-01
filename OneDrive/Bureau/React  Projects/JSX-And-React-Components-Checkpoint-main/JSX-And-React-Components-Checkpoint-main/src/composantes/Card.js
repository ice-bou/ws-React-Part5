import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Name from '../composantes/Name';  
import Pic from './Pic';
import Description from './Description'; 
import Price from './Price';
function CardR() {
  return (
    <Card style={{ width: '18rem' }}>
     <Pic/>
      <Card.Body> 
        <Card.Title><Name/></Card.Title>
        <Card.Text>
           <Description/> 
        </Card.Text>
       <h3><Price/></h3>  
        <Button variant="primary">Acheter</Button>
        
      </Card.Body>
    </Card>
  );
}

export default CardR; 