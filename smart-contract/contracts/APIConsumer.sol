pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";

contract RealEstate is ChainlinkClient {
    struct Property {
        address owner;
        string location;
        uint256 price;
        bool isSold;
    }

    struct Transaction {
        address buyer;
        address seller;
        uint256 price;
        uint256 timestamp;
    }

    Property public property;
    Transaction[] public transactions;

    constructor(string memory _location, uint256 _price) {
        property = Property(msg.sender, _location, _price, false);
        _setPublicChainlinkToken();
    }

    function buyProperty() public payable {
        transactions.push(Transaction(msg.sender, property.owner, msg.value, block.timestamp));
        property.owner = msg.sender;
    }

    function getTransactionsCount() public view returns (uint256) {
        return transactions.length;
    }

    function getAllTransactions() public view returns (Transaction[] memory) {
        return transactions;
    }

    function requestPriceData(address _oracle, string memory _jobId, uint256 _payment) public {
        Chainlink.Request memory req = _buildChainlinkRequest(stringToBytes32(_jobId), address(this), this.fulfill.selector);
        _sendChainlinkRequestTo(_oracle, req, _payment);
    }

    function fulfill(bytes32 _requestId, uint256 _price) public recordChainlinkFulfillment(_requestId) {
        property.price = _price;
        buyProperty({ value: _price });
    }

    function stringToBytes32(string memory source) private pure returns (bytes32 result) {
        bytes memory tempEmptyStringTest = bytes(source);
        if (tempEmptyStringTest.length == 0) {
            return 0x0;
        }
        assembly {
            result := mload(add(source, 32))
        }
    }
}