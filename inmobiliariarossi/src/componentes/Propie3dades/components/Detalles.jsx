import React from "react";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";

function Detalles({ detalles }) {
  console.log(detalles);
  return (
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
              <Flex dir="row" justifyContent="space-between">
                <Text pt="2" fontSize="sm">
                  Departamento
                </Text>
                <Text pt="2" fontSize="sm">
                  {detalles.departamento}
                </Text>
              </Flex>
              <Flex justifyContent="space-between">
                <Text pt="2" fontSize="sm">
                  Ciudad
                </Text>
                <Text pt="2" fontSize="sm">
                  {detalles.ciudad}
                </Text>
              </Flex>
              <Flex justifyContent="space-between">
                <Text pt="2" fontSize="sm">
                  Barrio
                </Text>
                <Text pt="2" fontSize="sm">
                  {detalles.barrio}
                </Text>
              </Flex>
              <Flex justifyContent="space-between">
                <Text pt="2" fontSize="sm">
                  Calle
                </Text>
                <Text pt="2" fontSize="sm">
                  {detalles.calle}
                </Text>
              </Flex>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Inmueble
              </Heading>
              <Flex justifyContent="space-between">
                <Text pt="2" fontSize="sm">
                  Tipo
                </Text>
                <Text pt="2" fontSize="sm">
                  {detalles.tipoinueble}
                </Text>
              </Flex>
              <Flex justifyContent="space-between">
                <Text pt="2" fontSize="sm">
                  Metraje constuido
                </Text>
                <Text pt="2" fontSize="sm">
                  {detalles.detmet}
                </Text>
              </Flex>
              <Flex justifyContent="space-between">
                <Text pt="2" fontSize="sm">
                  Metraje Terreno
                </Text>
                <Text pt="2" fontSize="sm">
                  {detalles.detmetterreno}
                </Text>
              </Flex>
              <Flex justifyContent="space-between">
                <Text pt="2" fontSize="sm">
                  Habitaciones
                </Text>
                <Text pt="2" fontSize="sm">
                  {detalles.dethabitacion}
                </Text>
              </Flex>
              <Flex justifyContent="space-between">
                <Text pt="2" fontSize="sm">
                  Baños
                </Text>
                <Text pt="2" fontSize="sm">
                  {detalles.detbanios}
                </Text>
              </Flex>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Operacion
              </Heading>
              <Flex justifyContent="space-between">
                <Text pt="2" fontSize="sm">
                  Tipo
                </Text>
                <Text pt="2" fontSize="sm">
                  {detalles.tipooperacion}
                </Text>
              </Flex>
              <Flex justifyContent="space-between">
                <Text pt="2" fontSize="sm">
                  Precio
                </Text>
                <Text pt="2" fontSize="sm">
                  {detalles.precio}
                </Text>
              </Flex>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Detalles
              </Heading>

              <Text pt="2" fontSize="sm">
                {detalles.detalles}
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
}

export default Detalles;
