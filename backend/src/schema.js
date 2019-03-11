const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        getAllPosts: [Post]
        getPostByIndex(index: Int!): Post
    }
    
    type Mutation {
        createPost( title: String!, description: String, createdAt: String ): [Post]
    }

    type Post {
        title: String
        description: String
        createdAt: String
    }
`;

module.exports = typeDefs;