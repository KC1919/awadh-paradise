import React, { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Gallery.css";

const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const sampleImages = [
    "https://i0.wp.com/stanzaliving.wpcomstaging.com/wp-content/uploads/2022/04/d601b-hostels-vs-pgs-min.jpg?fit=4000%2C3000&ssl=1",
    "https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto,w_600/e_improve/e_sharpen:10/e_saturation:10/v1604163456/Website/CMS-Uploads/v9crnd0lozr1tnp7birf.jpg",
    "https://www.executivepg.in/wp-content/uploads/2019/05/whatsapp-image-2019-05-12-at-8.52.58-pm-1024x938.jpeg",
    "https://content.jdmagicbox.com/comp/lucknow/z5/0522px522.x522.210217130752.w6z5/catalogue/shaanvi-girls-pg-gomti-nagar-lucknow-hostels-qwd3sy14nh.jpg?clr=",
    "https://content.jdmagicbox.com/comp/delhi/r6/011pxx11.xx11.100427123227.a5r6/catalogue/paral-girls-pg-inderpuri-delhi-paying-guest-accommodations-for-women-2p305cd8tw.jpg?clr=",
    "https://kripalhomes.com/wp-content/uploads/2023/02/dca1da33-dc49-482b-888e-551da8d56d19-e1625042025521-768x512.jpg",
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  return (
    <div className="gallery-section">
      <Container>
        <h2 className="section-heading">Photo Gallery</h2>
        <Row>
          {sampleImages.map((image, index) => (
            <Col key={index} md={4} sm={6} xs={12} className="gallery-item">
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="img-fluid gallery-image"
                onClick={() => handleImageClick(image)}
              />
            </Col>
          ))}
        </Row>
        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          centered
          size="xl"
        >
          <Modal.Body>
            <img src={selectedImage} alt="Selected" className="modal-image" />
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
};

export default Gallery;
