import { Button } from "@chakra-ui/react";
import React from "react";
import { eliminarInmueble } from "../../../api/Inmuebles_API";

function Delete({ propiedad }) {
  const value = {
    id: propiedad.id,
  };
  const borrarInmueble = async (value) => {
    await eliminarInmueble(value)
      .then(() => {
        alert("propiedad eliminada con éxito");
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <Button size="xs" bg="red.400" onClick={borrarInmueble}>
      Borrar
    </Button>
  );
}

export default Delete;
