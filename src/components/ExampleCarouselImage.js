// ExampleCarouselImage.js

import React from "react";

function ExampleCarouselImage({ text, imageSrc }) {
  return (
    <div>
      <img src={imageSrc} alt="carousel-slide" />
      <p>{text}</p>
    </div>
  );
}

export default ExampleCarouselImage;
