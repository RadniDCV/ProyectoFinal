import {
  Box,
  Select,
  Grid,
  GridItem,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderMark,
  Button,
  FormControl,
} from "@chakra-ui/react";
import { SearchIcon, RepeatIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { listfiltro } from "../../api/Inmuebles_API";

function Buscador({ onSubmit, onReset }) {
  const [valor, setValor] = useState([]);
  const [inmuebles, setInmuebles] = useState([]);
  const value = {
    precioMin: valor[0],
    precioMax: valor[1],
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: value,
  });

  const filtroInmuebles = async (data) => {
    await listfiltro(data)
      .then((response) => {
        setInmuebles(response);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <FormControl
      maxW={"80%"}
      m="auto"
      mb={"50px"}
      bg={"#edeaea"}
      boxShadow="lg"
      p="10px"
      as="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Grid
        gridtemplatecolumns={"30% 70%"}
        gridtemplaterows={"1fr 1fr "}
        templateAreas={`"txt1 select"
        "txt2 departamento"
`}
      >
        <GridItem area={"txt1"}>Elija el tipo de operación que desea</GridItem>
        <GridItem area={"txt2"}>Elija una ubicación</GridItem>
        <GridItem area={"departamento"}>
          <Select placeholder="Departamento" {...register("ubicacion")}>
            <option value="Montevideo">Montevideo</option>
            <option value="Maldonado">Maldonado</option>
            <option value="Canelones">Canelones</option>
          </Select>
        </GridItem>
        <GridItem area={"select"}>
          <Select
            placeholder="Seleccione una operacion"
            {...register("operacion")}
          >
            <option value="Alquiler">Alquiler</option>
            <option value="Venta">Venta</option>
          </Select>
        </GridItem>
      </Grid>
      <Box display={"flex"} justifyContent={"space-between"} w="90%" m="auto">
        <Button onClick={onReset}>
          <RepeatIcon />
        </Button>
        <Button type="submit">
          <SearchIcon />
        </Button>
      </Box>
    </FormControl>
  );
}

export default Buscador;
