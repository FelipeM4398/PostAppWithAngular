const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const app = express();
const server = new ApolloServer({ typeDefs, resolvers});

app.use('*', cors());
app.listen({ port: 4000 }, () => {
    console.log('Servidor activo');
});

server.applyMiddleware({app});