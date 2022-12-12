import { Center, Image } from "@chakra-ui/react";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import propiedad from "../../../assets/propiedad4.1.png";
import propiedad1 from "../../../assets/propiedad4.2.png";
import propiedad2 from "../../../assets/propiedad4.3.png";
import propiedad3 from "../../../assets/propiedad4.4.png";

function Carrusel() {
  return (
    <Center>
      <Carousel fade>
        <Carousel.Item>
          <Image src={propiedad} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <Image src={propiedad1} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <Image src={propiedad2} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <Image src={propiedad3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </Center>
  );
}

export default Carrusel;
