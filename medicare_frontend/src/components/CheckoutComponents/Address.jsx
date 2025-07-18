import {
  Input,
  VStack,
  Stack,
  InputGroup,
  InputLeftElement,
  Box,
  useBreakpointValue,
} from "@chakra-ui/react";

import { useState, useReducer, useEffect } from "react";

const initialAddressInfo = {
  name: "",
  phone: "",
  addressLine1: "",
  addressLine2: "",
  zip: "",
  city: "",
  country: "",
  state: "",
};

function reducer(state, action) {
  const [key, value] = action;
  return {
    ...state,
    [key]: value,
  };
}

export default function Address({ setCheckAddress }) {
  const [flag, setFlag] = useState(false);
  const [addressInfo, dispatch] = useReducer(reducer, initialAddressInfo);
  // console.log(addressInfo);
  function validateAddressInfo() {
    for (let i in addressInfo) {
      if (addressInfo[i] !== "") {
        setFlag(true);
		setCheckAddress(true)
      } else {
        setFlag(false);
      }
    }
  }

  useEffect(() => {
    validateAddressInfo();
  }, [addressInfo]);

  // Responsive direction and spacing
  const stackDirection = useBreakpointValue({ base: "column", sm: "column", md: "row" });
  const inputSpacing = useBreakpointValue({ base: 3, sm: 3, md: 5 });
  const cardPadding = useBreakpointValue({ base: 3, sm: 4, md: 0 });

  return (
    <Box
      bg={{ base: "gray.50", md: "transparent" }}
      borderRadius={{ base: "lg", md: "none" }}
      boxShadow={{ base: "md", md: "none" }}
      p={cardPadding}
      w="100%"
    >
      <VStack alignItems="stretch" spacing={inputSpacing} w="100%">
        <Stack direction={{ base: "column", md: "row" }} spacing={inputSpacing} w="100%">
          <Input
            type="text"
            placeholder="Name"
            isRequired={true}
            onChange={({ target: { value } }) => dispatch(["name", value])}
            value={addressInfo.name}
          />
          <InputGroup>
            <InputLeftElement pointerEvents="none" children="+91" />
            <Input
              type="tel"
              placeholder="Phone number"
              onChange={({ target: { value } }) => {
                dispatch(["phone", value]);
              }}
              value={addressInfo.phone}
            />
          </InputGroup>
        </Stack>
        <Stack direction={{ base: "column", md: "row" }} spacing={inputSpacing} w="100%">
          <Input
            type="text"
            placeholder="Address Line 1"
            isRequired={true}
            onChange={({ target: { value } }) =>
              dispatch(["addressLine1", value])
            }
            value={addressInfo.addressLine1}
          />
          <Input
            type="text"
            placeholder="Address Line 2"
            isRequired={true}
            onChange={({ target: { value } }) =>
              dispatch(["addressLine2", value])
            }
            value={addressInfo.addressLine2}
          />
        </Stack>
        <Stack direction={{ base: "column", md: "row" }} spacing={inputSpacing} w="100%">
          <Input
            type="tel"
            placeholder="Zip / Postal Code"
            isRequired={true}
            length={6}
            onChange={({ target: { value } }) => {
              dispatch(["zip", value]);
            }}
            value={addressInfo.zip}
          />
          <Input
            type="text"
            placeholder="City / District"
            isRequired={true}
            onChange={({ target: { value } }) => dispatch(["city", value])}
            value={addressInfo.city}
          />
        </Stack>
        <Stack direction={{ base: "column", md: "row" }} spacing={inputSpacing} w="100%">
          <Input
            type="text"
            placeholder="Country"
            isRequired={true}
            onChange={({ target: { value } }) => dispatch(["country", value])}
            value={addressInfo.country}
          />
          <Input
            type="text"
            placeholder="State"
            isRequired={true}
            onChange={({ target: { value } }) => dispatch(["state", value])}
            value={addressInfo.state}
          />
        </Stack>
      </VStack>
    </Box>
  );
}
