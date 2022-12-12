import React from "react";
import { useState } from "react";
import { consultaInmuebles } from "../../../api/Inmuebles_API";
import {
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  TableCaption,
  Thead,
  Th,
  Tfoot,
  Center,
} from "@chakra-ui/react";
import Edit from "./Editar";
import Delete from "./Delete";

function ConsultaInmuebles() {
  const [inmuebles, setInmuebles] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const getInmuebles = async () => {
    await consultaInmuebles()
      .then((response) => {
        setInmuebles(response);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <>
      <Button onClick={onOpen} bgColor="#97d7ea">
        Consultar Inmuebles
      </Button>
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        size="5xl"
      >
        <ModalOverlay />
        <ModalContent p="15px">
          <Center>
            <Button onClick={getInmuebles} bgColor="#97d7ea" w="80%">
              Mostrar
            </Button>
          </Center>
          <TableContainer>
            <Table variant="simple" size="lg">
              <Thead>
                <Tr>
                  <Th>ID</Th>
                  <Th>Accion</Th>
                  <Th>Tipo</Th>
                  <Th>Operacion</Th>
                  <Th>Metraje construido</Th>
                  <Th>Metraje terreno</Th>
                  <Th>Habitaciones</Th>
                  <Th>Baños</Th>
                  <Th>Precio</Th>
                  <Th>Departamento</Th>
                  <Th>Ciudad</Th>
                  <Th>Barrio</Th>
                  <Th>Calle</Th>
                </Tr>
              </Thead>
              <Tbody>
                {inmuebles.map((propiedad) => (
                  <Tr>
                    <Td key={propiedad.ubicacion}>{propiedad.ubicacion}</Td>
                    <Td>
                      <Edit propiedad={propiedad} />
                      <Delete propiedad={propiedad} />
                    </Td>
                    <Td>{propiedad.tipoinueble}</Td>
                    <Td>{propiedad.tipooperacion}</Td>
                    <Td>{propiedad.detmet}</Td>
                    <Td>{propiedad.detmetterreno}</Td>
                    <Td>{propiedad.dethabitacion}</Td>
                    <Td>{propiedad.detbanios}</Td>
                    <Td>{propiedad.precio}</Td>
                    <Td>{propiedad.departamento}</Td>
                    <Td>{propiedad.ciudad}</Td>
                    <Td>{propiedad.barrio}</Td>
                    <Td>{propiedad.calle}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ConsultaInmuebles;
