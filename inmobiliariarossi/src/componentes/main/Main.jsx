import React from "react";
import Cards from "../main/Cards";
import { SimpleGrid } from "@chakra-ui/react";
import Buscador from "../main/Buscador";

const Main = () => {
  return (
    <div style={{ padding: "15px" }}>
      <Buscador />

      <SimpleGrid
        columns={[1, null, 2, 3, 4]}
        justifyContent="space-around"
        spacing="20px"
        mx="50"
        my="15"
        w={"80%"}
        m="auto"
        alignItems="center"
      >
        <Cards alquiler={"Alquiler"} />
        <Cards alquiler={"Alquiler"} />
        <Cards alquiler={"Alquiler"} />
        <Cards alquiler={"Alquiler"} />
        <Cards alquiler={"Alquiler"} />
        <Cards alquiler={"Venta"} />
        <Cards alquiler={"Venta"} />
        <Cards alquiler={"Venta"} />
        <Cards alquiler={"Venta"} />
        <Cards alquiler={"Venta"} />
      </SimpleGrid>
    </div>
  );
};

export default Main;
