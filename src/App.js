import "./App.css";

// Components 
import Table from "./components/Table";

// Hooks
import React, { useState } from "react";

// ChakraUI
import { Image, Box, Center, HStack, Text, VStack, background } from "@chakra-ui/react";

// Images
import logo from "./img/logo.png";

function Container({...additions}) {
  return (
    <Box 
      textAlign={"center"}
      w={"100%"}
      bg={"lightgray"} 
      padding={"30px"}
      color={"black"}
      {...additions}
    ></Box>
  );
} 

// Main
function App() {
  return (
    <VStack fontFamily={"Bahnschrift, sans-serif"} w={"85"}bg={"#111111"} color="white">
      <Box paddingBottom={"15px"} w={"30%"} margin={"auto"}><img w={"100%"} src={logo} alt={"4K WEEKS"}/></Box>
      <HStack>
        <Container>
          <Text fontSize="4xl"> Working Goals</Text>
          <Table type={"closed"}/>
        </Container>
        <Container>
          <h2>Pending</h2>
          <Table type={"closed"}/>
        </Container>
      </HStack>
      <VStack>
        <Container>Strategic Underachievement</Container>
        <HStack>
          <VStack>
            <Text>I will slack off in... </Text>
            <Text>...</Text>
          </VStack>
          <VStack>
            <Text>So I can succeed in...</Text>
            <Text>...</Text>
          </VStack>
        </HStack>
      </VStack>
    <Table type={"closed"}/>
    </VStack>
  );
}

export default App;
