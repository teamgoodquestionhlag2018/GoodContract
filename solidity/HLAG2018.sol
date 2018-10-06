pragma solidity ^0.4.25;

contract HLAG2018 {
    struct Milestone {
        address freelancer;
        address client;
        uint price;
        string description;
        uint timestamp;
    }

    mapping(string => Milestone) milestones;

    function createMilestone(string id, address freelancer, string description, uint timestamp) public payable {
        milestones[id] = Milestone(
            freelancer,
            msg.sender,
            msg.value,
            description,
            timestamp
        );
    }

    function
}

contract HLAG2017 {
    string private message;
    string private message2;
    address private owner;
    address otherContract;

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    constructor () public {
        owner = msg.sender;
    }

    function getOwner() public onlyOwner view returns (address) {
        return owner;
    }

    function setMessage(string newMessage, string newMessage2) public payable {
        message = newMessage;
        message2 = newMessage2;
    }

    function getMessage() public view returns (string) {
        return message;
    }
}
