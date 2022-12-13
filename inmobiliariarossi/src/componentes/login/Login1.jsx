import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { login } from "../../api/Rule_user";

function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    await login(data)
      .then((response) => {
        alert(response.token);
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
        Ingresar
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="md">
        <ModalOverlay />
        <ModalContent p="15px">
          <FormControl as="form" onSubmit={handleSubmit(onSubmit)}>
            <FormLabel>Ingrese sus datos</FormLabel>
            <VStack>
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
                <p>Ingrese un email válido</p>
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

              <Button type="submit">Login</Button>
            </VStack>
          </FormControl>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Login;
