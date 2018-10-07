pragma solidity ^0.4.25;

contract HLAG2018 {
    struct Milestone {
        address freelancer;
        address client;
        uint price;
        string description;
        uint timestamp;
        bool isDone;
    }

    mapping(string => Milestone) private milestones;

    modifier onlyFreelancer(string id) {
        require(milestones[id].freelancer == msg.sender);
        _;
    }

    modifier onlyClient(string id) {
        require(milestones[id].client == msg.sender);
        _;
    }

    modifier onlyClientOrFreelancer(string id) {
        require(milestones[id].client == msg.sender || milestones[id].freelancer == msg.sender);
        _;
    }

    function isDone(string id) private view returns (bool) {
        return milestones[id].isDone == true;
    }

    function isPastDeadline(string id) private view returns (bool) {
        return milestones[id].timestamp <= block.timestamp;
    }

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }

    function getMilestone(string id) public view returns (address, address, uint, string, uint, bool) {
        return (milestones[id].freelancer, milestones[id].client, milestones[id].price, milestones[id].description, milestones[id].timestamp, milestones[id].isDone);
    }

    function createMilestone(string id, string description, uint timestamp, bool isClient) public payable {
        if (isClient) {
            require(milestones[id].client == 0);
            if (milestones[id].freelancer == 0) {
                milestones[id] = Milestone(0, msg.sender, msg.value, description, timestamp, false);
            } else {
                milestones[id].client = msg.sender;
                milestones[id].price = msg.value;
            }
        } else {
            require(msg.value == 0);
            require(milestones[id].freelancer == 0);
            if (milestones[id].client == 0) {
                milestones[id] = Milestone(msg.sender, 0, 0, description, timestamp, false);
            } else {
                milestones[id].freelancer = msg.sender;
            }

        }
    }

    function setDone(string id) onlyClientOrFreelancer(id) public {
        milestones[id].isDone = true;
        milestones[id].freelancer.transfer(milestones[id].price);
    }

    function withdrawClient(string id) onlyClient(id) public {
        require(isPastDeadline(id) || isDone(id));
        address(msg.sender).transfer(milestones[id].price);
        milestones[id].price = 0;
    }

    function withdrawFreelancer(string id) onlyFreelancer(id) public {
        require(isDone(id));
        address(msg.sender).transfer(milestones[id].price);
        milestones[id].price = 0;
    }
}
