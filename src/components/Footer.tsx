import { Stack, Text, Icon } from '@chakra-ui/react'
import {
  IoLogoFacebook,
  IoLogoYoutube,
  IoLogoGoogle,
  IoLogoApple,
} from 'react-icons/io'
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'

export const Footer = () => (
  <Stack
    paddingStart="200px"
    paddingEnd="100px"
    paddingY="20px"
    direction="row"
    justify="center"
    align="flex-start"
    spacing="50px"
    maxWidth="100%"
    background="#FFFFFF"
    boxShadow="0px -4px 4px 0px rgba(0, 0, 0, 0.25)"
  >
    <Stack
      justify="flex-start"
      align="flex-start"
      spacing="12px"
      width="300px"
      maxWidth="100%"
    >
      <Text
        fontFamily=""
        lineHeight="1.56"
        fontWeight="bold"
        fontSize="18px"
        color="#000000"
      >
        Help & Support
      </Text>
      <Text
        fontFamily=""
        lineHeight="1.14"
        fontWeight="regular"
        fontSize="14px"
        color="#000000"
      >
        Customer service
      </Text>
      <Text
        fontFamily=""
        lineHeight="1.14"
        fontWeight="regular"
        fontSize="14px"
        color="#000000"
      >
        Delivery, amend an order & substitutions
      </Text>
      <Text
        fontFamily=""
        lineHeight="1.14"
        fontWeight="regular"
        fontSize="14px"
        color="#000000"
      >
        Book a slot
      </Text>
      <Text
        fontFamily=""
        lineHeight="1.14"
        fontWeight="regular"
        fontSize="14px"
        color="#000000"
      >
        Contact us
      </Text>
      <Text
        fontFamily=""
        lineHeight="1.14"
        fontWeight="regular"
        fontSize="14px"
        color="#000000"
      >
        Shopping online
      </Text>
      <Text
        fontFamily=""
        lineHeight="1.14"
        fontWeight="regular"
        fontSize="14px"
        color="#000000"
      >
        Shopping in store
      </Text>
    </Stack>
    <Stack
      justify="flex-start"
      align="flex-start"
      spacing="12px"
      width="300px"
      maxWidth="100%"
    >
      <Text
        fontFamily=""
        lineHeight="1.56"
        fontWeight="bold"
        fontSize="18px"
        color="#000000"
      >
        About Shop.com
      </Text>
      <Text
        fontFamily=""
        lineHeight="1.14"
        fontWeight="regular"
        fontSize="14px"
        color="#000000"
      >
        Store locator
      </Text>
      <Text
        fontFamily=""
        lineHeight="1.14"
        fontWeight="regular"
        fontSize="14px"
        color="#000000"
      >
        About us
      </Text>
      <Text
        fontFamily=""
        lineHeight="1.14"
        fontWeight="regular"
        fontSize="14px"
        color="#000000"
      >
        Sustainability
      </Text>
      <Text
        fontFamily=""
        lineHeight="1.14"
        fontWeight="regular"
        fontSize="14px"
        color="#000000"
      >
        Health & Nutrition
      </Text>
      <Text
        fontFamily=""
        lineHeight="1.14"
        fontWeight="regular"
        fontSize="14px"
        color="#000000"
      >
        Careers
      </Text>
    </Stack>
    <Stack
      justify="flex-start"
      align="flex-start"
      spacing="12px"
      width="300px"
      maxWidth="100%"
    >
      <Text
        fontFamily=""
        lineHeight="1.56"
        fontWeight="bold"
        fontSize="18px"
        color="#000000"
      >
        More from us
      </Text>
      <Text
        fontFamily=""
        lineHeight="1.14"
        fontWeight="regular"
        fontSize="14px"
        color="#000000"
      >
        Recipes
      </Text>
      <Text
        fontFamily=""
        lineHeight="1.14"
        fontWeight="regular"
        fontSize="14px"
        color="#000000"
      >
        Loyalty program
      </Text>
      <Text
        fontFamily=""
        lineHeight="1.14"
        fontWeight="regular"
        fontSize="14px"
        color="#000000"
      >
        Partner producers
      </Text>
      <Text
        fontFamily=""
        lineHeight="1.14"
        fontWeight="regular"
        fontSize="14px"
        color="#000000"
      >
        Food waste campaign
      </Text>
    </Stack>
    <Stack
      justify="center"
      align="flex-start"
      spacing="19px"
      width="300px"
      maxWidth="100%"
      background="#FFFFFF"
    >
      <Text
        fontFamily=""
        lineHeight="1.56"
        fontWeight="bold"
        fontSize="18px"
        color="#000000"
      >
        Follow us
      </Text>
      <Stack direction="row" justify="flex-start" align="center" spacing="5px">
        <Stack
          direction="row"
          justify="flex-start"
          align="flex-start"
          spacing="25px"
        >
          <Stack
            direction="row"
            justify="flex-start"
            align="center"
            spacing="5px"
          >
            <Icon as={IoLogoFacebook} />
          </Stack>
          <Stack
            direction="row"
            justify="flex-start"
            align="center"
            spacing="5px"
          >
            <Icon as={AiFillInstagram} />
          </Stack>
          <Stack
            direction="row"
            justify="flex-start"
            align="center"
            spacing="5px"
          >
            <Icon as={AiFillTwitterCircle} />
          </Stack>
          <Icon as={IoLogoYoutube} />
        </Stack>
      </Stack>
      <Text
        fontFamily=""
        lineHeight="1.56"
        fontWeight="bold"
        fontSize="18px"
        color="#000000"
      >
        Download our App
      </Text>
      <Stack
        direction="row"
        justify="flex-start"
        align="flex-start"
        spacing="10px"
      >
        <Stack
          paddingX="10px"
          paddingY="4px"
          borderRadius="8px"
          direction="row"
          justify="flex-start"
          align="center"
          spacing="13px"
          background="green.500"
        >
          <Icon as={IoLogoGoogle} />
          <Stack justify="center" align="flex-start" spacing="0px">
            <Text
              fontFamily=""
              lineHeight="2"
              fontWeight="regular"
              fontSize="10px"
              textTransform="uppercase"
              color="white"
            >
              Get it on
            </Text>
            <Text
              fontFamily=""
              lineHeight="1.25"
              fontWeight="bold"
              fontSize="16px"
              textTransform="capitalize"
              color="white"
            >
              Google Play
            </Text>
          </Stack>
        </Stack>
        <Stack
          paddingX="10px"
          paddingY="4px"
          borderRadius="8px"
          direction="row"
          justify="flex-start"
          align="center"
          spacing="13px"
          borderColor="green.500"
          borderStartWidth="1px"
          borderEndWidth="1px"
          borderTopWidth="1px"
          borderBottomWidth="1px"
        >
          <Stack
            direction="row"
            justify="flex-start"
            align="center"
            spacing="50px"
          >
            <Icon as={IoLogoApple} />
          </Stack>
          <Stack justify="center" align="flex-start" spacing="0px">
            <Text
              fontFamily=""
              lineHeight="2"
              fontWeight="regular"
              fontSize="10px"
              textTransform="uppercase"
              color="green.500"
            >
              Get it in the
            </Text>
            <Text
              fontFamily=""
              lineHeight="1.25"
              fontWeight="bold"
              fontSize="16px"
              textTransform="capitalize"
              color="green.500"
            >
              App Store
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  </Stack>
)
