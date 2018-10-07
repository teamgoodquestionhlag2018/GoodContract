var userRepository = require('../data/mocks/MockUserRepository');

class ProposalService {
    constructor() {

    }

    GetUsers() {
        var users = userRepository.GetUsers();

        var views = users.map(GetUserView)

        return views;
    }
    GetUserById(id) {
        var user = userRepository.GetUserById(id);

        var view = GetUserView(user);

        return view;
    }
    AddUser(user) {
        userRepository.AddUser(user);
    }
}

function GetUserView(data) {
    let view = JSON.parse(JSON.stringify(data));

    return view;
}

module.exports = new ProposalService();