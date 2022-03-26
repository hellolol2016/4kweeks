// Components
import Table from "./components/Table";

// Hooks
import React from "react";

// Styling
import {
  Image,
  Link,
  Box,
  Center,
  HStack,
  Text,
  VStack,
  background,
  InputGroup,
  InputLeftAddon,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { Container, Miniheader, Header, Body } from "./components/Styling";
import "./fonts.css";

import {motion ,AnimatePresence} from "framer-motion"


// Main
function App() {
  return (
    <>
    <Header></Header>
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
        <Body >
          <HStack paddingTop={"20px"} alignItems={"top"} paddingBottom={"10px"}>
            <Container minWidth={"30vw"}>
              <Miniheader>Closed List</Miniheader>
              <Table type={"closed"} />
            </Container>
            <Container minWidth={"35vw"}>
              <Miniheader>Open List</Miniheader>
              <Table type={"open"} />
            </Container>
          </HStack>
          <VStack>
            <Container minWidth={"50vw"}>
              <Miniheader>Strategic Underachievement</Miniheader>
                <VStack>
                  <InputGroup>
                    <InputLeftAddon children="I will slack off on:" /> 
                    <Textarea type="text" placeholder="..."/>
                  </InputGroup>
                  <InputGroup>
                    <InputLeftAddon children="To focus on:" /> 
                    <Textarea type="text" placeholder="..."/>
                  </InputGroup>
                </VStack>
            </Container>
          </VStack>
        </Body>
      </motion.div>
    </AnimatePresence></>
  );
}

export default App;
