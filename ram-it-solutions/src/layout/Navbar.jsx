import { Navbar, Nav,Image } from 'react-bootstrap';

const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow px-4">
      
        <Navbar.Brand href="/">
        <Image src='/logo.png' height={'70px'} />
        Ram IT Solutions</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
  );
};

export default MyNavbar;
