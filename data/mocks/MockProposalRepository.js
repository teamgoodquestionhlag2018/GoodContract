const uuid = require('uuid/v4')

class MockProposalRepository {
    constructor() {
        this.proposals = [{
            id: uuid(),
            freelancer: '0x426',
            client: '0x837',
            milestones: 
            {          
                price: 32.6,
                requirements: 'Sketch logos',
                deadline: JSON.stringify(new Date(2018, 10, 10))
            },
            creationDate: JSON.stringify(Date.now()),
            signed: false
        }];
    }

    GetProposals() {
        return this.proposals;
    }
    /**
     * @param {number} id
     */
    GetProposalById(id) {
        return GetProposalById(id, this.proposals);
    }
    AddProposal(proposal) {
        proposal.id = uuid();
        proposal.creationDate = JSON.stringify(Date.now()),
        proposal.signed = false,
        this.proposals.push(proposal);
    }
    SignProposal(id) {
        var proposal = GetProposalById(id, this.proposals);
        proposal.signed = true;
    }
}

function GetProposalById(id, proposals) {
    return proposals.find((element, index) => {
        return element.id == id;
    });
}

module.exports = MockProposalRepository;