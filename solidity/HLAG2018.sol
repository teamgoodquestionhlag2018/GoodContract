pragma solidity ^0.4.25;

contract HLAG2018 {
    struct Milestone {
        address freelancer;
        address client;
        uint price;
        string description;
        uint timestamp;
    }

    mapping(string => Milestone) private milestones;

    function createMilestone(string id, address freelancer, string description, uint timestamp) public payable {
        assert(milestones[id].price == 0);
        milestones[id] = Milestone(
            freelancer,
            msg.sender,
            msg.value,
            description,
            timestamp
        );
    }

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }

    function getMilestones(string id) public view returns (address, uint, string, uint) {
        return (milestones[id].client, milestones[id].price, milestones[id].description, milestones[id].timestamp);
    }

    function withdrawClient(string id) public {
        require(milestones[id].client == msg.sender);
        address(msg.sender).transfer(milestones[id].price);
    }

    function withdrawFreelancer(string id) public {
        require(milestones[id].freelancer == msg.sender);
        address(msg.sender).transfer(milestones[id].price);
    }
}
