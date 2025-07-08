import {
  Input,
  Heading,
  Text,
  Button,
  Link,
  Box,
  useToast,
  VStack,
  Spacer,
  Image,
  Flex,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const InitState = {
  name: "",
  email: "",
  password: "",
  profile_url: "",
};

const Signup = ({ onClose, setLOS }) => {
  const [values, setValues] = useState(InitState);
  const toast = useToast();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleclick = async (e) => {
    e.preventDefault();
    console.log(values);
    try {
      const user = await axios.post(
        `${process.env.REACT_APP_BASEURL}/auth/register`,
        values
      );
      // console.log(user.status);
      toast({
        title: `Welcome ${values.name},`,
        status: "success",
        isClosable: true,
        position: "top",
      });
      setValues(InitState);
      navigate("/");
    } catch (error) {
      // console.log(error.response.data);
      const loggedUser =
        error?.response?.data === "User already exist, please login";
      if (loggedUser) {
        setLOS("login");
      }

      toast({
        title: `${
          error?.response?.data === "User already exist, please login"
            ? "User already exist, please login"
            : "some error"
        }`,
        status: "error",
        isClosable: true,
        position: "top",
      });
      setValues(InitState);
    }
  };

  return (
    <>
      <VStack bg={"white"} w={"100%"} position={"relative"}>
        <Box
          onClick={() => {
            onClose();
          }}
          right={0}
          display={"inline-block"}
          alignItems={"end"}
          justifyContent={"end"}
          position={"absolute"}
          mt={"0.5rem"}
          mr={"0.5rem"}
          borderRadius={"50%"}
          p={"0.25rem"}
          backgroundColor={"#e53e3e1a"}
        >
          <RxCross2 height={"1rem"} width={"1rem"} />
        </Box>
        <Flex textAlign={"center"} flexDirection={"column"} mt={"2rem"}>
          <Heading mb={4} ml="0px">
            Sign Up
          </Heading>
          <Text fontSize="10px" color="grey">
            Get access to your orders, lab tests & doctor consultations
          </Text>
          <Box w={"50%"} m={"auto"} border={"0px solid red"}>
            <form onSubmit={handleclick}>
              <Input
                size={"md"}
                label="Name"
                value={values.name}
                name="name"
                type="text"
                onChange={handleChange}
                required
                placeholder="Enter Full Name"
              />
              <Input
                size={"md"}
                mt="30px"
                label="Email"
                value={values.email}
                name="email"
                type="email"
                onChange={handleChange}
                required
                placeholder="Enter Email ID"
              />
              <Input
                size={"md"}
                mt="30px"
                label="Password"
                id="typePassword"
                name="password"
                placeholder="Password"
                type="password"
                value={values.password}
                onChange={handleChange}
                required
                maxLength="8"
              />
              <Input
                size={"md"}
                mt="30px"
                label="profile_url"
                name="profile_url"
                placeholder="Profile URL"
                type="text"
                value={values.profile_url}
                onChange={handleChange}
                required
              />
              <br />

              <Button mt="10px" size={"md"} colorScheme="red" type="submit">
                Sign Up
              </Button>
            </form>
          </Box>
          <Text fontSize="14px" mt="20px" color="grey">
            Already have an account ?{" "}
            <Link
              color="rgb(255, 111, 97)"
              onClick={() => {
                setLOS("login");
              }}
            >
              Log in
            </Link>
          </Text>

          <Text fontSize="10px" color="grey">
            By Sign up, you agree to our
          </Text>
          <Text fontSize="10px" color="grey">
            <Link href="https://www.1mg.com/tnc">Terms and Conditions</Link> &{" "}
            <Link href="https://www.1mg.com/privacypolicy">Privacy Policy</Link>
          </Text>
        </Flex>
      </VStack>
    </>
  );
};

export default Signup;
