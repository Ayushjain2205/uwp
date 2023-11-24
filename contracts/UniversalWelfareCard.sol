// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract UniversalWelfareCard {
    // Struct to represent a user's ID card
    struct WelfareCard {
        string name;
        uint256 mobileNumber; // unique primary key
        address owner;
        address nomineeID; // Ethereum address of the nominee
        bool isValid;
    }

    // Mapping from user's Ethereum address to WelfareCard
    mapping(address => WelfareCard) public welfareCards;

    // Mapping to store if a mobileNumber is already used
    mapping(uint256 => bool) public mobileNumberExists;

    // Mapping to track if an address has a card
    mapping(address => bool) public hasCard;

    // Events
    event CardCreated(address indexed user, uint256 mobileNumber);
    event CardInvalidated(address indexed user, uint256 mobileNumber);
    event NomineeUpdated(address indexed user, address nomineeID);

    // Function to create a new welfare card
    function createCard(string memory _name, uint256 _mobileNumber) public {
        require(
            !mobileNumberExists[_mobileNumber],
            'Mobile number already registered'
        );
        require(bytes(_name).length > 0, 'Name cannot be empty');
        require(!hasCard[msg.sender], 'Address already has a card');

        welfareCards[msg.sender] = WelfareCard({
            name: _name,
            mobileNumber: _mobileNumber,
            owner: msg.sender,
            nomineeID: address(0), // Initializing with a zero address; can be updated later
            isValid: true
        });

        mobileNumberExists[_mobileNumber] = true;
        hasCard[msg.sender] = true;

        emit CardCreated(msg.sender, _mobileNumber);
    }

    // Function to set the nominee
    function setNominee(address _nomineeID) public {
        require(
            hasCard[msg.sender],
            'Caller does not have a valid WelfareCard'
        );
        require(_nomineeID != msg.sender, 'Nominee cannot be the card owner');

        welfareCards[msg.sender].nomineeID = _nomineeID;

        emit NomineeUpdated(msg.sender, _nomineeID);
    }

    // Function to invalidate a card (e.g. in cases of fraud)
    function invalidateCard(address _user) public {
        // Note: In a real-world scenario, you'd have modifiers to ensure only authorized entities can invalidate cards.
        require(welfareCards[_user].isValid, 'Card already invalidated');

        welfareCards[_user].isValid = false;

        emit CardInvalidated(_user, welfareCards[_user].mobileNumber);
    }

    // Function to check if a card is valid
    function isCardValid(address _user) public view returns (bool) {
        return welfareCards[_user].isValid;
    }
}
