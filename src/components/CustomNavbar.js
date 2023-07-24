import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function CustomNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="light py-3">
      <Container fluid>
        <Navbar.Brand href="#home" style={{ fontSize: "30px" }}>
          Awadh Paradise
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link
              href="#home"
              className="mr-3 text-primary"
              style={{ fontSize: "20px" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#link"
              className="mr-3 text-primary"
              style={{ fontSize: "20px" }}
            >
              Services
            </Nav.Link>
            <Nav.Link
              href="#link"
              className="mr-3 text-primary"
              style={{ fontSize: "20px" }}
            >
              Photo Gallery
            </Nav.Link>
            <Nav.Link
              href="#link"
              className="mr-3 text-primary"
              style={{ fontSize: "20px" }}
            >
              Pricing
            </Nav.Link>
            <Nav.Link
              href="#link"
              className="mr-3 text-primary"
              style={{ fontSize: "20px" }}
            >
              FAQ
            </Nav.Link>
            <Nav.Link
              href="#link"
              className="mr-3 text-primary"
              style={{ fontSize: "20px" }}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
