import "./App.css";

// Components 
import Table from "./components/Table";

// Hooks
import React from "react";

// Styling
import { Image, Link, Box, Center, HStack, Text, VStack, background } from "@chakra-ui/react";
import { Container, Miniheader, Header, Body} from "./components/Styling";



// Main
function App() {
  return (
    <Body>
      <Header></Header>
      <HStack alignItems={"top"} paddingBottom={"10px"}>
        <Container>
          <Miniheader>Closed List</Miniheader>
          <Table type={"closed"} />
        </Container>
        <Container>
          <Miniheader>Open List</Miniheader>
          <Table type={"open"} />
        </Container>
      </HStack>
      <VStack>
        <Container>
          <Miniheader>Strategic Underachievement</Miniheader>
          <HStack>
            <VStack>
              <Text>I will slack off in... </Text>
              <Text>...</Text>
            </VStack>
            <VStack>
              <Text paddingRight={"5px"}>So I can succeed in...</Text>
              <Text>...</Text>
            </VStack>
          </HStack>
          <Table type={"closed"}/>
        </Container>
      </VStack>
    </Body>
  );
}

export default App;
