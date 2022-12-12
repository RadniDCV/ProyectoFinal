import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { list, NumConsulta } from "../../../api/Inmuebles_API";

function NumeroConsultas() {
  const [consultas, setConsultas] = useState([]);
  const getConsultas = async () => {
    await NumConsulta()
      .then((response) => {
        setConsultas(response);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <Popover>
      <PopoverTrigger>
        <Button onClick={getConsultas} bgColor="#97d7ea">
          Click!
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Hay {consultas} Consultas públicadas</PopoverHeader>
      </PopoverContent>
    </Popover>
  );
}

export default NumeroConsultas;
