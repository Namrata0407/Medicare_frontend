import {
  Input,
  Heading,
  Text,
  Button,
  Box,
  useToast,
  VStack,
  Image,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUserToken } from "../../redux/AuthReducer/auth.action";
import { AuthContext } from "../../Context/AuthContext";
import { RxCross2 } from "react-icons/rx";

const InitState = {
  email: "",
  password: "",
};

const Signin = ({ onClose, setLOS }) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const [Nav, setNav] = useState(false);
  const [values, setValues] = useState(InitState);
  const { setIsLoggedIn, setToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const checkUser = (token) => {
    if (token) {
      setIsLoggedIn(true);
      setToken(token);
      localStorage.setItem("medicare_token",token);
      localStorage.setItem("isAuth", true);
      onClose();
      toast({
        title: "Logged in  successfully.",
        description: "Keep shopping.",
        status: "success",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
      setNav(true);
    } else {
      toast({
        title: "Invalid credentials !",
        description: "Please enter correct details.",
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    // console.log(values);
    if (values.email === "admin@medicare.com" && values.password === "admin") {
      navigate("/admin");
      onClose();
    } else {
      dispatch(getUserToken(values)).then((res) => checkUser(res.token));
    }
  };

  if (Nav) {
    <Navigate to="/" />;
  }

  return (
    <Box bg={"white"} w={"100%"} position={"relative"}>
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
        <RxCross2 height={"1rem"} width={"1rem"}/>
      </Box>
      <Flex textAlign={"center"} flexDirection={"column"} mt={"2rem"}>
        <Heading mb={4} ml="0px">
          Login
        </Heading>
        <Text fontSize="10px" color="grey">
          Get access to your orders, lab tests & doctor consultations
        </Text>
        <Box w={["70%","60%","60%","60%"]} m={"auto"} border={"0px solid red"}>
          <form onSubmit={handleClick}>
            <Input
              size={"md"}
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
              maxLength="8"
            />

            <Button mt="20px" size={"md"} colorScheme="red" type="submit">
              Login
            </Button>
          </form>
        </Box>
        <Text fontSize="14px" mt="20px" color="grey">
          New on 1mg?{" "}
          <Link
            color="red"
            onClick={() => {
              // SetIsLogin(false);
              setLOS("signup");
            }}
          >
            Sign Up
          </Link>
        </Text>

        <Text fontSize="10px" color="grey">
          By logging in, you agree to our
        </Text>
        <Text fontSize="10px" color="grey">
          <Link href="https://www.1mg.com/tnc">Terms and Conditions</Link> &{" "}
          <Link href="https://www.1mg.com/privacypolicy">Privacy Policy</Link>
        </Text>

        <Text fontSize="10px" color="rgb(255, 111, 97)">
          Need Help? Get In Touch
        </Text>
      </Flex>
    </Box>
  );
};

export default Signin;
