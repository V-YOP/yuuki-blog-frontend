import { Avatar, Box, Button, Divider, Flex, HStack, Icon, useBoolean, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import React, { Fragment } from "react";
import { useReducer } from "react";
import { Text } from '@chakra-ui/react'
import { BsGithub } from "react-icons/bs";
import { SiBilibili } from "react-icons/si";

const content = () => {
    const arr = [
        "Form is liberating",
        "扫帚不到，灰尘照例不会自己跑掉",
        "实践是检验真理的唯一标准",
        "没有调查，没有正确的调查，就没有发言权",
        "あなたからもらったなにもかも、道しるべにしてきたよ",
        "感觉到了的东西，我们不能立刻理解它；只有理解了的东西，才能更深刻地感觉它 "
    ]
    return arr[Math.floor(Math.random() * arr.length)]  + "<br />" + arr[Math.floor(Math.random() * arr.length)]
}


function Header() {
  const [displayMenu, {toggle: toggleDisplayMenu}] = useBoolean(false)
  return (
        <Flex flexDir="column">
            <Flex justifyContent="space-between" borderBottom="1px solid" pb={3}>
                    <Flex pl={2} pt={2} flexDir="column"  flexBasis="65%" gap={3}>
                        <Avatar size='2xl' name='Yuuki' src='https://avatars.githubusercontent.com/u/88199249?s=400&amp;u=44a94b69a71e98b7193416dc856775e8ffd77c9f&amp;v=4' />
                        <Text dangerouslySetInnerHTML={{__html:content()}}></Text>
                        <Wrap>
                            <WrapItem>
                                <Icon w={7} h={7} as={BsGithub} />
                            </WrapItem>
                            <WrapItem>
                                <Icon w={7} h={7} as={SiBilibili} />
                            </WrapItem>
                        </Wrap>
                    </Flex>
                    <Box marginRight="10px" marginTop="10px">
                        <Button>Menu</Button>
                    </Box>
            </Flex>
            <Flex>

            </Flex>
        </Flex>
  )
}

export default function Prototype() {

  return (
    <Flex flexDir={"column"} minH="100vh">
        <Header />
        <Box>hello</Box>
    </Flex>
  )
}