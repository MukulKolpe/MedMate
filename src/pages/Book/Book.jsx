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
import ApprovedDoctor from "../../components/ApprovedDoctor/ApprovedDoctor";

const Book = () => {
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
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {doctors.map((item, index) => (
          <ApprovedDoctor w="100%" individualDoctor={item} key={index} />
        ))}
      </Grid>
    </div>
  );
};

export default Book;
