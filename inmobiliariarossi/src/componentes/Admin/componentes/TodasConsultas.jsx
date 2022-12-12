import React from "react";
import { useState } from "react";
import {
  ConsultaConsulta,
  consultaInmuebles,
} from "../../../api/Inmuebles_API";
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

function TodasConsultas() {
  const [consultas, setConsultas] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const getConsultas = async () => {
    await ConsultaConsulta()
      .then((response) => {
        setConsultas(response);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <>
      <Button onClick={onOpen} bgColor="#97d7ea">
        Todas las Consultas
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
            <Button onClick={getConsultas} bgColor="#97d7ea" w="80%">
              Mostrar
            </Button>
          </Center>
          <TableContainer>
            <Table variant="simple" size="lg">
              <Thead>
                <Tr>
                  <Th>ID</Th>
                  <Th>Email</Th>
                  <Th>Nombre</Th>
                  <Th>Consulta</Th>
                  <Th>Inmueble </Th>
                </Tr>
              </Thead>
              <Tbody>
                {consultas.map((propiedad) => (
                  <Tr>
                    <Td>{propiedad.id_consulta}</Td>
                    <Td>{propiedad.email}</Td>
                    <Td>{propiedad.nombre}</Td>
                    <Td>{propiedad.consulta}</Td>
                    <Td>{propiedad.inmueble}</Td>
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

export default TodasConsultas;
