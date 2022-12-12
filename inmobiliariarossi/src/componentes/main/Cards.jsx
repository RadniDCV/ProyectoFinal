import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Grid,
  GridItem,
  Button,
  Box,
} from "@chakra-ui/react";
import propiedad from "../../assets/propiedad4.1.png";
import { Link } from "react-router-dom";

function Cards({ data }) {
  return (
    <Card bg={"#edeaea"} boxShadow="lg" maxW="280px" min="250px" m="auto">
      <CardHeader p="10px">
        <Box
          borderRadius="6"
          bg={"#414141"}
          color={"#edeaea"}
          pos="absolute"
          top="1"
          left="1"
          px="4"
          fontSize="1.2em"
          letterSpacing="1.5px"
          fontWeight="500"
        >
          {data.tipooperacion}
        </Box>
        <Image
          src={propiedad}
          alt="Foto de fachada de propiedad"
          borderRadius={"5px"}
        />
      </CardHeader>
      <CardBody p="0">
        <Grid
          gridtemplaterows="repeat(3, 1fr)"
          gridtemplatecolumns="repeat(2,1fr)"
          templateAreas={`"tipo dormitorios"
                          "departamento barrio"
                          "operacion precio"`}
          justifyContent="space-around"
        >
          <GridItem area={"tipo"}>{data.tipoinueble}</GridItem>
          <GridItem area={"departamento"}>{data.departamento}</GridItem>
          <GridItem area={"dormitorios"}>{data.dethabitacion}</GridItem>
          <GridItem area={"operacion"}>{data.tipooperacion}</GridItem>
          <GridItem area={"barrio"}>{data.barrio}</GridItem>
          <GridItem area={"precio"}>{data.precio}</GridItem>
        </Grid>
      </CardBody>
      <CardFooter p="10px">
        <Button
          as={Link}
          to={`inmueble/${data.codeinmueble}`}
          bg={"#414141"}
          color={"#bcc1ca;"}
          size="sm"
          _hover={{ bg: "#616161", boxShadow: "lg" }}
        >
          Más información
        </Button>
      </CardFooter>
    </Card>
  );
}

export default Cards;
