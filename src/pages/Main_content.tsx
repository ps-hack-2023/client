import "@fontsource/raleway/400.css";
import React from 'react';
import {
  ChakraProvider,
  Text,
  theme,
  Box,
} from "@chakra-ui/react";

export const Main_content = () => (
  <ChakraProvider theme={theme}>
    <Box padding='50px' margin='auto' width="50%">
      <img src={require('../res/images/store.jpg')}/>
    </Box>
  </ChakraProvider>
);
