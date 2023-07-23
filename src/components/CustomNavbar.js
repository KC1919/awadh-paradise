import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function CustomNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="light py-3">
      <Container fluid>
        <Navbar.Brand href="#home">Awadh Paradise</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home" className="mr-3 text-primary">
              Home
            </Nav.Link>{" "}
            <Nav.Link href="#link" className="mr-3 text-primary">
              Services
            </Nav.Link>{" "}
            <Nav.Link href="#link" className="mr-3 text-primary">
              Photo Gallery
            </Nav.Link>{" "}
            <Nav.Link href="#link" className="mr-3 text-primary">
              Pricing
            </Nav.Link>{" "}
            <Nav.Link href="#link" className="mr-3 text-primary">
              FAQ
            </Nav.Link>{" "}
            <Nav.Link href="#link" className="mr-3 text-primary">
              Contact
            </Nav.Link>{" "}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
