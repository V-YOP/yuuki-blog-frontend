import { Avatar, Box, Button, Divider, Flex, HStack, Icon, Image, StackItem, useBoolean, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import React, { Fragment, useMemo } from "react";
import { useReducer } from "react";
import { Text } from '@chakra-ui/react'
import { BsGithub } from "react-icons/bs";
import { SiBilibili } from "react-icons/si";

import img1 from '@/resource/img/1.png'
import img2 from '@/resource/img/2.png'
import img3 from '@/resource/img/3.png'
import img4 from '@/resource/img/4.jpg'

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
  const content_ = useMemo(content, [])
  return (
        <Flex flexDir="column"  borderBottom="1px solid" pb={3}>
            <Flex justifyContent="space-between">
                    <Flex pl={2} pt={2} flexDir="column"  flexBasis="65%" gap={3}>
                        <Avatar size='2xl' name='Yuuki' src='https://avatars.githubusercontent.com/u/88199249?s=400&amp;u=44a94b69a71e98b7193416dc856775e8ffd77c9f&amp;v=4' />
                        <Text dangerouslySetInnerHTML={{__html:content_}}></Text>
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
                        <Button onClick={toggleDisplayMenu}>Menu</Button>
                    </Box>
            </Flex>
            <VStack hidden={displayMenu}>
                <StackItem>主页</StackItem>
                <StackItem>归档</StackItem>
                <StackItem>标签</StackItem>
                <StackItem>关于</StackItem>
            </VStack>
        </Flex>
  )
}

function Content() {

  return (
    <Flex flexFlow="row wrap" gap={3} justifyContent="center" alignItems="stretch">
    <Card description="" date="" headImageUrl={img1} />
    <Card description="" date="" headImageUrl={img2} />
    <Card description="" date="" headImageUrl={img3} />
    <Card description="" date="" headImageUrl={img4} />
    </Flex>
  )
}

type CardParam = {
  headImageType? : 'portrait' | 'landscape' // portrait 头图在左侧，landscape头图在上侧
  headImageUrl?: string,
  title?: string,
  description: string,
  date: string,
  tags?: string[]
}

function Card({
  headImageType = 'landscape',
  headImageUrl = "",
  title = "",
  description,
  date,
  tags = []
}: CardParam) {
  return (
    <Flex flexDir="column" border="1px solid black" minH={20} flex="0 0 30rem">
      <Image src={headImageUrl} borderBottom="1px solid black"/>
      <Text>wochaowochaowochoa</Text>
    </Flex>
  )
}



function Footer() {

  return (
    <Flex>

    </Flex>
  )
}



export default function Prototype() {
  return (
    <Flex flexDir={"column"} minH="100vh">
        <Header />
        <Content />
        <Footer />
    </Flex>
  )
}

