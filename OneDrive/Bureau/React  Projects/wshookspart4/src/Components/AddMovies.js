import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Rating from '@mui/material/Rating';

const AddMovies=(movies,setMovies)=>{
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
    <Form.Control
    onChange={(e)=> setDescription(e.target.value)}
    as="textarea"
    placeholder="Enter Description & Synopsis"
    style={{ height: '160px' }}/>
    <br />
    <Form.Control size="sm" type="text" placeholder="Date of Release" />
    <br />
    <Form.Control size="sm" type="text" placeholder="Image URL" />
    <br />
    <Form.Control size="sm" type="text" placeholder="Video Trailer URL" />
    <br />
    <Form.Control size="sm" type="text" placeholder="Type of Movie" />
    <br />
    <header>Rating</header>
    <Rating/>
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