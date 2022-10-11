import { Box, Button, Flex } from "@chakra-ui/react";
import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useReducer } from "react";
import {getMDXComponent} from 'mdx-bundler/client'

export default function App() {
  const [code, setCode] = useState('')
  const Component = React.useMemo(() => code == '' ? null : getMDXComponent(code) , [code])
  const [counter,plus] = useReducer((x:number) => x + 1, 0)

  useEffect(() => {
    (async () => {
      const {data} = await axios.get('//localhost:3000/testPage')
      setCode(data)
    })()
  }, [counter])
  
  return (
    <Box>
      <Button onClick={plus} marginBottom={5}>reload</Button>
      {Component && <Component />}
    </Box>
  )
}