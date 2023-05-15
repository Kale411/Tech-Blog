const { User } = require('../models');

const userData = [{
        username: 'Kale',
        password: 'KalePassword'

    },
    {
        username: 'Exmaple',
        password: 'ExamplePassword'
    },
    {
        username: 'Placeholder',
        password: 'PlaceholderPassword'
    }
];
const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;