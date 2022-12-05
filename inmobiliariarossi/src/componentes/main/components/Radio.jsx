import React, { useState } from "react";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";

export function Select() {
  const [value, setValue] = useState("1");

  return (
    <RadioGroup onChange={setValue} value={value}>
      <Stack direction="row">
        <Radio value="1" bg="white" colorScheme="red">
          Alquiler
        </Radio>
        <Radio value="2" bg="white" colorScheme="red">
          Venta
        </Radio>
      </Stack>
    </RadioGroup>
  );
}

export function Locacion() {
  const [value, setValue] = useState("1");

  return (
    <RadioGroup onChange={setValue} value={value}>
      <Stack direction="row">
        <Radio value="1" bg="white" colorScheme="red">
          Canelones
        </Radio>
        <Radio value="2" bg="white" colorScheme="red">
          Montevideo
        </Radio>
        <Radio value="3" bg="white" colorScheme="red">
          Maldonado
        </Radio>
      </Stack>
    </RadioGroup>
  );
}
