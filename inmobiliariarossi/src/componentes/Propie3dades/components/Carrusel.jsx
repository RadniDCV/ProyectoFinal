import { Center, Image } from "@chakra-ui/react";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import propiedad from "../../../assets/propiedad4.1.png";

function Carrusel() {
  return (
    <Center>
      <Carousel fade>
        <Carousel.Item>
          <Image src={propiedad} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <Image src={propiedad} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <Image src={propiedad} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <Image src={propiedad} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <Image src={propiedad} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <Image src={propiedad} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </Center>
  );
}

export default Carrusel;
