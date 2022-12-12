import React, { useState } from "react";
import Cards from "../main/Cards";
import { Box, SimpleGrid, Spinner } from "@chakra-ui/react";
import Buscador from "../main/Buscador";
import { list, listfiltro } from "../../api/Inmuebles_API";
import { useEffect } from "react";
import Hero from "./Hero";
import Head from "../head/Head";
import Footer from "../footer/Footer";

const Main = () => {
  const [inmuebles, setInmuebles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const filtroInmuebles = async (datos) => {
    await listfiltro(datos)
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
    setIsLoading(true);
    getInmuebles();
    setIsLoading(false);
  }, []);

  return (
    <Box>
      <Head />
      <Hero />
      <Box p="15px" height="auto" mb="80px">
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
          {isLoading ? (
            <Spinner color="red.400" size="xl" thickness="5px" m="auto" />
          ) : (
            inmuebles.map((data) => {
              return <Cards data={data} key={data.codeinmueble} />;
            })
          )}
        </SimpleGrid>
      </Box>
      <Footer />
    </Box>
  );
};

export default Main;
