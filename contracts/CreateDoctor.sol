//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
import "./Doctor.sol";

contract CreateDoctor{
    Doctor[] public _doctors;
    uint256 constant maxLimit = 20;
    event DoctorAdded(Doctor indexed newDoctor,address indexed owner);

    function doctorCount() public view returns(uint256) {
        return _doctors.length;
    }

    function createDoctor(string memory name,uint256 age,string memory imageURL,uint256 yoe,string memory dob,string memory speciality,string memory degreeURL,string memory licenseNum,address payable createdBy,string memory email,string memory gender)public{
        Doctor newDoctor = new Doctor(name,imageURL,age,yoe,dob,createdBy,speciality,degreeURL,licenseNum,email,gender);
        _doctors.push(newDoctor);
        emit DoctorAdded(newDoctor,createdBy);
    }

    function doctors(uint256 limit,uint256 offset) public view returns (Doctor[] memory coll) {
        //logic for pagination
        require(offset <= doctorCount(), "offset out of bounds");
        // start our size as difference between total count and offset
        uint256 size = doctorCount() - offset;
        // size should be the smaller of the count or the limit
        size = size < limit ? size : limit;
        // size should not exceed the maxLimit
        size = size < maxLimit ? size : maxLimit;
        // build our collection to return based off of limit and offest
        coll = new Doctor[](size);
        for (uint256 i = 0; i < size; i++) {
            coll[i] = _doctors[offset + i];
        }
        return coll;
    }
}