import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Stack, Text, Button } from "@chakra-ui/react";
import CheckoutCard from "../components/CheckoutCard/CheckoutCard";
import mockDataRaw from "./mockData.json";
import { emptyCart } from "../features/feature/cartSlice";
import emailjs from "@emailjs/browser";

const Checkout = () => {
  const { cartPrice, cartItems, loyaltyPoints } = useSelector(
    (store: any) => store.cart
  );
  const formattedPrice = (Math.round(cartPrice * 100) / 100).toFixed(2);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const [mockData, setMockData] = useState(mockDataRaw);
  useEffect(() => {
    const backendData = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    fetch("api/product/all", backendData).then((response) =>
      response
        .json()
        .then((json) => setMockData(json))
        .catch((err) => console.log(err))
    );
  }, []);

  const handleCheckout = () => {
    setLoading(true);
    sendEmail({
      cost: `£${formattedPrice}`,
      prevPoints: "1,620",
      newPoints: `${Math.floor(cartPrice) + Math.floor(loyaltyPoints)}`,
      envPoints: `${Math.floor(loyaltyPoints)}`,
      newTotal: `${(1620 + (Math.floor(cartPrice) + Math.floor(loyaltyPoints)))
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
    });
  };

  const sendEmail = (params: any) => {
    emailjs
      .send("service_dtcbvhy", "template_itzoj8a", params, "4-xGrZKKpvjQQC3s8")
      .then((res) => {
        setLoading(false);
        dispatch(emptyCart());
      })
      .catch((err) => {
        console.log("EMAIL FAILED");
      });
  };

  return (
    <Stack justify="flex-start" align="flex-start" spacing="25px">
      <Stack
        direction="row"
        justify="flex-start"
        align="flex-start"
        spacing="100px"
        alignSelf="center"
      >
        <Stack
          justify="center"
          align="center"
          spacing="22px"
          width="800px"
          maxWidth="100%"
          paddingTop="30px"
        >
          <Text
            lineHeight="0.59"
            fontWeight="bold"
            fontSize="34px"
            textTransform="capitalize"
            color="#000000"
            alignSelf="start"
          >
            Basket
          </Text>
          <Stack
            paddingX="10px"
            paddingTop="20px"
            justify="flex-start"
            align="flex-start"
            spacing="10px"
            alignSelf="stretch"
            background="#FFFFFF"
          >
            <Text
              lineHeight="0.83"
              fontWeight="bold"
              fontSize="24px"
              textTransform="capitalize"
              color="#000000"
            >
              Basket Summary
            </Text>
            <Stack
              paddingX="20px"
              paddingY="40px"
              justify="flex-start"
              align="flex-start"
              spacing="20px"
              alignSelf="stretch"
              background="#FFFFFF"
            >
              {Object.keys(cartItems).map((key) => {
                return (
                  <CheckoutCard
                    item={mockData.find((product) => product.id === key)}
                    quantity={cartItems[key]}
                  />
                );
              })}
              {Object.keys(cartItems).length === 0 && (
                <Text
                  lineHeight="0.83"
                  fontWeight="bold"
                  fontSize="20px"
                  color="#000000"
                  alignSelf={"center"}
                >
                  No items currently in the cart
                </Text>
              )}
            </Stack>
          </Stack>
          {Object.keys(cartItems).length != 0 && (
            <Button
              size="lg"
              colorScheme="green"
              onClick={() => dispatch(emptyCart())}
            >
              Empty Basket
            </Button>
          )}
        </Stack>
        <Stack
          justify="flex-start"
          align="flex-start"
          spacing="24px"
          paddingTop="70px"
        >
          <Stack
            paddingX="25px"
            paddingY="20px"
            justify="flex-start"
            align="flex-start"
            spacing="20px"
            background="#FFFFFF"
          >
            <Stack justify="flex-start" align="flex-start" spacing="27px">
              <Text
                lineHeight="0.83"
                fontWeight="bold"
                fontSize="24px"
                textTransform="capitalize"
                color="#000000"
              >
                Order Summary
              </Text>
              <Stack justify="flex-start" align="center" spacing="20px">
                <Stack
                  justify="flex-start"
                  align="flex-end"
                  spacing="26px"
                  width="350px"
                  height="64px"
                  maxWidth="100%"
                >
                  <Stack
                    direction="row"
                    justify="space-between"
                    align="center"
                    spacing="40px"
                    alignSelf="stretch"
                  >
                    <Text
                      fontWeight="regular"
                      fontSize="16px"
                      color="#000000"
                      textAlign="end"
                    >
                      Basket
                    </Text>
                    <Text
                      fontWeight="semibold"
                      fontSize="16px"
                      color="#000000"
                      textAlign="end"
                    >
                      £{formattedPrice}
                    </Text>
                  </Stack>
                  <Stack
                    direction="row"
                    justify="space-between"
                    align="center"
                    spacing="48px"
                    alignSelf="stretch"
                  >
                    <Text
                      fontWeight="semibold"
                      fontSize="16px"
                      color="#000000"
                      textAlign="end"
                    >
                      Total to pay
                    </Text>
                    <Text
                      fontWeight="semibold"
                      fontSize="16px"
                      color="#000000"
                      textAlign="end"
                    >
                      £{formattedPrice}
                    </Text>
                  </Stack>
                </Stack>
                <Button
                  isLoading={loading}
                  loadingText="Processing..."
                  isDisabled={cartPrice <= 0 ? true : false}
                  size="lg"
                  colorScheme="green"
                  onClick={() => handleCheckout()}
                >
                  Checkout
                </Button>
              </Stack>
            </Stack>
            <Text
              fontWeight="regular"
              fontSize="16px"
              color="#000000"
              textAlign="end"
            >
              Coupons can be applied at checkout
            </Text>
          </Stack>
          <Stack
            paddingX="25px"
            paddingY="20px"
            justify="flex-start"
            align="flex-start"
            spacing="29px"
            background="#FFFFFF"
          >
            <Text
              lineHeight="0.83"
              fontWeight="bold"
              fontSize="24px"
              textTransform="capitalize"
              color="#000000"
            >
              Loyalty Points Breakdown{" "}
            </Text>
            <Stack
              justify="flex-start"
              align="flex-end"
              spacing="10px"
              width="350px"
              maxWidth="100%"
            >
              <Stack
                direction="row"
                justify="space-between"
                align="center"
                spacing="40px"
                alignSelf="stretch"
              >
                <Text
                  fontWeight="regular"
                  fontSize="16px"
                  color="#000000"
                  textAlign="end"
                >
                  Existing loyalty points
                </Text>
                <Text
                  fontWeight="semibold"
                  fontSize="16px"
                  color="black"
                  textAlign="end"
                >
                  1,620
                </Text>
              </Stack>
              <Stack
                direction="row"
                justify="space-between"
                align="center"
                spacing="40px"
                alignSelf="stretch"
              >
                <Text
                  fontWeight="regular"
                  fontSize="16px"
                  color="#000000"
                  textAlign="end"
                >
                  New total loyalty points
                </Text>
                <Text
                  fontWeight="semibold"
                  fontSize="16px"
                  color="black"
                  textAlign="end"
                >
                  {cartPrice != 0 || cartPrice < 0
                    ? "+" + (Math.floor(cartPrice) + Math.floor(loyaltyPoints))
                    : 0}
                </Text>
              </Stack>
              <Stack
                direction="row"
                justify="space-between"
                align="center"
                spacing="40px"
                alignSelf="stretch"
              >
                <Text
                  fontWeight="regular"
                  fontSize="16px"
                  color="#000000"
                  textAlign="end"
                >
                  Of which from sustainable purchases
                </Text>
                <Text
                  fontWeight="semibold"
                  fontSize="16px"
                  color="green.500"
                  textAlign="end"
                >
                  {Math.floor(loyaltyPoints)}
                </Text>
              </Stack>
              <Stack
                paddingY="5px"
                direction="row"
                justify="space-between"
                align="center"
                spacing="48px"
                borderColor="blackAlpha.400"
                borderTopWidth="1px"
                alignSelf="stretch"
              >
                <Text
                  fontWeight="semibold"
                  fontSize="16px"
                  color="#000000"
                  textAlign="end"
                >
                  Total points after checkout
                </Text>
                <Text
                  fontWeight="semibold"
                  fontSize="16px"
                  color="#000000"
                  textAlign="end"
                >
                  {cartPrice != 0 || cartPrice < 0
                    ? (
                        1620 +
                        (Math.floor(cartPrice) + Math.floor(loyaltyPoints))
                      )
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    : "1,620"}
                </Text>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            paddingX="25px"
            paddingY="20px"
            justify="flex-start"
            align="flex-start"
            spacing="10px"
            background="#FFFFFF"
          >
            <Stack
              paddingY="20px"
              justify="flex-start"
              align="flex-start"
              spacing="29px"
              background="#FFFFFF"
            >
              <Text
                lineHeight="0.83"
                fontWeight="bold"
                fontSize="24px"
                textTransform="capitalize"
                color="#000000"
              >
                Delivery information
              </Text>
            </Stack>
            <Stack
              justify="center"
              align="flex-start"
              spacing="20px"
              alignSelf="stretch"
            >
              <Text
                fontWeight="regular"
                fontSize="16px"
                color="#000000"
                width="350px"
                maxWidth="100%"
              >
                Your selected Home Delivery address is:
              </Text>
              <Text
                fontWeight="regular"
                fontSize="16px"
                color="#000000"
                width="350px"
                maxWidth="100%"
              >
                144 Cavendish Avenue, London, W13 0JN
              </Text>
              <Text
                fontWeight="regular"
                fontSize="16px"
                textDecoration="underline"
                color="#000000"
                width="350px"
                maxWidth="100%"
              >
                Change address
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Checkout;
