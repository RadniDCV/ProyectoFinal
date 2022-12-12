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
import React, { useEffect } from "react";
import IngresoInmuebles from "./componentes/IngresoInmuebles";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import ConsultaInmuebles from "./componentes/ConsultaInmuebles";
import NumeroPropiedades from "./componentes/NumeroPropiedades";
import NumeroConsultas from "./componentes/NumeroConsultas";
import TodasConsultas from "./componentes/TodasConsultas";
import { useNavigate } from "react-router-dom";
import Head from "../head/Head";
import Footer from "../footer/Footer";
import ConsultaUsuarios from "./componentes/Consultausuarios";
import { isAuth } from "../../api/Rule_auth";

function Admin() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth()) {
      navigate("/");
      alert("Token invalido o inexistente");
    }
  }, []);

  return (
    <>
      <Head />
      <Center my="50px" h="auto">
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
                <Text pt="2" fontSize="md" mb="5px">
                  Numero de propiedades
                </Text>
                <NumeroPropiedades />
              </Box>
              <Box my="10px">
                <Heading size="sm" textTransform="uppercase">
                  Consultas
                </Heading>
                <Text pt="2" fontSize="md" mb="5px">
                  Numero de Consultas
                </Text>
                <NumeroConsultas />
                <Text pt="2" fontSize="md" mb="5px">
                  Consulte todas las consultas
                </Text>
                <TodasConsultas />
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Usuarios
                </Heading>
                <Text pt="2" fontSize="sm">
                  Consulte los usuarios
                </Text>
                <ConsultaUsuarios />
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </Center>
      <Footer />
    </>
  );
}

export default Admin;
