import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import createdoctorabi from "../../utils/createdoctorabi.json";
import { result } from "lodash";
import IndividualDoctor from "../../components/IndividualDoctor/IndividualDoctor";
import { Grid, GridItem } from "@chakra-ui/react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const Admin = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [password, setPassword] = useState("");
  const [doctors, setDoctors] = useState([]);
  const [cards, setCards] = useState(false);

  const verifyAdminCred = async () => {
    console.log("WalletAddress: " + walletAddress);
    console.log("Password: " + password);
    if (
      walletAddress === "0xaE93A422CB100d43f0F6bc5F0a8322119FD74385" &&
      password === "Deveshop"
    ) {
      console.log("f this");
      setCards(true);
    }
  };

  useEffect(() => {
    const getDoctors = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        "0x09d0907751601eb789078Fe14f184A53490811f0",
        createdoctorabi,
        signer
      );
      const AllDoctors = contract.doctors(10, 0);
      AllDoctors.then((result) => {
        setDoctors(result);
        console.log(result);
      }).catch((err) => {
        console.log(err);
      });
    };

    getDoctors();
  }, []);

  return (
    <div>
      {!cards ? (
        <Flex
          minH={"100vh"}
          align={"center"}
          justify={"center"}
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading fontSize={"4xl"}>Welcome to Admin Page</Heading>
              <Text fontSize={"lg"} color={"gray.600"}>
                Sign in to approve the <Link color={"blue.400"}>Doctors</Link>
              </Text>
            </Stack>
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={8}
            >
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel>Wallet address</FormLabel>
                  <Input
                    type="text"
                    onChange={(e) => setWalletAddress(e.target.value)}
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  >
                    <Checkbox>Remember me</Checkbox>
                    <Link color={"blue.400"}>Forgot password?</Link>
                  </Stack>
                  <Button
                    onClick={() => verifyAdminCred()}
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Sign in
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      ) : (
        <Flex templateColumns="repeat(4, 1fr)" gap={4} minW={100} >
          {doctors.map((item, index) => (
            <IndividualDoctor individualDoctor={item} key={index} />
          ))}
        </Flex>
      )}
    </div>
  );
};

export default Admin;
