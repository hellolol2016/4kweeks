import React, { useState } from "react";
import "./App.css";
import Table from "./components/Table";
import { Image, Box, Center, HStack, Text, VStack } from "@chakra-ui/react";


function App() {
  return (
    <VStack>
      <Box><Image src={"./img/logo.png"}/></Box>
      <HStack>
        <Box>Closed list</Box>
        <Box>Open list</Box>
      </HStack>
      <VStack>
        <Box>Strategic Underachievement</Box>
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
    <Table />
    </VStack>
  );
}

export default App;
