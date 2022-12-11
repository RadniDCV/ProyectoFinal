import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Center,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Inmuebleid } from "../../api/Inmuebles_API";
import Carrusel from "./components/Carrusel";
import Consulta from "./components/Consulta";

function Propiedad() {
  const [inmuebles, setInmuebles] = useState({});
  const getInmueble = async () => {
    await Inmuebleid()
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
        <Carrusel />
        <Box></Box>
      </Center>
      <Center>
        <VStack>
          <Box>
            <Card>
              <CardHeader>
                <Heading size="md">Propiedad</Heading>
              </CardHeader>

              <CardBody>
                <Stack divider={<StackDivider />} spacing="4">
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Ubicacion
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      View a summary of all your clients over the last month.
                    </Text>
                  </Box>
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Overview
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      Check out the overview of your clients.
                    </Text>
                  </Box>
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Analysis
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      See a detailed analysis of all your business clients.
                    </Text>
                  </Box>
                </Stack>
              </CardBody>
            </Card>
          </Box>
          <Consulta />
        </VStack>
      </Center>
    </SimpleGrid>
  );
}

export default Propiedad;
