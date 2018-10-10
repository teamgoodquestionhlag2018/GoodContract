var proposalRepository = require('../data/mocks/MockProposalRepository');
var userService = require('./UserServices');
var errors = require('../errors/Errors');

class ProposalService {
    constructor() {

    }

    GetProposals() {
        var proposals = proposalRepository.GetProposals();

        var views = proposals.map(GetProposalUsers);

        return views;
    }
    GetProposalById(id) {
        var proposalData = proposalRepository.GetProposalById(id);

        if (proposalData == undefined) {
            throw new errors.NotFoundError("Proposal was not found");
        }

        var proposal = GetProposalUsers(proposalData);
        
        return proposal;
    }
    AddProposal(proposal) {
        proposalRepository.AddProposal(proposal);
    }
    SignProposal(id) {
        var proposalData = proposalRepository.GetProposalById(id);
        proposalData.signed = true;
    }
}

function GetProposalUsers(proposal) {
    let view = JSON.parse(JSON.stringify(proposal));

    view.freelancer = userService.GetUserById(view.freelancer);
    view.client = userService.GetUserById(view.client);

    return view;
}

module.exports = new ProposalService();