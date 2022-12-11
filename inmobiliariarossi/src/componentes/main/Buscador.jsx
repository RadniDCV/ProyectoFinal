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

  const filtroInmuebles = async () => {
    await listfiltro()
      .then((response) => {
        setInmuebles(response);
      })
      .catch((error) => {
        alert(error);
      });
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  return (
    <FormControl
      maxW={"80%"}
      m="auto"
      mb={"50px"}
      bg={"#edeaea"}
      boxShadow="lg"
      p="10px"
      as="form"
      onSubmit={handleSubmit(filtroInmuebles)}
    >
      <Grid
        gridtemplatecolumns={"30% 70%"}
        gridtemplaterows={"1fr 1fr 1fr"}
        templateAreas={`"txt1 select"
        "txt2 departamento"
        "txt3 slider"`}
      >
        <GridItem area={"txt1"}>Elija el tipo de operación que desea</GridItem>
        <GridItem area={"txt2"}>Elija una ubicación</GridItem>
        <GridItem area={"txt3"}>Elija rango de precios</GridItem>
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
        <GridItem area={"slider"}>
          <RangeSlider
            defaultValue={[10000, 150000]}
            min={0}
            max={200000}
            step={5000}
            onChange={(val) => setValor(val)}
            mt="5px"
            w="80%"
          >
            <RangeSliderMark value={0} fontSize="0.8em">
              0
            </RangeSliderMark>
            <RangeSliderMark value={10000} ml="-5" mt="5px" fontSize="0.8em">
              10.000 $/u$s
            </RangeSliderMark>
            <RangeSliderMark value={50000} ml="-5" mt="5px" fontSize="0.8em">
              50.000 $/u$s
            </RangeSliderMark>
            <RangeSliderMark value={100000} ml="-5" mt="5px" fontSize="0.8em">
              100.000 $/u$s
            </RangeSliderMark>
            <RangeSliderMark value={150000} ml="-5" mt="5px" fontSize="0.8em">
              150.000 $/u$s
            </RangeSliderMark>
            <RangeSliderMark value={200000} ml="-5" mt="5px" fontSize="0.8em">
              200.000
            </RangeSliderMark>
            <RangeSliderMark
              value={valor[0]}
              textAlign="center"
              color="black"
              mt="-8"
              ml="-5"
            >
              {valor[0]}
            </RangeSliderMark>
            <RangeSliderMark
              value={valor[1]}
              textAlign="center"
              color="black"
              mt="-8"
              ml="-5"
            >
              {valor[1]}
            </RangeSliderMark>
            <RangeSliderTrack bg="red.100">
              <RangeSliderFilledTrack bg="#e31e24" />
            </RangeSliderTrack>
            <RangeSliderThumb
              boxSize={6}
              index={0}
              _hover={{ bg: "red.400" }}
            />
            <RangeSliderThumb
              boxSize={6}
              index={1}
              _hover={{ bg: "red.400" }}
            />
          </RangeSlider>
        </GridItem>
      </Grid>
      <Box display={"flex"} justifyContent={"space-between"} w="90%" m="auto">
        <RepeatIcon as="button" onClick={onReset} />
        <Button type="submit">
          <SearchIcon />
        </Button>
      </Box>
    </FormControl>
  );
}

export default Buscador;
