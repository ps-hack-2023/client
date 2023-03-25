import {
  Stack,
  Text,
  Box,
  InputGroup,
  Input,
  Icon,
  Button,
} from "@chakra-ui/react";
import { IoMdCart } from "react-icons/io";

import { Link, useMatch, useResolvedPath } from "react-router-dom";
import navBarItems from "./navBarItems.json";
import "./navBarStyles.css";
import { useSelector } from "react-redux";

const NavBar = () => {
  const {cartPrice} = useSelector((store: any) => store.cart)
  const formattedPrice = (Math.round(cartPrice * 100) / 100).toFixed(2);

  const LinkComponent = ({
    to,
    children,
  }: {
    to: string;
    children: string;
  }) => {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to}>{children}</Link>
      </li>
    );
  };

  return (
    <Stack
      paddingTop="15px"
      paddingBottom="5px"
      justify="flex-start"
      align="center"
      spacing="10px"
      maxWidth="100%"
      background="#FFFFFF"
      boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
    >
      <Stack
        direction="row"
        justify="space-between"
        align="center"
        spacing="100px"
        width="100%"
        paddingLeft="50px"
        paddingRight="50px"
        maxWidth="100%"
      >
        <Stack
          direction="row"
          justify="flex-start"
          align="center"
          spacing="226px"
        >
          <Link to="/">
            <Text
              fontFamily=""
              lineHeight="0.37"
              fontWeight="extrabold italic"
              fontSize="54px"
              fontStyle="italic"
              color="green.500"
            >
              Shop.com
            </Text>
          </Link>

          <Box>
            <InputGroup size="md" width="400px" maxWidth="100%">
              <Input placeholder="Search" />
            </InputGroup>
          </Box>
        </Stack>
        <Button
          leftIcon={<Icon as={IoMdCart} />}
          variant="outline"
          colorScheme="green"
          height="38px"
        >
          £{formattedPrice}
        </Button>
      </Stack>
      <Stack
        direction="row"
        justify="space-between"
        align="flex-start"
        spacing="130px"
        width="80%"
        maxWidth="100%"
      >
        <Stack
          direction="row"
          justify="flex-start"
          align="flex-start"
          spacing="25px"
        >
          <ul>
            {navBarItems.map((navItem) => (
              <LinkComponent to={navItem.href}>{navItem.label}</LinkComponent>
            ))}
          </ul>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default NavBar;
