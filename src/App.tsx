import "@fontsource/raleway/400.css";
import React from 'react';
import NavBar from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer";
import { Main_content } from "./pages/Main_content";
import Groceries from "./pages/Groceries";
import Labels from "./pages/Labels";
import {
  ChakraProvider,
  theme,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Checkout from "./pages/Checkout";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Grid templateColumns="repeat(6)" bg='#f0f0f0'>
      <GridItem colSpan={6} bg="grey.100">
        <NavBar />
      </GridItem>
      <GridItem colSpan={6} bg="grey.200">
        <Routes>
          <Route path='/' element={<Main_content />} />
          <Route path='/groceries' element={<Groceries />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/labels' element={<Labels />} />
        </Routes>
      </GridItem>
      <GridItem colSpan={6} bg="grey.200">
        <Footer />
      </GridItem>
    </Grid>
  </ChakraProvider>
);
