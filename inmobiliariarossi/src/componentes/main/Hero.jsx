import Carousel from "react-bootstrap/Carousel";
import punta from "../../assets/punta.jpg";
import canelones from "../../assets/canelones.jpg";
import monte from "../../assets/mtvskl.jpg";
import { Box, Center, Image, Text } from "@chakra-ui/react";

function Hero() {
  return (
    <Center>
      <Carousel fade>
        <Carousel.Item>
          <Image src={monte} alt="First slide" />
          <Carousel.Caption>
            <Text fontSize="2em">Montevideo</Text>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={punta} alt="Second slide" />

          <Carousel.Caption>
            <Text fontSize="2em">Maldonado</Text>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={canelones} alt="Third slide" />

          <Carousel.Caption>
            <Text fontSize="2em">Canelones</Text>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Center>
  );
}

export default Hero;
