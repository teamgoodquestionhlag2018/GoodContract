var userRepository = require('../data/mocks/MockUserRepository');
var uuid = require('uuid/v4');

class ProposalService {
    constructor() {

    }

    GetUserById(id) {
        var data = userRepository.GetUserById(id);

        console.log(data);

        return GetUserView(data);
    }
    Register(user) {
        userRepository.AddUser(user);
        return user.id;
    }
    Login(id) {
        if (id == null) {
            throw {
                code: 401,
                message: "Invalid id"
            };
        }

        var data = userRepository.GetUserById(id);

        if (data === undefined) {
            throw {
                code: 401,
                message: "Invalid id"
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