import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import createdoctorabi from "../../utils/createdoctorabi.json";
import { result } from "lodash";
import IndividualDoctor from "../../components/IndividualDoctor/IndividualDoctor";
import { Grid, GridItem } from "@chakra-ui/react";

const Admin = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [doctors, setDoctors] = useState([]);

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
          <IndividualDoctor  w='100%' individualDoctor={item} key={index} />
        ))}
      </Grid>
    </div>
  );
};

export default Admin;
