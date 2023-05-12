const { User } = require('../models');

const userData = [{
        username: 'Kisang',
        password: 'Kale'

    },
    {
        username: 'Exmaple',
        password: 'Example'
    },
    {
        username: 'Placeholder',
        password: 'Placeholder'
    }
];
const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;