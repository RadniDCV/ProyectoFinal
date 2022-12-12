import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Select,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  Box,
  SimpleGrid,
  Center,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { editarInmueble, publicarInmueble } from "../../../api/Inmuebles_API";

function Edit({ propiedad }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const value = {
    id: propiedad.id,
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: value,
  });

  const onSubmit = async (data) => {
    console.log(data);
    await editarInmueble(data)
      .then(() => {
        alert("propiedad editada con éxito");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <>
      <Button onClick={onOpen} bgColor="#97d7ea" size="xs">
        Edit
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent p="15px">
          <Center>
            <FormControl as="form" onSubmit={handleSubmit(onSubmit)}>
              <SimpleGrid columns={[1, 2]}></SimpleGrid>
              <Box>
                <FormLabel>Ingrese la ubicacion del inmueble</FormLabel>
                <Select
                  mt="5"
                  placeholder={propiedad.departamento}
                  {...register("departamento", { required: true })}
                >
                  <option value="Montevideo">Montevideo</option>
                  <option value="Maldonado">Maldonado</option>
                  <option value="Canelones">Canelones</option>
                </Select>
                {errors.departamento?.type === "required" && (
                  <p>El campo es requerido</p>
                )}
                <Input
                  mt="5"
                  placeholder={propiedad.ciudad}
                  type="text"
                  {...register("ciudad", { required: true, maxLength: 50 })}
                />
                {errors.ciudad?.type === "required" && (
                  <p>El campo es requerido</p>
                )}
                {errors.ciudad?.type === "maxLength" && (
                  <p>Máximo 20 caracteres</p>
                )}
                <Input
                  mt="5"
                  placeholder={propiedad.barrio}
                  type="text"
                  {...register("barrio", { required: true, maxLength: 50 })}
                />
                {errors.barrio?.type === "required" && (
                  <p>El campo es requerido</p>
                )}
                {errors.barrio?.type === "maxLength" && (
                  <p>Máximo 20 caracteres</p>
                )}
                <Input
                  mt="5"
                  placeholder={propiedad.calle}
                  type="text"
                  {...register("calle", { required: true, maxLength: 50 })}
                />
                {errors.calle?.type === "required" && (
                  <p>El campo es requerido</p>
                )}
                {errors.calle?.type === "maxLength" && (
                  <p>Máximo 20 caracteres</p>
                )}
              </Box>
              <Box>
                <FormLabel>Ingrese detalles del inmueble</FormLabel>
                <Select
                  mt="5"
                  placeholder={propiedad.tipoinueble}
                  {...register("tipoInmueble", { required: true })}
                >
                  <option value="Apartamento">Apartamento</option>
                  <option value="Casa">Casa</option>
                  <option value="Solar">Solar</option>
                </Select>
                {errors.tipoInmueble?.type === "required" && (
                  <p>El campo es requerido</p>
                )}
                <Select
                  mt="5"
                  placeholder={propiedad.tipooperacion}
                  {...register("tipoOperacion", { required: true })}
                >
                  <option value="Alquiler">Alquiler</option>
                  <option value="Venta">Venta</option>
                </Select>
                {errors.tipoOperacion?.type === "required" && (
                  <p>El campo es requerido</p>
                )}
                <Input
                  mt="5"
                  placeholder={propiedad.detmet}
                  type="text"
                  {...register("detMet", { required: true, maxLength: 5 })}
                />
                {errors.detMet?.type === "required" && (
                  <p>El campo es requerido</p>
                )}
                {errors.detMet?.type === "maxLength" && <p>Máximo 5 números</p>}

                <Input
                  mt="5"
                  placeholder={propiedad.detmetterreno}
                  type="number"
                  {...register("detMetTerreno", {
                    required: true,
                    maxLength: 5,
                  })}
                />
                {errors.detMetTerreno?.type === "required" && (
                  <p>El campo es requerido</p>
                )}
                {errors.detmetterreno?.type === "maxLength" && (
                  <p>Máximo 5 números</p>
                )}
                <Input
                  mt="5"
                  placeholder={propiedad.dethabitacion}
                  type="number"
                  {...register("detHabitacion", {
                    required: true,
                    maxLength: 2,
                  })}
                />
                {errors.detHabitacion?.type === "required" && (
                  <p>El campo es requerido</p>
                )}
                {errors.detHabitacion?.type === "maxLength" && (
                  <p>Máximo 2 números</p>
                )}
                <Input
                  mt="5"
                  placeholder={propiedad.detbanios}
                  type="number"
                  {...register("detBanios", { required: true, maxLength: 2 })}
                />
                {errors.detBanios?.type === "required" && (
                  <p>El campo es requerido</p>
                )}
                {errors.detBanios?.type === "maxLength" && (
                  <p>Máximo 2 números</p>
                )}
                <Input
                  mt="5"
                  placeholder={propiedad.precio}
                  type="text"
                  defaultValue=""
                  {...register("precio", { maxLength: 7, required: true })}
                />
                {errors.precio?.type === "required" && (
                  <p>El campo es requerido</p>
                )}
                <Input
                  mt="5"
                  placeholder={propiedad.codpropietario}
                  type="text"
                  {...register("codPropietario", { maxLength: 5 })}
                />
              </Box>
              <Textarea
                mt="5"
                placeholder={propiedad.detalles}
                {...register("detalles")}
              />

              <Button type="submit" bgColor="#97d7ea" align="center" mt="5">
                Editar
              </Button>
            </FormControl>
          </Center>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Edit;
