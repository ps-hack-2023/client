import React from "react";
import { Stack, Text } from "@chakra-ui/react";

const EnviromentalTag = (props: any) => {
    return (
            <Stack
              paddingX="2px"
              borderRadius="7px"
              direction="row"
              justify="flex-start"
              align="flex-start"
              spacing="10px"
              borderColor={props.colour}
              borderStartWidth="1px"
              borderEndWidth="1px"
              borderTopWidth="1px"
              borderBottomWidth="1px"
            >
              <Text
                lineHeight="1.82"
                fontWeight="regular"
                fontSize="11px"
                textTransform="uppercase"
                color={props.colour}
                margin="auto"
              >
                {props.tag}
              </Text>
            </Stack>
    )
};

export default EnviromentalTag;
