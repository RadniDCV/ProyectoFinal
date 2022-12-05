import React, { useState } from "react";
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderMark,
} from "@chakra-ui/react";

function Slider() {
  const [valor, setValor] = useState([]);
  return (
    <RangeSlider
      defaultValue={[10000, 150000]}
      min={0}
      max={200000}
      step={5000}
      onChange={(val) => setValor(val)}
      mt="5px"
      w="80%"
    >
      <RangeSliderMark value={0}>0</RangeSliderMark>
      <RangeSliderMark value={10000} ml="-5" mt="5px">
        10.000 $/u$s
      </RangeSliderMark>
      <RangeSliderMark value={50000} ml="-5" mt="5px">
        50.000 $/u$s
      </RangeSliderMark>
      <RangeSliderMark value={100000} ml="-5" mt="5px">
        100.000 $/u$s
      </RangeSliderMark>
      <RangeSliderMark value={150000} ml="-5" mt="5px">
        150.000 $/u$s
      </RangeSliderMark>
      <RangeSliderMark value={200000} ml="-5" mt="5px">
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
      <RangeSliderThumb boxSize={6} index={0} _hover={{ bg: "red.400" }} />
      <RangeSliderThumb boxSize={6} index={1} _hover={{ bg: "red.400" }} />
    </RangeSlider>
  );
}

export default Slider;
