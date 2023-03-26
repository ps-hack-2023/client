import React from "react";
import { useDispatch } from "react-redux";
import { Icon, Stack, SimpleGrid, Button, Box, Text } from "@chakra-ui/react";
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
import { addToCart } from "../../features/feature/cartSlice";
import EnviromentalTag from "../EnviromentalTag";

const GroceryCard = (props: any) => {
  const dispatch = useDispatch();

  return (
    <Box
      position="relative"
      width="200px"
      border="1px"
      padding="10px"
      borderRadius="10"
    >
      <Stack justify="flex-start" align="flex-start" spacing="22px">
        <Box padding="5px" margin="auto" width="100%">
          <img src={require("../../res/images/fruitandveg.jpeg")} />
        </Box>
        <Stack justify="flex-start" align="flex-start" width="100%">
          <Stack
            justify="flex-start"
            align="flex-start"
            spacing="5px"
            width="100%"
          >
            <Stack justify="flex-start" align="flex-start" spacing="0px">
              <Text
                lineHeight="1.56"
                fontWeight="medium"
                fontSize="15px"
                color="#000000"
              >
                {props.productName}
              </Text>
              <Text
                lineHeight="1.56"
                fontWeight="regular"
                fontStyle="italic"
                fontSize="12px"
                color="#000000"
              >
                {props.amount}
              </Text>
            </Stack>
            <Stack
              direction="row"
              justify="flex-start"
              align="center"
              spacing="5px"
            >
              <Stack
                direction="row"
                justify="flex-start"
                align="flex-start"
                spacing="0px"
              >
                <Icon as={IoMdStar} />
                <Icon as={IoMdStar} />
                <Icon as={IoMdStar} />
                <Icon as={IoMdStarHalf} />
                <Icon as={IoMdStarOutline} />
              </Stack>
              <Text
                lineHeight="2"
                fontWeight="regular"
                fontSize="14px"
                color="#000000"
              >
                (105)
              </Text>
            </Stack>
          </Stack>
          <Box alignSelf={"center"} paddingBottom="100px">
            <SimpleGrid columns={2} spacing={2}>
              {props.tags.map((tag: string) => {
                switch (tag) {
                  case "Organic":
                    return <EnviromentalTag tag={tag} colour="green.500" />;
                  case "Local":
                    return <EnviromentalTag tag={tag} colour="red.600" />;
                  case "Seasonal":
                    return <EnviromentalTag tag={tag} colour="blue.600" />;
                  case "Fairtrade":
                    return <EnviromentalTag tag={tag} colour="yellow.600" />;
                  case "EcoPack":
                    return <EnviromentalTag tag={tag} colour="purple.500" />;
                  default:
                    break;
                }
              })}
            </SimpleGrid>
          </Box>
          <Stack spacing='3px' alignSelf="center" bottom={0} position="absolute" paddingBottom="15px">
            <Text
              lineHeight="1.56"
              fontWeight="bold"
              fontSize="18px"
              color="#000000"
            >
              £{props.price}
            </Text>
            <Box>
              <Button
                onClick={() =>
                  dispatch(
                    addToCart({ price: props.price, item: props.itemId })
                  )
                }
                size="lg"
                variant="outline"
                width="150px"
                height="48px"
              >
                Add
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default GroceryCard;
