const posts = require('./data.js');

const resolvers = {
    Query: {
        getAllPosts: (root, args, cxt) => {
            return posts;
        },
        getPostByIndex: (root, args, cxt) => {
            return posts[args.index];
        }
    },
    Mutation: {
        createPost: (root, args, cxt) => {
            posts.push({ title: args.title, description: args.description, createdAt: args.createdAt});
            return posts;
        }
    }
};

module.exports = resolvers;