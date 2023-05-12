const { Post } = require('../models');

const postData = [{
        title: 'ABC',
        content: 'DEF',
        user_id: 1
    },
    {
        title: 'GHI',
        content: 'JKL',
        user_id: 2
    },
    {
        title: 'MNO',
        content: 'PRS',
        user_id: 3
    }
];
const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;