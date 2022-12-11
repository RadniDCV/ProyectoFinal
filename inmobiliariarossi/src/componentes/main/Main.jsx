import React, { useState } from "react";
import Cards from "../main/Cards";
import { Box, SimpleGrid } from "@chakra-ui/react";
import Buscador from "../main/Buscador";
import { list, listfiltro } from "../../api/Inmuebles_API";
import { useEffect } from "react";

const Main = () => {
  const [inmuebles, setInmuebles] = useState([]);

  const filtroInmuebles = async () => {
    await listfiltro()
      .then((response) => {
        setInmuebles(response);
      })
      .catch((error) => {
        alert(error);
      });
  };
  const getInmuebles = async () => {
    await list()
      .then((response) => {
        setInmuebles(response);
      })
      .catch((error) => {
        alert(error);
      });
  };
  useEffect(() => {
    getInmuebles();
  }, []);

  return (
    <Box p="15px" minH="70vh">
      <Buscador onSubmit={filtroInmuebles} onReset={getInmuebles} />

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
        {inmuebles.map((data) => {
          return <Cards data={data} key={data.codeinmueble} />;
        })}
      </SimpleGrid>
    </Box>
  );
};

export default Main;
