import "@fontsource/raleway/400.css";
import React from "react";
import { ChakraProvider, Stack, theme, Box, Button, Text } from "@chakra-ui/react";

export const Main_content = () => (
  <ChakraProvider theme={theme}>
    <Box paddingTop="50px" margin="auto" width="50%" zIndex={-1}>
      <img src={require("../res/images/store.jpg")} />
    </Box>
    <Stack
      padding="25px"
      justify="center"
      align="flex-start"
      spacing="0px"
      width="425.35px"
      height="301.6px"
      maxWidth="100%"
      background="#FFFFFF"
      margin='auto'
      marginTop="-50px"
      zIndex={1}
      position="relative"
      marginBottom="30px"
      boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.2)"
    >
      <Stack justify="center" align="flex-start" spacing="0px">
        <Stack
          paddingBottom="50px"
          justify="flex-start"
          align="flex-start"
          spacing="50px"
          width="350px"
          maxWidth="100%"
        >
          <Text
            fontFamily="Inter"
            lineHeight="0.59"
            fontWeight="bolditalic"
            fontSize="34px"
            textTransform="capitalize"
            fontStyle="italic"
            color="#000000"
            width="168px"
          >
            <span>Shop</span>
            <Box as="span" textTransform="lowercase">
              .com
            </Box>
          </Text>
          <Text
            fontFamily="Inter"
            lineHeight="1.17"
            fontWeight="regular"
            fontSize="24px"
            textTransform="capitalize"
            color="#000000"
            alignSelf="stretch"
          >
            Our purpose is to nourish people and the planet.{" "}
          </Text>
        </Stack>
        <Button size="lg" colorScheme="green">
          Discover More
        </Button>
      </Stack>
    </Stack>
  </ChakraProvider>
);
