const uuid = require('uuid/v4')

class MockProposalRepository {
    constructor() {
        this.proposals = [{
            id: uuid(),
            title: 'Logo Design Contract',
            summary: '=)',
            freelancer: 'bf6bd829-2dff-44c9-802d-80b85dabc0c1',
            client: '9c098922-3e2c-4f08-8492-40284c26704b',
            milestones: [{          
                id: uuid(),
                status: 'active',
                price: 3277,
                requirement: 'Sketch logos',
                creationDate: new Date(),
                deadline: new Date(2018, 10, 10),
                isExtended: false,
                freelancer: {
                    signed: false,
                },
                client: {
                    signed: false,
                }
            }],
            creationDate: new Date(),
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
        proposal.creationDate = new Date(),
        proposal.signed = false,
        this.proposals.push(proposal);
    }
    UpdateProposal(proposal) {
        var data = GetProposalById(proposal.id, this.proposals);
        data = proposal;
    }
}

function GetProposalById(id, proposals) {
    return proposals.find((element, index) => {
        return element.id == id;
    });
}

module.exports = new MockProposalRepository();