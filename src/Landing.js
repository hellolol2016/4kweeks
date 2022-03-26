import "./App.css";

// Hooks
import React, { useState } from "react";

// Styling
import { Image, Box, Center, HStack, Text, VStack, background } from "@chakra-ui/react";
import { Container, Miniheader, Header } from "./components/Styling";


function LandingBody({...additions}) {
  return (
    <VStack
      w={"100%"}
      bg={"#111111"} 
    ></VStack>
  )
}

export default function Landing()
{
  return (
      <VStack margin={"auto"} fontFamily={"Bahnschrift, sans-serif"} w={"100%"}bg={"#111111"} color="white">
        <Header></Header>
      </VStack>
  );
}