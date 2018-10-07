var proposalRepository = require('../data/mocks/MockProposalRepository');
var userRepository = require('../data/mocks/MockUserRepository');

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

        let proposal = JSON.parse(JSON.stringify(proposalData));

        GetProposalUsers(proposal);
        
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
    proposal.freelancer = userRepository.GetUserById(proposal.freelancer);
    proposal.client = userRepository.GetUserById(proposal.client);

    return proposal;
}

module.exports = new ProposalService();