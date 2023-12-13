import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Rating from '@mui/material/Rating';

const AddMovies=({movies,setMovies})=>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [title,setTitle] = useState ('');
    const [description,setDescription] = useState ('');
    const [type,setType] = useState ('');
    const [yearDate,setYearDate] = useState ('');
    const [videoURL,setVideoURL] = useState ('');
    const [posterURL,setPosterURL] = useState ('');
    const [rating,setRating] = useState ('0');

    const submitmovies=()=> setMovies([...movies,{title,type,description,rating,posterURL,videoURL,yearDate,id : Math.random()}])

    return(
<div>
    <Button variant="primary" onClick={handleShow}>
        Add your favorite Movie
    </Button>
    <Modal show={show} onHide={handleClose}>

    <Modal.Header closeButton>
    <Modal.Title>Add your Movie Information</Modal.Title>
    </Modal.Header>

    <br/>
    <Modal.Body>       
    <Form.Control onChange={(e)=> setTitle(e.target.value)} size="lg" type="text" placeholder="Enter Title" />
    <br />
    <Form.Control placeholder="Enter Description & Synopsis"
    style={{ height: '160px' }} onChange={(e)=> setDescription(e.target.value)}/>
    <br />
    <Form.Control size="sm" type="date" placeholder="Date of Release" onChange={(e)=> setYearDate(e.target.value)}/>
    <br />
    <Form.Control size="sm" type="text" placeholder="Image URL" onChange={(e)=> setPosterURL(e.target.value)}/>
    <br />
    <Form.Control size="sm" type="text" placeholder="Video Trailer URL" onChange={(e)=> setVideoURL(e.target.value)}/>
    <br />
    <Form.Control size="sm" type="text" placeholder="Type of Movie" onChange={(e)=> setType(e.target.value)}/>
    <br />
    <header>Rating</header>
    <Rating onChange={(e)=> setRating(e.target.value)}/>
    </Modal.Body>
    <br/>    
<Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
            Close
    </Button>

    <Button variant="primary" onClick={()=>{submitmovies();handleClose()}}>
            Submit
    </Button>

</Modal.Footer>
</Modal>
</div>
);    
}
    
export default AddMovies