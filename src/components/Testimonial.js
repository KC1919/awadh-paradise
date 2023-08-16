import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

import "../css/Testimonial.css"; // Create this CSS file for styling if needed

const testimonials = [
  {
    name: "John Doe",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique, dolor non consectetur volutpat, nisi.",
  },
  {
    name: "Jane Smith",
    review:
      "Sed vitae nunc quis turpis congue lacinia. Aliquam id nisi ut arcu commodo ultrices ut sed felis.",
  },
  // Add more testimonials as needed
];

const Testimonial = () => {
  return (
    <div className="testimonial-section">
      <Container>
        <h2 className="section-heading">Testimonials</h2>
        <Row>
          <Col xs={12}>
            <Carousel interval={3000}>
              {testimonials.map((testimonial, index) => (
                <Carousel.Item key={index}>
                  <div className="testimonial-box">
                    <FontAwesomeIcon
                      icon={faQuoteLeft}
                      className="quote-icon"
                    />
                    <p className="testimonial-text">{testimonial.review}</p>
                    <p className="testimonial-name">{testimonial.name}</p>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonial;
