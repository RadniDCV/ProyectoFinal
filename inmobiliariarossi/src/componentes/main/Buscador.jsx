import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { Locacion, Select } from "./components/Radio";
import Slider from "./components/Slider";

function Buscador() {
  return (
    <Box
      maxW={"80%"}
      m="auto"
      mb={"50px"}
      bg={"#edeaea"}
      boxShadow="lg"
      p="10px"
    >
      <Grid
        gridTemplateColumns={"30% 70%"}
        gridTemplateRows={"1fr 1fr 1fr"}
        templateAreas={`"txt1 select"
        "txt2 departamento"
        "txt3 slider"`}
      >
        <GridItem area={"txt1"}>Elija el tipo de operación que desea</GridItem>
        <GridItem area={"txt2"}>Elija una ubicación</GridItem>
        <GridItem area={"txt3"}>Elija un rango de precios</GridItem>
        <GridItem area={"departamento"}>
          <Locacion />
        </GridItem>
        <GridItem area={"select"}>
          <Select />
        </GridItem>
        <GridItem area={"slider"}>
          <Slider />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Buscador;
