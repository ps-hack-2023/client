import React from "react";
import { useState } from "react";
import {
  ChakraProvider,
  theme,
  SimpleGrid,
  Stack,
  Text,
  Box,
  Flex,
  Select,
} from "@chakra-ui/react";
import GroceryCard from "../components/GroceryCard/GroceryCard";
import mockData from "./mockData.json";

const Groceries = () => {
  const [filterValue, setFilter] = useState("All");
  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value);
  };

  return (
    <ChakraProvider theme={theme}>
      <Box
        width="80%"
        margin="auto"
        background="white"
        marginTop="20px"
        marginBottom="20px"
        padding="10px"
        boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.2)"
      >
        <Stack
          paddingY="10px"
          justify="flex-start"
          align="center"
          spacing="12px"
          maxWidth="100%"
          background="#FFFFFF"
        >
          <Text
            fontWeight="bold"
            fontSize="35px"
            textTransform="uppercase"
            color="#000000"
          >
            Fruit and Vegetables
          </Text>
        </Stack>
        <Flex paddingBottom="25px">
          <Box width="20%" paddingLeft="25px">
            <Text fontSize="20px" paddingBottom="10px">
              Sustainability Filter:
            </Text>
            <Select value={filterValue} onChange={handleFilterChange}>
              <option value={"All"}>All</option>
              <option value={"Organic"}>Organic</option>
              <option value={"Local"}>Local</option>
              <option value={"Seasonal"}>Seasonal</option>
              <option value={"Fairtrade"}>Fairtrade</option>
              <option value={"EcoPack"}>EcoPack</option>
            </Select>
          </Box>
        </Flex>
        <SimpleGrid minChildWidth="200px" spacing="25px" padding="40px">
          {mockData
            .filter((item: any) => {
              return item.tags.includes(filterValue) || filterValue === "All";
            })
            .map((item: any) => {
              return (
                <GroceryCard
                  productName={item.productName}
                  amount={item.amount}
                  price={item.price}
                  tags={item.tags}
                  itemId={item.productID}
                />
              );
            })}
        </SimpleGrid>
        {mockData.filter((item: any) => {
          return item.tags.includes(filterValue) || filterValue === "All";
        }).length === 0 && (
          <Text
            lineHeight="0.83"
            fontWeight="bold"
            fontSize="20px"
            color="#000000"
            alignSelf={"center"}
          >
            No items to display
          </Text>
        )}
      </Box>
    </ChakraProvider>
  );
};

export default Groceries;
