// Hooks/React components
import React, { useState } from "react";
import { Link as Redirect } from "react-router-dom";

// Styling
import {
  Button,
  Image,
  Link,
  Box,
  Center,
  HStack,
  Text,
  VStack,
  background,
  textDecoration,
} from "@chakra-ui/react";
import {
  Container,
  Line,
  Miniheader,
  Header,
  LargeHeader,
  Body,
} from "./components/Styling";
import "./fonts.css";

import { motion, AnimatePresence } from "framer-motion";


import banner from "./img/landing_main.png";



export default function Landing() {
  const [startedLoading, setStartedLoading] = useState(false);
  console.log(window.scrollY);
  return (
    <>
    <LargeHeader></LargeHeader>
    <AnimatePresence>
      <motion.div
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={{
          hidden: { opacity: 0, x: 0, y: 20 },
          enter: { opacity: 1, x: 0, y: 0 },
          exit: { opacity: 0, x: -0, y: 20 },
        }}
        transition={{ duration: 1, type: "easeInOut" }}
        style={{ position: "relative" }}
      >
        <Body>
          <VStack w={"100%"} bgImg={banner} bgPosition={"center"} bgSize={"cover"} paddingBottom={"40px"} mb={"20px"}>
            <Container bg={"#111111"} marginTop={"20px"} w={"70%"} color={"white"}>
              <Miniheader
                fontSize={{base: "27px", md: "27px", lg: "34", xl: "38px" }}
                paddingLeft={"14%"}
                paddingRight={"14%"}
              >
                A tool to accomplish your goals and manage your time.

              </Miniheader>
              <Text m="10px">Watch the video below before getting started!</Text>
              <Line marginTop={"10px"} marginBottom={"35px"}></Line>
              <Redirect to={"/"}>
                <Button
                  colorScheme={"blue"}
                  fontFamily={"Montserrat, sans-serif"}
                  color={"white"}
                  padding={"50px 30px 50px 30px"}
                  fontSize={{ base: "18px", md: "24px", lg: "28px" }}
                >
                  Get Started
                </Button>
              </Redirect>
            </Container>

          </VStack>
          <Text marginTop={"50px"} fontFamily={"Comfortaa, Montserrat, sans-serif"} fontSize={"40px"}>Introduction Video</Text> 
          <iframe width="560" height="315" src="https://www.youtube.com/embed/wHro9Xl5EYg?start=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Body>
      </motion.div>
    </AnimatePresence>
</>
  );
}
