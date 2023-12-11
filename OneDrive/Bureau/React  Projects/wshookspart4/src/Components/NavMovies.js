import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const NavMovies=()=>{

    return (  
        <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Netflixi.tn</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mahmoud Instructor</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default NavMovies