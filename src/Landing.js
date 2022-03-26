// Hooks/React components
import React, { useState } from "react";

// Styling
import { Button, Image, Link, Box, Center, HStack, Text, VStack, background, textDecoration } from "@chakra-ui/react";
import { Container, Line, Miniheader, Header, LargeHeader, Body } from "./components/Styling";


export default function Landing()
{
  const [startedLoading, setStartedLoading] = useState(false);
  console.log(window.scrollY);
  return (
      <Body>
        <LargeHeader></LargeHeader>
        <Container w={"60%"}>
          <Miniheader 
            fontSize={{base: "28px", md: "32px", lg: "50px"}} 
            paddingLeft={"14%"} 
            paddingRight={"14%"}>
              A tool to accomplish your goals and manage your time.
          </Miniheader>
          <Line marginTop={"10px"} marginBottom={"35px"}></Line>
          {
            startedLoading ? 
            <Button
            colorScheme={"blue"}
            isLoading
            color={"white"} 
            padding={"50px 30px 50px 30px"} 
            fontSize={{base: "24px", md: "30px", lg: "36px"}}
            >
              Get Started
            </Button>
            :
           
            <Button
            colorScheme={"blue"}
            fontFamily={"Monsterrat, sans-serif"}
            color={"white"} 
            padding={"50px 30px 50px 30px"} 
            fontSize={{base: "24px", md: "30px", lg: "36px"}}
            onClick={() => setStartedLoading(true)}
            >
              Get Started
            </Button>
          } 
        </Container>
      </Body>
  );
}