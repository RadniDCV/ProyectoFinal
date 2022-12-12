import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Center,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Inmuebleid } from "../../api/Inmuebles_API";
import Carrusel from "./components/Carrusel";
import Consulta from "./components/Consulta";
import Detalles from "./components/Detalles";

function Propiedad() {
  const [inmuebles, setInmuebles] = useState([]);
  const id = useParams();

  const getInmueble = async () => {
    await Inmuebleid(id.id)
      .then((response) => {
        setInmuebles(response);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    getInmueble();
  }, []);

  return (
    <SimpleGrid columns={[1, null, 2]} p="15px" gap="10px">
      <Center>
        <VStack>
          <Carrusel />
          <Consulta id={id} />
        </VStack>
      </Center>
      {inmuebles.length && <Detalles detalles={inmuebles[0]} />}
    </SimpleGrid>
  );
}

export default Propiedad;
