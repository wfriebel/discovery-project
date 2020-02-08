const { ApolloServer } = require('apollo-server-express');
const EducatorsResolver = require('./educators/educators-resolver');
const EducatorsSchema = require('./educators/educators-schema');

const apolloServer = new ApolloServer({
  typeDefs: EducatorsSchema,
  resolvers: EducatorsResolver,
});

module.exports = apolloServer;