// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import {FunctionsClient} from '@chainlink/contracts/src/v0.8/functions/dev/v1_0_0/FunctionsClient.sol';
import {ConfirmedOwner} from '@chainlink/contracts/src/v0.8/shared/access/ConfirmedOwner.sol';
import {FunctionsRequest} from '@chainlink/contracts/src/v0.8/functions/dev/v1_0_0/libraries/FunctionsRequest.sol';

/**
 * @title VerifyAadhar
 * @notice This contract is designed to verify an Aadhar number using Chainlink's external adapter feature
 * @dev This contract uses Chainlink Functions to make an HTTP POST request to the Aadhaar KYC API
 *      It should not be used in production as is, and further security and functionality considerations must be made.
 */
contract VerifyAadhar is FunctionsClient, ConfirmedOwner {
    using FunctionsRequest for FunctionsRequest.Request;

    // State variables to store the last request ID, response, and error
    bytes32 public s_lastRequestId;
    bytes public s_lastResponse;
    bytes public s_lastError;

    // Custom error for unexpected request IDs
    error UnexpectedRequestID(bytes32 requestId);

    // Event to log API responses
    event Response(
        bytes32 indexed requestId,
        string responseString,
        bytes response,
        bytes err
    );

    // Router address for the Chainlink node (Mumbai testnet)
    address router = 0x6E2dc0F9DB014aE19888F539E59285D2Ea04244C;

    // JavaScript code for making the Aadhaar KYC API request
    string source =
        'const aadhaarNumber = args[0];'
        'const apiResponse = await Functions.makeHttpRequest({'
        "method: 'POST',"
        "url: 'https://api.sandbox.co.in/kyc/aadhaar/okyc/otp',"
        'headers: {'
        "'accept': 'application/json',"
        "'content-type': 'application/json',"
        "'x-api-version': '1.0'"
        '},'
        'data: JSON.stringify({ aadhaar_number: aadhaarNumber })'
        '});'
        'if (apiResponse.error) {'
        "throw Error('Request failed');"
        '}'
        'const { data } = apiResponse;'
        'return Functions.encodeString(JSON.stringify(data));';

    // Callback gas limit
    uint32 gasLimit = 300000;

    // donID for Mumbai testnet
    bytes32 donID =
        0x66756e2d706f6c79676f6e2d6d756d6261692d31000000000000000000000000;

    // Variable to store the response
    string public responseString;

    /**
     * @notice Constructor to initialize the contract with Chainlink router address and set the contract owner
     */
    constructor() FunctionsClient(router) ConfirmedOwner(msg.sender) {}

    /**
     * @notice Function to send a request to the Aadhaar KYC API to verify an Aadhaar number
     * @param subscriptionId The Chainlink subscription ID
     * @param args Arguments for the API request, including the Aadhaar number
     * @return requestId The ID of the Chainlink request
     */
    function sendRequest(
        uint64 subscriptionId,
        string[] calldata args
    ) external onlyOwner returns (bytes32 requestId) {
        FunctionsRequest.Request memory req;
        req.initializeRequestForInlineJavaScript(source); // Initialize with JavaScript code
        if (args.length > 0) req.setArgs(args); // Set API request arguments

        // Send the request and store the request ID
        s_lastRequestId = _sendRequest(
            req.encodeCBOR(),
            subscriptionId,
            gasLimit,
            donID
        );

        return s_lastRequestId;
    }

    /**
     * @notice Callback function for the Chainlink node to fulfill the request
     * @param requestId The ID of the request being fulfilled
     * @param response The response from the API
     * @param err Any errors encountered during the request
     */
    function fulfillRequest(
        bytes32 requestId,
        bytes memory response,
        bytes memory err
    ) internal override {
        if (s_lastRequestId != requestId) {
            revert UnexpectedRequestID(requestId); // Ensure the request IDs match
        }
        s_lastResponse = response;
        responseString = string(response);
        s_lastError = err;

        emit Response(requestId, responseString, s_lastResponse, s_lastError); // Log the response
    }
}
