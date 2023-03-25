import React, { useState } from "react";
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";
import { Polybase } from "@polybase/client";
import * as eth from "@polybase/eth";
import { useAuth } from "@polybase/react";

const db = new Polybase({
  defaultNamespace:
    "pk/0x7774c566b97a8dd478608f1885586af3cd4590288dc6a6ef949be2e68637d81d2172cdb0fb8d1e286c318358911af8c477d13b08d7c1526dbe1ea603ca4c6591/MedMate",
});
const collectionRef = db.collection("User");

const Form1 = ({ getName, getAddress, getAge }) => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const handleName = (n) => {
    getName(n);
  };

  const handleAge = (n) => {
    getAge(n);
  };

  const handleAddress = (n) => {
    getAddress(n);
  };

  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        Basic Details
      </Heading>
      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={"normal"}>
            Name
          </FormLabel>
          <Input
            id="first-name"
            placeholder="Enter your name"
            onChange={(e) => handleName(e.target.value)}
          />
        </FormControl>
      </Flex>
      <Flex>
        <FormControl mr="5%" mt="2%">
          <FormLabel htmlFor="email" fontWeight={"normal"}>
            Age
          </FormLabel>
          <NumberInput
            step={1}
            defaultValue={18}
            min={1}
            onChange={(value) => handleAge(value)}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
      </Flex>
      <FormControl mr="5%" mt="2%">
        <FormLabel htmlFor="email" fontWeight={"normal"}>
          Address
        </FormLabel>
        <Textarea
          placeholder="Enter your residential address"
          rows={3}
          shadow="sm"
          focusBorderColor="brand.400"
          fontSize={{
            sm: "sm",
          }}
          onChange={(e) => handleAddress(e.target.value)}
        />
        <FormHelperText>We'll never share your address.</FormHelperText>
      </FormControl>
    </>
  );
};

const Form2 = ({ getBloodGrp, getGender }) => {
  const handleBloodgrp = (q) => {
    getBloodGrp(q);
  };

  const handleGender = (q) => {
    getGender(q);
  };
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        Other Details
      </Heading>
      <FormControl>
        <FormLabel
          htmlFor="country"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
        >
          Gender
        </FormLabel>
        <Select
          id="country"
          name="country"
          autoComplete="country"
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          onChange={(e) => handleGender(e.target.value)}
        >
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </Select>
      </FormControl>
      <Flex>
        <FormControl mr="5%" mt="2%">
          <FormLabel htmlFor="first-name" fontWeight={"normal"}>
            Blood Group
          </FormLabel>
          <Input
            id="first-name"
            placeholder="Enter your blood grp"
            onChange={(e) => handleBloodgrp(e.target.value)}
          />
        </FormControl>
      </Flex>
    </>
  );
};

const Form3 = ({ getBloodPressure, getDiabetes, getCardio, getOther }) => {
  const handleBloodPressure = (q) => {
    getBloodPressure(q);
  };

  const handleDiabetes = (q) => {
    getDiabetes(q);
  };

  const handleCardio = (q) => {
    getCardio(q);
  };

  const handleOther = (q) => {
    getOther(q);
  };

  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal">
        Medical Details
      </Heading>
      <Flex>
        <FormControl mr="5%" mt="4%">
          <FormLabel htmlFor="first-name" fontWeight={"normal"}>
            Are you diagnosed with diabetes ?
          </FormLabel>
          <RadioGroup defaultValue="2">
            <Stack spacing={5} direction="row">
              <Radio
                colorScheme="red"
                value="1"
                onChange={() => handleDiabetes(false)}
              >
                No
              </Radio>
              <Radio
                colorScheme="green"
                value="2"
                onChange={() => handleDiabetes(true)}
              >
                Yes
              </Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
      </Flex>
      <Flex>
        <FormControl mr="5%" mt="4%">
          <FormLabel htmlFor="first-name" fontWeight={"normal"}>
            Are you diagnosed with any cardiovascular disease ?
          </FormLabel>
          <RadioGroup defaultValue="2">
            <Stack spacing={5} direction="row">
              <Radio
                colorScheme="red"
                value="1"
                onChange={() => handleCardio(false)}
              >
                No
              </Radio>
              <Radio
                colorScheme="green"
                value="2"
                onChange={() => handleCardio(true)}
              >
                Yes
              </Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
      </Flex>
      <Flex>
        <FormControl mr="5%" mt="4%">
          <FormLabel htmlFor="first-name" fontWeight={"normal"}>
            Are you diagnosed with high blood pressure ?
          </FormLabel>
          <RadioGroup defaultValue="2">
            <Stack spacing={5} direction="row">
              <Radio
                colorScheme="red"
                value="1"
                onChange={() => handleBloodPressure(false)}
              >
                No
              </Radio>
              <Radio
                colorScheme="green"
                value="2"
                onChange={() => handleBloodPressure(true)}
              >
                Yes
              </Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
      </Flex>
      <FormControl mr="5%" mt="2%">
        <FormLabel htmlFor="email" fontWeight={"normal"}>
          Any other medical history
        </FormLabel>
        <Textarea
          placeholder="Like high cholestrol , cancer  etc"
          rows={3}
          shadow="sm"
          focusBorderColor="brand.400"
          fontSize={{
            sm: "sm",
          }}
          onChange={(e) => handleOther(e.target.value)}
        />
      </FormControl>
    </>
  );
};

export default function multistep() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  const [name, setName] = useState("");
  const [age, setAge] = useState(18);
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [bloodGrp, setBloodGrp] = useState("");
  const [diabetes, setDiabetes] = useState();
  const [cardio, setCardio] = useState();
  const [bloodPressure, setBloodPressure] = useState();
  const [other, setOther] = useState("Nil");
  const { auth, state } = useAuth();

  async function createUser() {
    const res = await collectionRef.create([
      state.userId,
      name,
      age,
      address,
      gender,
      bloodGrp,
      diabetes,
      cardio,
      bloodPressure,
      other,
    ]);
    console.log(res);
  }

  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form"
      >
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated
        ></Progress>
        {step === 1 ? (
          <Form1
            getName={(q) => setName(q)}
            getAge={(q) => setAge(q)}
            getAddress={(q) => setAddress(q)}
          />
        ) : step === 2 ? (
          <Form2
            getBloodGrp={(q) => setBloodGrp(q)}
            getGender={(q) => setGender(q)}
          />
        ) : (
          <Form3
            getDiabetes={(q) => setDiabetes(q)}
            getCardio={(q) => setCardio(q)}
            getBloodPressure={(q) => setBloodPressure(q)}
            getOther={(q) => setOther(q)}
          />
        )}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%"
              >
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                colorScheme="teal"
                variant="outline"
              >
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={() => {
                  createUser();
                  toast({
                    title: "Account created.",
                    description:
                      "Confratulations 🎉 you just completed your profile",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                    position: "top-right",
                  });
                }}
              >
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}
