var userRepository = require('../data/mocks/MockUserRepository');
var uuid = require('uuid/v4');

class ProposalService {
    constructor() {

    }

    Register(user) {
        userRepository.AddUser(user);
    }
    Login(id) {
        var data = userRepository.GetUserById(id);

        if (data == null) {
            throw {

            };
        }

        data.token = uuid();
        return data.token;
    }
    ValidateUser(token) {
        var data = userRepository.GetUserByToken(token);

        if (data === undefined) {
            throw {
                code: 401,
                message: "Invalid token"
            };
        }

        return GetUserView(data);
    }
}

function GetUserView(data) {
    let view = JSON.parse(JSON.stringify(data));
    view.token = null;

    return view;
}

module.exports = new ProposalService();