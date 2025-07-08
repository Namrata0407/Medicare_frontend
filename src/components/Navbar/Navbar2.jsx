import {
  Stack,
  Box,
  Text,
  Flex,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import { CATEGORY_ITEMS } from "../../utils/navbar.data.js";

export default function Navbar2() {
  const linkColor = useColorModeValue("gray.900", "gray.200");
  const linkHoverColor = useColorModeValue("#ff6f61", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.900");

  return (
    <Box
      fontFamily={"Clear Sans"}
      shadow={{ base: "sm", lg: "sm" }}
      bg={{ base: "white", lg: "white" }}
      w="100%"
      overflowX={{ base: "auto", lg: "visible" }}
      borderRadius={{ base: "md", lg: "none" }}
      px={{ base: 2, sm: 4, md: 6, lg: 0 }}
      py={{ base: 2, lg: 0 }}
      mb={{ base: 2, lg: 0 }}
    >
      <Stack
        direction={{ base: "row", lg: "row" }}
        spacing={{ base: 2, sm: 3, md: 4, lg: 3 }}
        justifyContent={{ base: "flex-start", lg: "space-evenly" }}
        alignItems="center"
        h={{ base: "48px", lg: "auto" }}
        overflowX={{ base: "auto", lg: "visible" }}
        className="hide-scrollbar"
        flexWrap={{ base: "nowrap", lg: "wrap" }}
      >
        {CATEGORY_ITEMS.map((navItem) => (
          <Box key={navItem.label} minW={{ base: "max-content", lg: "unset" }}>
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <NavLink to={navItem.href}>
                  <Text
                    p={{ base: 2, lg: 1 }}
                    fontSize={{ base: "sm", sm: "md", lg: "md" }}
                    color={linkColor}
                    _hover={{
                      textDecoration: "none",
                      color: linkHoverColor,
                    }}
                    whiteSpace="nowrap"
                  >
                    {navItem.label}
                  </Text>
                </NavLink>
              </PopoverTrigger>

              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={"xl"}
                  bg={popoverContentBgColor}
                  p={0}
                  rounded={"sm"}
                  maxW={{ base: "90vw", sm: "80vw", md: "400px", lg: "min-content" }}
                  minW={{ base: "180px", md: "220px" }}
                >
                  {navItem.children.map((child, i) => (
                    <SimpleGrid columns={2} key={i}>
                      <DesktopSubNav key={i} {...child} />
                    </SimpleGrid>
                  ))}
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </Box>
  );
}

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Flex fontSize="10px">
      <Box width={"max-content"}>
        <Box
          as={NavLink}
          to={href}
          display={"block"}
          p={2}
          h={"30px"}
          rounded={"md"}
          _hover={{
            textDecoration: "none",
            color: "#ff6f61",
          }}
          textAlign="left"
        >
          <Text transition={"all .3s ease"} fontWeight="semibold">
            {label}
          </Text>
        </Box>
        {subLabel.length
          ? subLabel.map((sl, i) => (
              <Box
                as={NavLink}
                key={i}
                to={href}
                display={"block"}
                p={2}
                h={"25px"}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  color: "#ff6f61",
                }}
                textAlign="left"
              >
                <Text fontSize={{ base: "11px", md: "12px" }}>{sl}</Text>
              </Box>
            ))
          : null}
      </Box>
    </Flex>
  );
};
