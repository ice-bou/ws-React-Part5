import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { ListItemIcon } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = ()=>{
    const navigate = useNavigate()
    return (
        <div>
       <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1280px-Cat_August_2010-4.jpg" fluid />
       <Button onClick={()=>navigate('/Listmovies')} variant="outline-info" >Info</Button>{' Go to my  List'}
        </div>
    )
}
export default Home