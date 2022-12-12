import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Text,
  Button,
  Select,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  Box,
  SimpleGrid,
  Center,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { registrar } from "../../api/Rule_user";

function Register() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    await registrar(data)
      .then(() => {
        alert("usuario registrado con exito");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <>
      <Button
        onClick={onOpen}
        bg="#414141"
        color="#bcc1ca;"
        size="sm"
        _hover={{ bg: "#616161", boxShadow: "lg" }}
        margin={"15px"}
      >
        Registrar
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="3xl">
        <ModalOverlay />
        <ModalContent p="15px">
          <FormControl as="form" onSubmit={handleSubmit(onSubmit)}>
            <VStack>
              <Text>Ingrese sus datos</Text>
              <HStack>
                <VStack>
                  <FormLabel>Primer nombre</FormLabel>
                  <Input
                    placeholder="Juan"
                    {...register("nombre", { required: true })}
                  />
                  {errors.nombre?.type === "required" && (
                    <p>El campo es requerido</p>
                  )}
                </VStack>
                <VStack>
                  <FormLabel>Segundo nombre</FormLabel>
                  <Input
                    placeholder="Jose"
                    {...register("snombre", { required: true })}
                  />
                  {errors.snombre?.type === "required" && (
                    <p>El campo es requerido</p>
                  )}
                </VStack>
                <VStack>
                  <FormLabel>Apellido</FormLabel>
                  <Input
                    placeholder="Peres"
                    {...register("apellido", {
                      required: true,
                    })}
                  />
                  {errors.apellido?.type === "required" && (
                    <p>El campo es requerido</p>
                  )}
                </VStack>
                <VStack>
                  <FormLabel>Apellido materno</FormLabel>
                  <Input
                    placeholder="Gomez"
                    {...register("sapellido", {
                      required: true,
                    })}
                  />
                  {errors.sapellido?.type === "required" && (
                    <p>El campo es requerido</p>
                  )}
                </VStack>
              </HStack>
              <HStack>
                <FormLabel>Email</FormLabel>
                <Input
                  placeholder="JJperesgomez@example.com"
                  {...register("email", {
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                  })}
                />
                {errors.email?.type === "required" && (
                  <p>El campo es requerido</p>
                )}
                {errors.email?.type === "pattern" && (
                  <p>Ingrese un email valido</p>
                )}
                <FormLabel>Dirección</FormLabel>
                <Input
                  placeholder="Av. Ejemplo 123"
                  {...register("direccion", {
                    required: true,
                  })}
                />
                {errors.direccion?.type === "required" && (
                  <p>El campo es requerido</p>
                )}
                <FormLabel>Contraseña</FormLabel>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  {...register("passw", { required: true })}
                />
                {errors.passw?.type === "required" && (
                  <p>El campo es requerido</p>
                )}
              </HStack>
              <Button type="submit">Registrar</Button>
            </VStack>
          </FormControl>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Register;
