class MockProposalRepository {
    constructor() {
        this.proposals = [{
            freelancer: '0x123',
            client: '0x456',
            milestones: [
            {
                prize: 123,
                requirements: '',
                deadline: JSON.stringify(Date.now())
            }
            ],
            creationDate: JSON.stringify(Date.now()),
            signed: false
        },
        {
            freelancer: '0x123',
            client: '0x456',
            milestones: [
            {
                prize: 123,
                requirements: '',
                deadline: JSON.stringify(Date.now())
            }
            ],
            creationDate: JSON.stringify(Date.now()),
            signed: false
        }
        ];
    }

    GetProposals() {
        return this.proposals;
    }
    /**
     * @param {number} id
     */
    GetProposalById(id) {
        return this.proposals[(id - 1)];
    }
    AddProposal(proposal) {
        this.proposals.push(proposal);
    }
    SignProposal(id) {
        this.proposals[id].signed = true;
    }
}

module.exports = MockProposalRepository;