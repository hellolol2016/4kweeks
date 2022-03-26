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
          <Container marginTop={"20px"} w={"60%"}>
            <Miniheader
              fontSize={{ base: "22px", md: "27px", lg: "38px" }}
              paddingLeft={"14%"}
              paddingRight={"14%"}
            >
              A tool to accomplish your goals and manage your time.
            </Miniheader>
            <Line marginTop={"10px"} marginBottom={"35px"}></Line>
            <Redirect to={"/"}>
              <Button
                colorScheme={"blue"}
                fontFamily={"Montserrat, sans-serif"}
                color={"white"}
                padding={"50px 30px 50px 30px"}
                fontSize={{ base: "24px", md: "30px", lg: "36px" }}
              >
                Get Started
              </Button>
            </Redirect>
          </Container>
        </Body>
      </motion.div>
    </AnimatePresence>
</>
  );
}
