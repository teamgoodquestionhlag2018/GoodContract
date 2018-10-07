var proposalRepository = require('../data/mocks/MockProposalRepository');

class MilestoneService {
    constructor () {

    }

    /**
     * Mark the milestone as signed for the specific user
     * @param {*} milestoneId The id of the milestone
     * @param {*} userId The id of the user
     */
    SignMilestone(milestoneId, userId) {
        var proposal = proposalRepository.GetProposalByMilestoneId(milestoneId);

        console.log(proposal);

        if (proposal == undefined) {
            throw {
                code: 404,
                message: "This milestone does not exist"
            };
        }

        console.log(proposal);

        var milestone = GetMilestone(proposal.milestones, milestoneId);

        console.log(proposal.freelancer);
        console.log(proposal.client);
        console.log(userId);
        if (proposal.freelancer == userId) {
            milestone.freelancer.signed = true;
        }
        else if (proposal.client == userId) {
            milestone.client.signed = true;
        }
        else {
            throw {
                code: 403,
                message: "You are not a part of this proposal"
            };
        }


    }
}

function GetMilestone(milestones, milestoneId) {
    return milestones.find((element, index, value) => {
        return element.id == milestoneId;
    });
}

module.exports = new MilestoneService();