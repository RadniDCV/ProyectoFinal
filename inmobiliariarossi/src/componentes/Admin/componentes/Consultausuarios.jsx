import React from "react";
import { useState } from "react";
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
import { consultarUsuario } from "../../../api/Rule_user";

function ConsultaUsuarios() {
  const [consultas, setConsultas] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const getConsultas = async () => {
    await consultarUsuario()
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
        Todos los usuarios
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
                  <Th>Nombres</Th>
                  <Th>Apellidos</Th>
                  <Th>Direccion</Th>
                  <Th>Telefono </Th>
                </Tr>
              </Thead>
              <Tbody>
                {consultas.map((usuarios) => (
                  <Tr>
                    <Td>{usuarios.codeUser}</Td>
                    <Td>
                      {usuarios.firstName} {usuarios.middleName}
                    </Td>
                    <Td>
                      {usuarios.lastName} {usuarios.lastNameM}
                    </Td>
                    <Td>{usuarios.direction}</Td>
                    <Td>{usuarios.phone}</Td>
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
export default ConsultaUsuarios;
