import React from "react";
import {
  Stack,
  Text,
  Box,
  HStack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import EnviromentalTag from "../EnviromentalTag";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../features/feature/cartSlice";

const CheckoutCard = (props: any) => {
  const dispatch = useDispatch();

  return (
    <Stack
      direction="row"
      justify="space-between"
      align="center"
      spacing="50px"
      alignSelf="stretch"
    >
      <Stack direction="row" justify="flex-start" align="center" spacing="50px">
        <Stack
          direction="row"
          justify="flex-start"
          align="flex-start"
          spacing="10px"
        >
          <Box margin="auto" width="90px">
            <img src={require("../../res/images/fruitandveg.jpeg")} />
          </Box>
          <Stack justify="flex-start" align="flex-start" spacing="5px">
            <Text
              fontWeight="semibold"
              fontSize="16px"
              color="#000000"
              textAlign="end"
            >
              {props.item.name}
            </Text>
            <Text
              fontWeight="regular"
              fontSize="14px"
              fontStyle="italic"
              color="#000000"
              textAlign="end"
            >
              {props.item.type}
            </Text>
            <Stack
              direction="row"
              justify="flex-start"
              align="flex-start"
              spacing="10px"
            >
              {props.item.tags.map((tag: string) => {
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
                  case "Reduced":
                    return <EnviromentalTag tag={tag} colour="orange.900" />;
                  default:
                    break;
                }
              })}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <HStack>
        <NumberInput defaultValue={props.quantity} size="lg" width="100px">
          <NumberInputField background="#FFFFFF" />
          <NumberInputStepper background="white">
            <NumberIncrementStepper
              onClick={() =>
                dispatch(
                  addToCart({
                    price: props.item.price,
                    item: props.item.id,
                    tags: props.item.tags.length,
                  })
                )
              }
            />
            <NumberDecrementStepper
              onClick={() =>
                dispatch(
                  removeFromCart({
                    price: props.item.price,
                    item: props.item.id,
                    tags: props.item.tags.length,
                  })
                )
              }
            />
          </NumberInputStepper>
        </NumberInput>
        <Text
          lineHeight="0.83"
          fontWeight="bold"
          fontSize="24px"
          textTransform="capitalize"
          color="#000000"
          width="100px"
        >
          £
          {(Math.round(props.item.price * props.quantity * 100) / 100).toFixed(
            2
          )}
        </Text>
      </HStack>
    </Stack>
  );
};

export default CheckoutCard;
