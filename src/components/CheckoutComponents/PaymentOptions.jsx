import { Stack, VStack, HStack, Box, useBreakpointValue, Flex } from "@chakra-ui/react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useColorModeValue,
} from "@chakra-ui/react";

import { FaCreditCard, FaMobileAlt, FaUniversity, FaQrcode, FaWallet, FaGooglePay } from "react-icons/fa";
import PaymentCard from "./PaymentCard";
import PaymentGateway from "./PaymentGateway";
import { useState } from "react";

const paymentOptions = [
  { label: "Debit card", icon: FaCreditCard },
  { label: "Phone Pe", icon: FaMobileAlt },
  { label: "Net Banking", icon: FaUniversity },
  { label: "UPI QR Code", icon: FaQrcode },
  { label: "Paytm", icon: FaWallet },
  { label: "Google Pay", icon: FaGooglePay },
];

export default function PaymentOptions({ setCheckPayment }) {
  const colors = useColorModeValue(
    ["red.50", "teal.50", "blue.50", "yellow.50", "green.50", "orange.50"],
    ["red.900", "teal.900", "blue.900", "yellow.900", "green.900", "orange.900"]
  );
  const [tabIndex, setTabIndex] = useState(0);
  const bg = colors[tabIndex];
  // Stack vertically at 992px (md) and below
  const flexDirection = useBreakpointValue({ base: "column", md: "column", lg: "row" });
  const tabListWidth = useBreakpointValue({ base: "100%", md: "100%", lg: "180px" });
  const tabPanelsWidth = useBreakpointValue({ base: "100%", md: "100%", lg: "auto" });
  const cardMaxW = useBreakpointValue({ base: "400px", md: "400px", lg: "none" });
  const cardMargin = useBreakpointValue({ base: "0 auto", md: "0 auto", lg: "0" });
  const cardPadding = useBreakpointValue({ base: 3, md: 4, lg: 6 });

  return (
    <Tabs
      variant="unstyled"
      onChange={(index) => setTabIndex(index)}
      isFitted
      w="100%"
    >
      <Flex
        direction={flexDirection}
        alignItems={{ base: "center", md: "center", lg: "flex-start" }}
        gap={{ base: 4, md: 4, lg: 6 }}
        w="100%"
      >
        <TabList
          flexDir="column"
          as={VStack}
          spacing={3}
          alignItems="stretch"
          width={tabListWidth}
          minW={tabListWidth}
          maxW={cardMaxW}
          m={cardMargin}
          bg="gray.50"
          borderRadius="lg"
          boxShadow="md"
          p={cardPadding}
          minWidth={"13rem"}
        >
          {paymentOptions.map((option, idx) => (
            <Tab
              key={option.label}
              justifyContent="flex-start"
              fontWeight={500}
              fontSize={{ base: "14px", md: "16px" }}
              color="gray.700"
              borderRadius="md"
              px={3}
              py={2}
              _selected={{
                bg: "orange.400",
                color: "white",
                boxShadow: "sm",
              }}
              minWidth={"9.4rem"}
              _focus={{ boxShadow: "outline" }}
              mb={1}
            >
              <Box as={option.icon} mr={2} boxSize={5} />
              {option.label}
            </Tab>
          ))}
        </TabList>

        <TabPanels
          flex={1}
          width={tabPanelsWidth}
          maxW={cardMaxW}
          m={cardMargin}
          bg="white"
          borderRadius="lg"
          boxShadow="md"
          p={cardPadding}
          minW={0}
        >
          <TabPanel as={VStack} spacing={1} height="100%" padding="0px">
            <PaymentCard setCheckPayment={setCheckPayment} />
          </TabPanel>
          <TabPanel height="100%">
            <PaymentGateway gateway={paymentOptions[1].label} setCheckPayment={setCheckPayment} />
          </TabPanel>
          <TabPanel height="100%">
            <PaymentGateway gateway={paymentOptions[2].label} setCheckPayment={setCheckPayment} />
          </TabPanel>
          <TabPanel height="100%">
            <PaymentGateway gateway={paymentOptions[3].label} setCheckPayment={setCheckPayment} />
          </TabPanel>
          <TabPanel height="100%">
            <PaymentGateway gateway={paymentOptions[4].label} setCheckPayment={setCheckPayment} />
          </TabPanel>
          <TabPanel height="100%">
            <PaymentGateway gateway={paymentOptions[5].label} setCheckPayment={setCheckPayment} />
          </TabPanel>
        </TabPanels>
      </Flex>
    </Tabs>
  );
}
