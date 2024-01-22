import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MenuNavbar(){
    return(
        <Navbar bg="light" expand="lg" className="container-fluid sticky-top bg-opacity p-2" >
            <Container style={{paddingLeft:"0"}}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className=" me-auto fs-5 fw-bold justify-content-end  w-100" style={{marginLeft:"", width:""}}>
                        <Nav.Link href="/" style={{marginRight:"20px"}}>Головна сторінка</Nav.Link>
                        <Nav.Link href="/about" style={{marginRight:"20px"}}>Про нас</Nav.Link>
                        <Nav.Link href="/programs" style={{marginRight:"20px"}}>Програми</Nav.Link>
                        <Nav.Link href="/event" style={{marginRight:"20px"}}>Івенти</Nav.Link>
                        <Nav.Link href="/art-english" style={{marginRight:"20px"}}>ART & ENGLISH</Nav.Link>
                        <Nav.Link href="/contact" style={{marginRight:"0"}}>Контакти</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MenuNavbar