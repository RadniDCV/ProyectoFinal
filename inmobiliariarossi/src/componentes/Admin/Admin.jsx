import {
  Box,
  Center,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import React from "react";
import IngresoInmuebles from "./componentes/IngresoInmuebles";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import ConsultaInmuebles from "./componentes/ConsultaInmuebles";

function Admin() {
  return (
    <Center>
      <Card minHeight="70vh">
        <CardHeader>
          <Heading size="lg">Página del Administrador</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box my="10px">
              <Heading size="sm" textTransform="uppercase">
                Propiedades
              </Heading>
              <Text pt="2" fontSize="md" mb="5px">
                Agruege una nueva propiedad
              </Text>
              <IngresoInmuebles />
              <Text pt="2" fontSize="md" mb="5px">
                Consulte todas las propiedades
              </Text>
              <ConsultaInmuebles />
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
    </Center>
  );
}

export default Admin;
