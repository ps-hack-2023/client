import "@fontsource/raleway/400.css";
import React from 'react';
import {
  ChakraProvider,
  Stack,
  SkeletonCircle,
  SkeletonText,
  theme,
  Grid,
  GridItem,
} from "@chakra-ui/react";

export const Main_content = () => (
  <ChakraProvider theme={theme}>
    <Grid templateColumns="repeat(6)">
      <GridItem colSpan={6} bg="grey.100">
      {/* <Stack justify="flex-start" align="center" spacing="20px"> */}
        <Stack justify="flex-start" align="center" spacing="34px" margin={10}>
          <Stack
            paddingX="63px"
            paddingY="23px"
            borderRadius="12px"
            justify="flex-start"
            align="flex-start"
            spacing="10px"
            overflow="hidden"
            background="#FFFFFF"
            boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
          >
            <Stack justify="flex-start" align="flex-start" spacing="10px">
              <SkeletonCircle width="68px" height="70px" />
              <SkeletonText width="924px" height="83px" maxWidth="100%" />
              <SkeletonText width="924px" height="83px" maxWidth="100%" />
            </Stack>
          </Stack>
          <Stack
            paddingX="63px"
            paddingY="23px"
            borderRadius="12px"
            justify="flex-start"
            align="flex-start"
            spacing="10px"
            overflow="hidden"
            background="#FFFFFF"
            boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
          >
            <Stack justify="flex-start" align="flex-start" spacing="10px">
              <SkeletonCircle width="68px" height="70px" />
              <SkeletonText width="924px" height="83px" maxWidth="100%" />
              <SkeletonText width="924px" height="83px" maxWidth="100%" />
            </Stack>
          </Stack>
          <Stack
            paddingX="63px"
            paddingY="23px"
            borderRadius="12px"
            justify="flex-start"
            align="flex-start"
            spacing="10px"
            overflow="hidden"
            background="#FFFFFF"
            boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
          >
            <Stack justify="flex-start" align="flex-start" spacing="10px">
              <SkeletonCircle width="68px" height="70px" />
              <SkeletonText width="924px" height="83px" maxWidth="100%" />
              <SkeletonText width="924px" height="83px" maxWidth="100%" />
            </Stack>
          </Stack>
          <Stack
            paddingX="63px"
            paddingY="23px"
            borderRadius="12px"
            justify="flex-start"
            align="flex-start"
            spacing="10px"
            overflow="hidden"
            background="#FFFFFF"
            boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
          >
            <Stack justify="flex-start" align="flex-start" spacing="10px">
              <SkeletonCircle width="68px" height="70px" />
              <SkeletonText width="924px" height="83px" maxWidth="100%" />
              <SkeletonText width="924px" height="83px" maxWidth="100%" />
            </Stack>
          </Stack>
          <Stack
            paddingX="63px"
            paddingY="23px"
            borderRadius="12px"
            justify="flex-start"
            align="flex-start"
            spacing="10px"
            overflow="hidden"
            background="#FFFFFF"
            boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
          >
            <Stack justify="flex-start" align="flex-start" spacing="10px">
              <SkeletonCircle width="68px" height="70px" />
              <SkeletonText width="924px" height="83px" maxWidth="100%" />
              <SkeletonText width="924px" height="83px" maxWidth="100%" />
            </Stack>
          </Stack>
          <Stack
            paddingX="63px"
            paddingY="23px"
            borderRadius="12px"
            justify="flex-start"
            align="flex-start"
            spacing="10px"
            overflow="hidden"
            background="#FFFFFF"
            boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
          >
            <Stack justify="flex-start" align="flex-start" spacing="10px">
              <SkeletonCircle width="68px" height="70px" />
              <SkeletonText width="924px" height="83px" maxWidth="100%" />
              <SkeletonText width="924px" height="83px" maxWidth="100%" />
            </Stack>
          </Stack>
        </Stack>
        {/* </Stack> */}
      </GridItem>
    </Grid>
  </ChakraProvider>
);
