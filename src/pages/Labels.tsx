import { Box, Stack, Text } from "@chakra-ui/react";
import EnviromentalTag from "../components/EnviromentalTag";

const Labels = () => (
  <Box>
    <Stack
      margin="auto"
      padding="25px"
      marginTop="25px"
      marginBottom="25px"
      justify="flex-start"
      align="flex-start"
      spacing="32px"
      width="1066px"
      maxWidth="100%"
      background="#FFFFFF"
      boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.2)"
    >
      <Stack spacing="25px" marginBottom="30px">
        <Text
          lineHeight="0.59"
          fontWeight="bold"
          fontSize="34px"
          textTransform="capitalize"
          color="#000000"
        >
          Our Food Labels
        </Text>
        <Text
          fontWeight="regular"
          fontSize="24px"
          color="#000000"
          textAlign="end"
        >
          Discover what our label meanings and the accreditation behind them{" "}
        </Text>
      </Stack>

      <Stack
        paddingEnd="3px"
        direction="row"
        justify="flex-start"
        align="center"
        spacing="50px"
        alignSelf="stretch"
      >
        <Stack width="111.52px" height="20px">
          <EnviromentalTag tag="EcoPack" colour="purple.500"/>
        </Stack>
        <Text fontWeight="regular" fontSize="24px" color="#000000" flex="1">
          This label shows that the item does not have packaging or has a
          packaging that is 100% recyclable.
        </Text>
      </Stack>
      <Stack
        direction="row"
        justify="flex-start"
        align="center"
        spacing="30px"
        alignSelf="stretch"
      >
        <Stack width="132px" height="20px" >
          <EnviromentalTag tag="Fairtrade" colour="yellow.600"/>
        </Stack>
        <Text fontWeight="regular" fontSize="24px" color="#000000" flex="1">
          This label shows that the item comes from fair trade.
        </Text>
      </Stack>
      <Stack
        direction="row"
        justify="flex-start"
        align="center"
        spacing="84px"
        alignSelf="stretch"
      >
        <Stack width="80px" height="20px" >
          <EnviromentalTag tag="Local" colour="red.600"/>
        </Stack>
        <Text fontWeight="regular" fontSize="24px" color="#000000" flex="1">
          This label shows that the item is locally sourced (British).
        </Text>
      </Stack>
      <Stack
        direction="row"
        justify="flex-start"
        align="center"
        spacing="56px"
        alignSelf="stretch"
      >
        <Stack width="108px" height="20px" >
          <EnviromentalTag tag="Organic" colour="green.500"/>
        </Stack>
        <Text fontWeight="regular" fontSize="24px" color="#000000" flex="1">
          This label shows that the item is organic. No pesticide or chemical
          fertiliser were used.
        </Text>
      </Stack>
      <Stack
        direction="row"
        justify="flex-start"
        align="center"
        spacing="56px"
        alignSelf="stretch"
      >
        <Stack width="114px" height="20px" >
          <EnviromentalTag tag="Reduced" colour="orange.900"/>
        </Stack>
        <Text fontWeight="regular" fontSize="24px" color="#000000" flex="1">
          This label indicates that the item is reduced to avoid waste.
        </Text>
      </Stack>
      <Stack
        direction="row"
        justify="flex-start"
        align="center"
        spacing="42px"
        alignSelf="stretch"
      >
        <Stack width="126px" height="20px" >
          <EnviromentalTag tag="Seasonal" colour="blue.600"/>
        </Stack>
        <Text fontWeight="regular" fontSize="24px" color="#000000" flex="1">
          This label shows that the item is in season.
        </Text>
      </Stack>
    </Stack>
  </Box>
);

export default Labels;
