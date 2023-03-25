import "@fontsource/raleway/400.css";
import React from 'react';
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Main_content } from "./pages/Main_content";
import {
  ChakraProvider,
  theme,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Grid templateColumns="repeat(6)">
      <GridItem colSpan={6} bg="grey.100">
        <NavBar />
      </GridItem>
      <GridItem colSpan={6} bg="grey.200">
        <Routes>
          <Route path='/' element={<Main_content />} />
        </Routes>
      </GridItem>
      <GridItem colSpan={6} bg="grey.200">
        <Footer />
      </GridItem>
    </Grid>
  </ChakraProvider>
);
