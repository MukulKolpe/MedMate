//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Doctor is Ownable {
    string public name;
    string public imageURL;
    uint256 public age;
    uint256 public yoe;
    string public dob;
    address payable createdBy;
    string public speciality;
    string public degreeURL;
    string public licenseNum;
    bool public isVerified;
    string public email;
    string public gender;
    address public admin = 0xaE93A422CB100d43f0F6bc5F0a8322119FD74385;

    constructor(
        string memory _name,
        string memory _imageURL,
        uint256 _age,
        uint256 _yoe,
        string memory _dob,
        address payable _createdBy,
        string memory _speciality,
        string memory _degreeURL,
        string memory _licenseNum,
        string memory _email,
        string memory _gender
    ) {
        name = _name;
        imageURL = _imageURL;
        age = _age;
        yoe = _yoe;
        dob = _dob;
        createdBy = _createdBy;
        speciality = _speciality;
        degreeURL = _degreeURL;
        licenseNum = _licenseNum;
        isVerified = false;
        email = _email;
        gender = _gender;
    }

    modifier onlyAdmin(address _admin) {
        require(_admin == admin);
        _;
    }

    function verifyDoctor(bool _status,address _admin) public onlyAdmin(_admin) {
        isVerified = _status;
    }
}