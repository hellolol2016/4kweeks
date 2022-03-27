// Components
import Table from "./components/Table";

// Hooks
import React, { useRef, useState } from "react";

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
  Stack,
  LinkBox,
} from "@chakra-ui/react";
import {
  Container,
  Miniheader,
  Line,
  Header,
  Body,
} from "./components/Styling";
import "./fonts.css";

import { motion, AnimatePresence } from "framer-motion";

// Main
function App() {
  const slack = useRef(null);
  const spend = useRef(null);
  function updateSlack(){
    localStorage.setItem("slack",slack.current.value);
  }

  function updateSpend(){
    localStorage.setItem("spend",spend.current.value);
  }

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
          <Body>
            <Stack
              direction={{ base: "column", xl: "row" }}
              paddingTop={"20px"}
              alignItems={"top"}
              paddingBottom={"10px"}
            >
              <Container w={{base: "50vw", lg: "35vw"}} marginRight={{base: "0", lg: "10px"}}>
                <Miniheader>Closed List</Miniheader>
                <Table type={"closed"} />
                <Text pt={"20px"} fontSize={{base:"10px",md:"16px"}}>
                  Remember that the only way to add more goals to your closed
                  list is by completeing goals on the closed list or by forever
                  abandoning a goal on the closed list.
                </Text>
                <Text fontSize={"10px"}>Not sure what we&apos;re talking about? Check out <Link color="#228be6" target="_blank" href="https://www.youtube.com/watch?v=wHro9Xl5EYg" rel="noreferrer">THIS lifechanging video!</Link></Text>
              </Container>
              <Container w={{base: "50vw", lg: "35vw"}}>
                <Miniheader>Open List</Miniheader>
                <Table type={"open"} />
              </Container>
            </Stack>
            <VStack>
              <Container minWidth={"50vw"}>
                <Miniheader>Strategic Underachievement</Miniheader>
                <VStack>
                  <InputGroup>
                    <InputLeftAddon
                      children="I will slack off on:"
                      bg="lightgray"
                      border={"none"}
                    />
                    <Textarea
                      type="text"
                      placeholder="What's been wasting my time?"
                      bg={"#292929"}
                      border={"none"}
                      color="white"
                      ref={slack}
                      onChange={updateSlack}
                    >
                      {localStorage.getItem("slack") ? localStorage.getItem("slack"):""}
                    </Textarea>
                  </InputGroup>
                  <InputGroup>
                    <InputLeftAddon
                      children="To focus on:"
                      bg="lightgray"
                      border={"none"}
                    />
                    <Textarea
                      type="text"
                      placeholder="What should I truly spend more time on?"
                      background={"#292929"}
                      border={"none"}
                      color="white"
                      ref={spend}
                      onChange={updateSpend}
                    >{
                      localStorage.getItem("spend") ? localStorage.getItem("spend"):""
                    }</Textarea>
                  </InputGroup>
                </VStack>
              </Container>
            </VStack>
          </Body>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default App;
