const uuid = require('uuid/v4')

class MockUserRepository {
    constructor() {
        this.users = [];

        this.users.push({
            id: 'bf6bd829-2dff-44c9-802d-80b85dabc0c1',
            name: 'Donald Duck',
            wallet: '0x123',
            street: 'Webfoot Street 1313',
            city: 'Duckburg',
            country: 'Disneyland',
        });
        this.users.push({
            id: '9c098922-3e2c-4f08-8492-40284c26704b',
            name: 'Clark Kent',
            wallet: '0x456',
            street: 'Clinton Street 344',
            city: 'Metropolis',
            country: 'United States of America',
        });
    }

    GetUsers() {
        return this.users;
    }
    GetUserById(id) {
        return GetUserById(id, this.users);
    }
    AddUser(user) {
        user.id = GetUniqueId(this.users);
        this.users.push(user);
    }
}

function GetUniqueId(users) {
    while (true) {
        var id = uuid();

        var isUnique = !users.some((element) => {
            return element.id == id;
        });

        if (isUnique) {
            return id;
        }
    }
}

function GetUserById(id, users) {
    var user = users.find((element, index, array) => {
        return element.id == id;
    });

    return user;
}

module.exports = new MockUserRepository();