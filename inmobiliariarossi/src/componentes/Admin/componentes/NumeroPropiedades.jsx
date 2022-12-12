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
import { list } from "../../../api/Inmuebles_API";

function NumeroPropiedades() {
  const [inmuebles, setInmuebles] = useState([]);
  const getInmuebles = async () => {
    await list()
      .then((response) => {
        setInmuebles(response);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <Popover>
      <PopoverTrigger>
        <Button onClick={getInmuebles} bgColor="#97d7ea">
          Click!
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>
          Hay {inmuebles.length} Inmuebles públicados
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  );
}

export default NumeroPropiedades;
