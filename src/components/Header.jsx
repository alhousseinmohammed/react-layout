import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import RegButton from './RegButton';
import LogButton from './logButton';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import '../Navbar.css';



const Header = ()=>{
  return (            <Navbar id="navigation" className="main-header d-flex align-items-center myNav">
        <Container className="d-flex align-items-center justify-content-between">
      <Navbar.Brand href="#home" className="d-flex align-items-center">
                <img src="src\assets\img\logo\logo.png" alt="" />
        
      </Navbar.Brand>
      
          <Nav className="d-flex align-items-center gap-4">
            <Nav.Link href="#home"  className=" d-flex align-items-center">Home</Nav.Link>
            <Nav.Link href="#Courses" className=" d-flex align-items-center">Courses</Nav.Link>
            <Nav.Link href="#About" className=" d-flex align-items-center">About</Nav.Link>
            <Nav.Link href="#Blog" className=" d-flex align-items-center">Blog</Nav.Link>
            <Nav.Link href="#Contact" className=" d-flex align-items-center">Contact</Nav.Link>
        <RegButton />
        <LogButton/>

          </Nav>
        </Container>
      </Navbar>
  )
}

export default Header;