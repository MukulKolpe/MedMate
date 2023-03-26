import React from "react";
import {
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

export default function DisplayProfile({ name, age, gender, bloodGrp }) {
  return (
    <>
      <Flex justify={"center"} bg={useColorModeValue("gray.50", "gray.800")}>
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
            Basic User Details
          </Heading>
          <FormControl id="userName">
            <FormLabel>User name</FormLabel>
            <Input
              placeholder="UserName"
              _placeholder={{ color: "gray.500" }}
              type="text"
              value={name}
            />
          </FormControl>
          <FormControl id="age">
            <FormLabel>Age</FormLabel>
            <Input value={age} />
          </FormControl>
          <FormControl id="gender">
            <FormLabel>Gender</FormLabel>
            <Input value={gender} />
          </FormControl>
          <FormControl id="bloodGrp">
            <FormLabel>Blood Group</FormLabel>
            <Input value={bloodGrp} />
          </FormControl>
        </Stack>
      </Flex>
    </>
  );
}
