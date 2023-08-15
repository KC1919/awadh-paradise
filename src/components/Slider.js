import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "./ExampleCarouselImage";

function Slider() {
  const carouselItems = [
    {
      text: "First slide",
      imageSrc:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      text: "Second slide",
      imageSrc:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      text: "Third slide",
      imageSrc:
        "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
  ];

  return (
    <section id="#">
    <Carousel>
      {carouselItems.map((item, index) => (
        <Carousel.Item key={index}>
          <div style={{ height: "500px", overflow: "hidden" }}>
            <img
              src={item.imageSrc}
              alt="carousel-slide"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <Carousel.Caption>
            <h3>{item.text} label</h3>
            <p>
              {index === 0
                ? "Nulla vitae elit libero, a pharetra augue mollis interdum."
                : index === 1
                ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                : "Praesent commodo cursus magna, vel scelerisque nisl consectetur."}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
    </section>
  );
}

export default Slider;
