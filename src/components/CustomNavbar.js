import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {HashLink as Link } from "react-router-hash-link";

// import Service from "./Service";
// import ContactForm from "./ContactForm";
// import Gallery from "./Gallery";
// import Pricing from "./Pricing";
// import Testimonial from "./Testimonial";
// import Slider from "./Slider";


function CustomNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="light py-3">
      <Container fluid>
        <Navbar.Brand href="#home" style={{ fontSize: "35px" }}>
          Awadh Paradise
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{paddingLeft:"1rem", paddingTop:"1rem"}}>
          <Nav className="ml-auto">
            <Link
              to="#"
              className="mr-3 "
              style={{ fontSize: "18px", textDecoration:"none" ,color:"lightslategrey"}}
            >
              Home
            </Link>
            <Link
              to="#services"
              className="mr-3"
              style={{ fontSize: "18px", textDecoration:"none", color:"lightslategrey" }}
            >
              Services
            </Link>
            <Link
              to="#gallery"
              className="mr-3"
              style={{ fontSize: "18px", textDecoration:"none", color:"lightslategrey" }}
            >
              Photo Gallery
            </Link>
            <Link
              to="#pricing"
              className="mr-3"
              style={{ fontSize: "18px", textDecoration:"none", color:"lightslategrey" }}
            >
              Pricing
            </Link>
            <Link
              to="#faq"
              className="mr-3"
              style={{ fontSize: "18px", textDecoration:"none", color:"lightslategrey" }}
            >
              FAQ
            </Link>
            <Link
              to="#contact"
              className="mr-3"
              style={{ fontSize: "18px", textDecoration:"none", color:"lightslategrey" }}
            >
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
