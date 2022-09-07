import { Flex } from "@chakra-ui/react";
import React, { Fragment } from "react";
import { useReducer } from "react";

export default function App() {
  const [counter, plus] = useReducer(c => c + 1, 0)
  return (
    <Flex></Flex>
  )
}