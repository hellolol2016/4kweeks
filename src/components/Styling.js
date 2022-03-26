// Hooks/React components
import React from "react";
import { Link as Redirect }  from "react-router-dom";

// Styling
import { Image, Link, Box, Center, HStack, Text, VStack, background } from "@chakra-ui/react";
import "../fonts.css";

// Images
import logo from "../img/logo.svg";


export function Body({...additions}) {
  return (
    <VStack 
      minHeight={"100vh"}
      paddingBottom={"30px"} 
      margin={"auto"} 
      fontFamily={"Montserrat, sans-serif"} 
      w={"100%"}
      bg={"rgb(20, 20, 20)"} 
      color="white"
      {...additions}
    ></VStack>
  );
}

export function Container({...additions}) {
  return (
    <Box 
    marginLeft={"10px"}
    marginRight={"10px"}
    boxShadow={"6px 6px 0px 0px rgb(255, 196, 13)"}
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
    textShadow={"1px 1px 3px #222222"}
    {...additions}
    ></Text>
  )
}

export function Header({...additions}) {
  return (
    <Box 
      width={"100%"}
      minHeight={"170px"}
      bg={"#222222"}
      marginBottom={"15px"}
      borderBottom={"7px solid rgb(34, 139, 230)"}
      {...additions}

      ><Box 
        w={"500px"}
        margin={"auto"}
        marginTop={"35px"}
        transitionDuration={"300ms"}
        transitionProperty={"width, margin"}
        _hover={{
          marginTop: "33px",
          width: "515px"
        }}
      >
        <Redirect 
          color={"transparent"} 
          to={"/landing"}>
          <img 
            w={"100%"} 
            src={logo}
            alt={"4K WEEKS"}
          />
        </Redirect>
      </Box>
    </Box>
  )
}

export function LargeHeader({...additions}) {
  return (
    <Box 
      display={"flex"}
      justifyContent={"center"}
      width={"100%"}
      minHeight={"400px"}
      bg={"#222222"}
      marginBottom={"15px"}
      borderBottom={"7px solid rgb(34, 139, 230)"}
      {...additions}

      ><Box 
        w={"70%"}
        minWidth={"500px"}
        margin={"auto"}
      >
        <Redirect
          color={"transparent"} 
          to={"/landing"}>
          <img 
            w={"100%"} 
            src={logo}
            alt={"4K WEEKS"}
          />
        </Redirect>
      </Box>
    </Box>
  )
}

export function Line({...additions}) {
  return (
    <Box
      margin={"auto"}
      bg={"rgb(34, 139, 230)"}
      w={"120px"}
      h={"5px"} 
      {...additions}
    ></Box>
  )
}