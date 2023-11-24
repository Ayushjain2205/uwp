// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract UniversalWelfareScheme {
    struct Scheme {
        string name;
        string description;
        uint256 amount; // Benefit amount of the scheme
        bool isActive;
    }

    struct Claim {
        uint256 schemeId;
        address beneficiary;
        uint256 timestamp;
    }

    Scheme[] public schemes;
    mapping(uint256 => Claim[]) public schemeClaims; // Scheme ID to claims
    mapping(address => uint256[]) public userClaims; // User address to claimed scheme IDs

    event SchemeAdded(uint256 indexed schemeId, string name);
    event SchemeClaimed(uint256 indexed schemeId, address indexed beneficiary);

    function addScheme(
        string memory _name,
        string memory _description,
        uint256 _amount
    ) public {
        // Note: In a real-world scenario, you might want to add access control here.
        Scheme memory newScheme = Scheme({
            name: _name,
            description: _description,
            amount: _amount,
            isActive: true
        });
        schemes.push(newScheme);
        emit SchemeAdded(schemes.length - 1, _name);
    }

    function claimScheme(uint256 _schemeId) public {
        require(_schemeId < schemes.length, 'Invalid scheme ID');
        require(schemes[_schemeId].isActive, 'Scheme is not active');

        // Optionally, ensure a user can't claim the same scheme multiple times:
        uint256[] memory claimedSchemes = userClaims[msg.sender];
        for (uint256 i = 0; i < claimedSchemes.length; i++) {
            require(
                claimedSchemes[i] != _schemeId,
                'User has already claimed this scheme'
            );
        }

        Claim memory newClaim = Claim({
            schemeId: _schemeId,
            beneficiary: msg.sender,
            timestamp: block.timestamp
        });

        schemeClaims[_schemeId].push(newClaim);
        userClaims[msg.sender].push(_schemeId);

        emit SchemeClaimed(_schemeId, msg.sender);
    }

    function getClaimsByUser(
        address _user
    ) public view returns (uint256[] memory) {
        return userClaims[_user];
    }

    function getClaimsByScheme(
        uint256 _schemeId
    ) public view returns (Claim[] memory) {
        return schemeClaims[_schemeId];
    }
}
