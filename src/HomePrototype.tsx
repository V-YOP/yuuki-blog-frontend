import { Avatar, Box, Button, Collapse, Divider, Flex, Heading, HStack, Icon, Image, StackItem, Tag, useBoolean, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import React, { Fragment, useMemo } from "react";
import { useReducer } from "react";
import { Text } from '@chakra-ui/react'
import { BsGithub } from "react-icons/bs";
import { SiBilibili } from "react-icons/si";

import img1 from '@/resource/img/1.png'
import img2 from '@/resource/img/2.png'
import img3 from '@/resource/img/3.png'
import img4 from '@/resource/img/4.jpg'

function range(start: number, end: number): number[] {
  const res = []
  for (let i = start; i <= end; i++) {
    res.push(i)
  }
  return res
}

const content = () => {
  const arr = [
    "Form is liberating",
    "扫帚不到，灰尘照例不会自己跑掉",
    "实践是检验真理的唯一标准",
    "没有调查，没有正确的调查，就没有发言权",
    "あなたからもらったなにもかも、道しるべにしてきたよ",
    "感觉到了的东西，我们不能立刻理解它；只有理解了的东西，才能更深刻地感觉它 "
  ]
  return arr[Math.floor(Math.random() * arr.length)] + "<br />" + arr[Math.floor(Math.random() * arr.length)]
}

const card = (i: number) => {
  const arr = [
    <Card
      title="在 Typescript 中 实现 ADT（Algebra Data Types） "
      description="之前看一篇文章学会了在 typescript 中实现 ADT，今天摸索出来给 ADT 添加方法的方式，正巧做个总结。 "
      date="2022-08-23"
      headImageUrl={img4}
      tags={["Typescript", "FP", "FP", "FP","FP", "FP", "FP", "FP"]} />,
    <Card
      title="从零开始使用 webpack 搭建 typescript + react 项目"
      description="为了熟悉 webpack 相关工具链，考虑跟随官方文档，从零开始去创建一个 typescript + react 的项目以作为实践。  "
      date="2022-08-23"
      headImageUrl={img2}
      tags={["Webpack", "Front End"]} />,
    <Card
      title="Scala 学习笔记——惰性求值"
      description="惰性求值的重要性在于，它能够使我们操作集合时在使用原有的高阶函数进行操作的基础上尽量保证性能，不用在操作过程中临时创建集合，从而能兼顾抽象性和性能。那么代价是什么呢？ 三个月前做的笔记，后来学到了服务注册和发现，负载均衡模式就停下了。最近可能要捡起来也说不定。 对微服务的学习是至关重要的，这个论断是绝对正确的，单体应用已经难以承受当前的互联网时代的复杂度，且性能等因素也受摩尔定律的约束无法更多提升。无论是对当前还是遥远的将来。惰性求值的重要性在于，它能够使我们操作集合时在使用原有的高阶函数进行操作的基础上尽量保证性能，不用在操作过程中临时创建集合，从而能兼顾抽象性和性能。那么代价是什么呢？ 三个月前做的笔记，后来学到了服务注册和发现，负载均衡模式就停下了。最近可能要捡起来也说不定。 对微服务的学习是至关重要的，这个论断是绝对正确的，单体应用已经难以承受当前的互联网时代的复杂度，且性能等因素也受摩尔定律的约束无法更多提升。无论是对当前还是遥远的将来。"
      date="2022-08-23"
      headImageUrl={img3}
      tags={["Scala", "FP"]} />,
    <Card
      title="微服务学习笔记 1——Prelude"
      description="三个月前做的笔记，后来学到了服务注册和发现，负载均衡模式就停下了。最近可能要捡起来也说不定。 对微服务的学习是至关重要的，这个论断是绝对正确的，单体应用已经难以承受当前的互联网时代的复杂度，且性能等因素也受摩尔定律的约束无法更多提升。无论是对当前还是遥远的将来。"
      date="2022-08-23"
      headImageUrl={img4}
      tags={["Real World"]} />
  ]
  return arr[i % arr.length]
}


function Header() {
  const [displayMenu, { toggle: toggleDisplayMenu }] = useBoolean(false)
  const content_ = useMemo(content, [])
  return (
    <Flex flexDir="column" borderBottom="1px solid" pb={3}>
      <Flex justifyContent="space-between">
        <Flex pl={2} pt={2} flexDir="column" flexBasis="65%" gap={3}>
          <Avatar size='2xl' name='Yuuki' src='https://avatars.githubusercontent.com/u/88199249?s=400&amp;u=44a94b69a71e98b7193416dc856775e8ffd77c9f&amp;v=4' />
          <Text dangerouslySetInnerHTML={{ __html: content_ }}></Text>
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
      <Collapse in={displayMenu} animateOpacity>
        <VStack>
          <StackItem>主页</StackItem>
          <StackItem>归档</StackItem>
          <StackItem>标签</StackItem>
          <StackItem>关于</StackItem>
        </VStack>
      </Collapse>
    </Flex>
  )
}


function Content() {

  return (
    <Flex flexFlow="row wrap" gap={3} justifyContent="center" alignItems="stretch">
      {range(0, 10).map(card)}
    </Flex>
  )
}

type CardParam = {
  headImageType?: 'portrait' | 'landscape' // portrait 头图在左侧，landscape头图在上侧
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
    <Flex flexDir="column" border="1px solid black"
      marginLeft={3} marginRight={3}
      justifyContent="space-between" flex="1 1 45%">
      <Flex flexDir="column">
        <Box width="100%" paddingTop="42.85%" position="relative" overflow="hidden">
          <Image src={headImageUrl} position="absolute"
            top={0} bottom={0} left={0} right={0} objectFit="cover" borderBottom="1px solid black" />
        </Box>
      </Flex>

      <Box padding={3}>
        <Wrap>
          {tags.map(tag => <WrapItem><Tag>{tag}</Tag></WrapItem>)}
        </Wrap>

        <Box>
          <Heading size="lg">{title}</Heading>
          <Text>{description}</Text>
        </Box>

        <Text as="samp">{date}</Text>
      </Box>
    </Flex>
  )
}



function Footer() {

  return (
    <Flex flexDir="column" borderTop="1px solid black" justifyContent="center" alignItems="center" minH="200px">
      <Text>This is the footer</Text>
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
