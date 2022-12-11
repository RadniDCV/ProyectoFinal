import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { enviarConsulta } from "../../../api/Inmuebles_API";

function Consulta() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    await enviarConsulta(data)
      .then(() => {
        alert("Consulta enviada correctamente");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <FormControl w="80%" as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormLabel mt="5">Ingrese su nombre</FormLabel>
      <Input
        placeholder="Nombre"
        type="text"
        {...register("nombre", { required: true, maxLength: 10 })}
      />
      {errors.nombre?.type === "required" && <p>El campo es requerido</p>}
      {errors.nombre?.type === "maxLength" && <p>Máximo 10 caracteres</p>}
      <FormLabel mt="5">Ingrese su correo</FormLabel>
      <Input
        placeholder="correo"
        type="email"
        {...register("email", {
          required: true,
          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
        })}
      />
      {errors.email?.type === "required" && <p>El campo es requerido</p>}
      {errors.email?.type === "pattern" && <p>Formato de Email incorrecto</p>}

      <FormLabel mt="5">Ingrese su consulta</FormLabel>
      <Textarea
        placeholder="Ingrese su consulta"
        resize="none"
        {...register("consulta", { required: true, maxLength: 200 })}
      />
      {errors.consulta?.type === "required" && <p>El campo es requerido</p>}
      {errors.consulta?.type === "maxLength" && <p>Máximo 200 caracteres</p>}

      <Button type="submit" bgColor="#97d7ea" align="center" mt="5">
        Enviar
      </Button>
    </FormControl>
  );
}

export default Consulta;
