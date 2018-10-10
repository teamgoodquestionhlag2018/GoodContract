var proposalRepository = require('../data/mocks/MockProposalRepository');
var errors = require('../errors/Errors');

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

        if (proposal == undefined) {
            throw new errors.NotFoundError("This milestone does not exist");
        }

        var milestone = GetMilestone(proposal.milestones, milestoneId);

        if (proposal.freelancer == userId) {
            milestone.freelancer.signed = true;
        }
        else if (proposal.client == userId) {
            milestone.client.signed = true;
        }
        else {
            throw new errors.ForbiddenError("You cannot sign this proposal");
        }
    }
}

function GetMilestone(milestones, milestoneId) {
    return milestones.find((element, index, value) => {
        return element.id == milestoneId;
    });
}

module.exports = new MilestoneService();