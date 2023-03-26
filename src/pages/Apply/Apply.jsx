import React, { useState } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  HStack,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
  Select,
} from "@chakra-ui/react";
import { SmallCloseIcon } from "@chakra-ui/icons";
import createdoctorabi from "../../utils/createdoctorabi.json";
import { ethers } from "ethers";
import { useAuth } from "@polybase/react";

const Apply = () => {
  const { auth, state } = useAuth();
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [yoe, setYoe] = useState(0);
  const [dob, setDob] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [licenseNum, setLicenseNum] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [imageURL, setImageURL] = useState(
    "https://cdn.vectorstock.com/i/preview-1x/71/90/blank-avatar-photo-icon-design-vector-30257190.jpg"
  );
  const [degreeURL, setDegreeURL] = useState("");
  const [walletAddress,setWalletAddress] = useState("");

  const handleSubmit = async (e) => {
    setWalletAddress(state.userId);
    console.log("walletAddress: "+ walletAddress);
    e.preventDefault();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      "0x09d0907751601eb789078Fe14f184A53490811f0",
      createdoctorabi,
      signer
    );
    console.log(` ${age} ${yoe}`);
    const tx = await contract.createDoctor(
      name,
      age,
      imageURL,
      yoe,
      dob,
      speciality,
      degreeURL,
      licenseNum,
      walletAddress,
      email,
      gender
    );
    console.log(tx);
    
  };

  return (
    <div>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack
          spacing={4}
          w={"full"}
          maxW={"md"}
          bg={useColorModeValue("white", "gray.700")}
          rounded={"xl"}
          boxShadow={"lg"}
          p={6}
          my={12}
        >
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
            User Profile Edit
          </Heading>
          <FormControl id="userName">
            <FormLabel>Profile Image</FormLabel>
            <Stack direction={["column", "row"]} spacing={6}>
              <Center>
                <Avatar size="xl" src={imageURL} />
              </Center>
              <Center w="full">
                <Input
                  placeholder="Profile Image URL"
                  _placeholder={{ color: "gray.500" }}
                  type="text"
                  onChange={(e) => {
                    setImageURL(e.target.value);
                  }}
                />
              </Center>
            </Stack>
          </FormControl>
          <FormControl id="userName" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              placeholder="Name"
              _placeholder={{ color: "gray.500" }}
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              placeholder="your-email@example.com"
              _placeholder={{ color: "gray.500" }}
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </FormControl>
          <FormControl id="age" isRequired>
            <FormLabel>Age</FormLabel>
            <Input
              placeholder="Age"
              _placeholder={{ color: "gray.500" }}
              type="text"
              onChange={(e) => {
                setAge(BigInt(e.target.value));
              }}
            />
          </FormControl>
          <FormControl id="yoe" isRequired>
            <FormLabel>Years of Experience:</FormLabel>
            <Input
              placeholder="Years of Experience"
              _placeholder={{ color: "gray.500" }}
              type="text"
              onChange={(e) => {
                setYoe(BigInt(e.target.value));
              }}
            />
          </FormControl>
          <FormControl id="yoe" isRequired>
            <FormLabel>License Number:</FormLabel>
            <Input
              placeholder="License number"
              _placeholder={{ color: "gray.500" }}
              type="text"
              onChange={(e) => {
                setLicenseNum(e.target.value);
              }}
            />
          </FormControl>
          <FormControl id="speciality" isRequired>
            <FormLabel>Speciality:</FormLabel>
            <Input
              placeholder="e.g.: ENT Specialist"
              _placeholder={{ color: "gray.500" }}
              type="text"
              onChange={(e) => {
                setSpeciality(e.target.value);
              }}
            />
          </FormControl>
          <FormControl id="dob" isRequired>
            <FormLabel>Date of Birth:</FormLabel>
            <Input
              placeholder="Select Date and Time"
              size="md"
              type="datetime-local"
              onChange={(e) => {
                setDob(e.target.value);
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <Select
              id="country"
              onChange={(e) => {
                setGender(e.target.value);
              }}
            >
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </Select>
          </FormControl>
          <FormControl id="medDegree" isRequired>
            <FormLabel>Your Medical Degree URL:</FormLabel>
            <Input
              placeholder="e.g: Drive Link"
              _placeholder={{ color: "gray.500" }}
              type="text"
              onChange={(e) => {
                setDegreeURL(e.target.value);
              }}
            />
          </FormControl>
          <Stack spacing={6} direction={["column", "row"]}>
            <Button
              bg={"red.400"}
              color={"white"}
              w="full"
              _hover={{
                bg: "red.500",
              }}
            >
              Cancel
            </Button>
            <Button
              bg={"blue.400"}
              color={"white"}
              w="full"
              _hover={{
                bg: "blue.500",
              }}
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Submit
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </div>
  );
};

export default Apply;
