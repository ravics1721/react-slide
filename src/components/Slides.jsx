import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Slides = ({ img, title, subtitle, ...rest }) => {
  return (
    <>
      <Carousel.Item {...rest}>
        <img src={img} alt="slide img" className="d-block w-100" />
        <Carousel.Caption>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </>
  );
};

export default Slides;
