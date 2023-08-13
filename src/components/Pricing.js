import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "../css/Pricing.css"; // Create this CSS file for styling if needed

const pricingDetails = [
  {
    type: "Single Room",
    price: "$100 per night",
    features: ["Private bathroom", "Free Wi-Fi", "Breakfast included"],
  },
  {
    type: "Double Room",
    price: "$150 per night",
    features: ["Two beds", "Private balcony", "Room service"],
  },
  {
    type: "Suite",
    price: "$250 per night",
    features: ["Spacious living area", "Jacuzzi", "Concierge service"],
  },
];

const Pricing = () => {
  return (
    <div className="pricing-section">
      <Container>
        <h2 className="section-heading">Pricing</h2>
        <Row>
          {pricingDetails.map((pricing, index) => (
            <Col key={index} md={4} sm={6} xs={12} className="pricing-column">
              <div className="pricing-box">
                <h3 className="room-type">{pricing.type}</h3>
                <p className="room-price">{pricing.price}</p>
                <ul className="room-features">
                  {pricing.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Pricing;
