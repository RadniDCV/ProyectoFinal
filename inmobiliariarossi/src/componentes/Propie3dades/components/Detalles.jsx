import React, { useRef, useState } from "react";
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
  Tooltip,
  Button,
} from "@chakra-ui/react";

function Detalles({ detalles }) {
  //funcion para compartir inmueble
  const url = location.href;
  navigator.clipboard.writeText(url);
  const [copySuccess, setCopySuccess] = useState("");
  const textAreaRef = useRef(null);
  async function copyToClip() {
    await navigator.clipboard.writeText(location.href);
    setCopySuccess("Copied");
  }

  return (
    <Box>
      <Card>
        <CardHeader display="flex" dir="row" justifyContent={"space-between"}>
          <Heading size="md">Propiedad</Heading>
          <Tooltip label="Url copiada" closeDelay={500} openOnClick={true}>
            <Button onClick={copyToClip} bgColor="#97d7ea">
              Compartir
            </Button>
          </Tooltip>
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
