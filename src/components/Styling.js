// Hooks
import React from "react";

// Styling
import { Image, Link, Box, Center, HStack, Text, VStack, background } from "@chakra-ui/react";

// Images
import logo from "../img/logo.png";


export function Container({...additions}) {
  return (
    <Box 
    boxShadow={"5px 5px 0px 0px #D4AF37"}
    textAlign={"center"}
    w={"100%"}
    bg={"linear-gradient(135deg, transparent 20px, lightgray 0)"} 
    padding={"30px"}
    color={"black"}
    {...additions}
    ></Box>
  );
} 

export function Miniheader({...additions}) {
  return (
    <Text
    fontSize={"30px"}
    textShadow={"2px 2px 3px #222222"}
    {...additions}
    ></Text>
  )
}

export function Header({...additions}) {
  return (
    <Box 
      paddingTop={"25px"} 
      paddingBottom={"15px"} 
      minWidth={"450px"} 
      w={"30%"} 
      margin={"auto"}
      {...additions}
    >
      <Link 
        color={"transparent"} 
        href={"/landing"}>
        <img 
          w={"100%"} 
          src={logo}
          alt={"4K WEEKS"}
        />
      </Link>
    </Box>
  )
}

export function Footer({...additions}) {
  return (
    <Box

    ></Box>
  )
}