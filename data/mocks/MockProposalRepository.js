const uuid = require('uuid/v4')

class MockProposalRepository {
    constructor() {
        this.proposals = [{
            id: uuid(),
            title: 'Logo Design Contract',
            freelancer: {
                id: uuid(),
                name: 'Donald Duck',
                wallet: '0x123',
                street: 'Webfoot Street 1313',
                city: 'Duckburg',
                country: 'Disneyland'
            },
            client: {
                id: uuid(),
                name: 'Clark Kent',
                wallet: '0x456',
                street: 'Clinton Street 344',
                city: 'Metropolis',
                country: 'United States of America'
            },
            milestone: 
            {          
                id: uuid(),
                status: 'active',
                price: 3277,
                requirement: 'Sketch logos',
                creationDate: new Date(),
                deadline: new Date(2018, 10, 10),
                isExtended: false,
            },
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