import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import Test from "./Test";
import {BrowserRouter, Route, Routes } from "react-router-dom"
import Landing from "./Landing"
ReactDOM.render(
  <BrowserRouter>
  <ChakraProvider>
    <Routes>
      <Route path="/" element={<App />}/> 
      <Route path="test" element={<Test />}/>
      <Route path="landing" element={<Landing />}/>
    </Routes>
  </ChakraProvider>
  </BrowserRouter>
  
  ,

  document.getElementById("root")
);
