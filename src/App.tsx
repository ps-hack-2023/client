import "@fontsource/raleway/400.css";
import React from 'react';
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Main_content } from "./Main_content";
import {
  ChakraProvider,
  Box,
  Badge,
  Flex,
  Avatar,
  Text,
  Stack,
  Button,
  SkeletonCircle,
  SkeletonText,
  Select,
  theme,
  Grid,
  GridItem,
} from "@chakra-ui/react";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Grid templateColumns="repeat(6)">
      <GridItem colSpan={6} bg="grey.100">
        <NavBar></NavBar>
      </GridItem>
      <GridItem colSpan={6} bg="grey.200">
        <Main_content></Main_content>
      </GridItem>
      <GridItem colSpan={6} bg="grey.200">
        <Footer></Footer>
      </GridItem>
    </Grid>
  </ChakraProvider>
);
