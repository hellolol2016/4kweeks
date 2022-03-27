import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import Test from "./Test";
import Landing from "./Landing";

import { motion, AnimatePresence } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

ReactDOM.render(
  <BrowserRouter>
    <ChakraProvider>
      <Routes>
        <Route
          path="/"
          element={
            <Box bg={"#222222"}>
              <App />
            </Box>
          }
        />
        <Route path="test" element={<Test />} />
        <Route
          path="landing"
          element={
            <Box bg={"#222222"}>
              <Landing />
            </Box>
          }
        />
      </Routes>
    </ChakraProvider>
  </BrowserRouter>,

  document.getElementById("root")
);
