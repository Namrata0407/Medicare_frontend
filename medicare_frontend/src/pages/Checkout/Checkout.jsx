import { Heading, Stack, VStack, Box, Divider, useBreakpointValue, Icon, HStack, Flex } from "@chakra-ui/react";
import { FaMapMarkerAlt, FaCreditCard } from "react-icons/fa";
import Address from "../../components/CheckoutComponents/Address";
import PaymentOptions from "../../components/CheckoutComponents/PaymentOptions";
import PlaceOrderButton from "../../components/CheckoutComponents/PlaceOrderButton";
import { useState } from "react";
import Navbar1 from "../../components/Navbar/Navbar1";
import Footer5 from "../../components/Footer/Footer5";

export default function Checkout(props) {
  const [checkAddress, setCheckAddress] = useState(false);
  const [checkPayment, setCheckPayment] = useState(false);
  const cardPadding = useBreakpointValue({ base: 2, sm: 4, md: 8 });
  const cardWidth = useBreakpointValue({ base: "100%", sm: "98%", md: "700px", lg: "1000px" });

  return (
    <>
      <Navbar1 />
      <Box minH="100vh" bgGradient="linear(to-br, gray.50, gray.100)" py={{ base: 2, sm: 4, md: 10 }}>
        <Box
          maxW={cardWidth}
          mx="auto"
          bg="white"
          borderRadius="xl"
          boxShadow="lg"
          p={cardPadding}
          w="100%"
        >
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={{ base: 6, sm: 8, md: 8, lg: 12 }}
            alignItems={{ base: "stretch", md: "flex-start" }}
            justifyContent="space-between"
            w="100%"
          >
            {/* Address Section */}
            <VStack
              align="stretch"
              flex={1}
              minW={{ base: "100%", md: "320px", lg: "360px" }}
              maxW={{ base: "100%", md: "420px" }}
              spacing={6}
              pr={{ base: 0, md: 2 }}
            >
              <HStack spacing={3} mb={2}>
                <Icon as={FaMapMarkerAlt} color="orange.400" boxSize={6} />
                <Heading fontWeight="bold" fontSize={{ base: "lg", md: "xl" }} color="orange.500">
                  Shipping Address
                </Heading>
              </HStack>
              <Box w="100%">
                <Address setCheckAddress={setCheckAddress} />
              </Box>
            </VStack>
            {/* Payment Section */}
            <VStack
              align="stretch"
              flex={2}
              minW={{ base: "100%", md: "280px", lg: "400px" }}
              maxW={{ base: "100%", md: "600px" }}
              spacing={6}
              pl={{ base: 0, md: 2 }}
              mt={{ base: 8, md: 0 }}
            >
              <HStack spacing={3} mb={2}>
                <Icon as={FaCreditCard} color="orange.400" boxSize={6} />
                <Heading fontWeight="bold" fontSize={{ base: "lg", md: "xl" }} color="orange.500">
                  Payment Options
                </Heading>
              </HStack>
              <Box w="100%">
                <PaymentOptions setCheckPayment={setCheckPayment} />
              </Box>
            </VStack>
          </Flex>
          <Divider my={8} />
          <Box textAlign="center" w="100%">
            <PlaceOrderButton isDisabled={!(checkAddress && checkPayment)} />
          </Box>
        </Box>
      </Box>
      <Footer5 />
    </>
  );
}
