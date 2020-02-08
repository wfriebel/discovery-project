const express = require('express');
const app = express();
const GraphQLSchema = require('./graphql');
const apolloServer = require('./graphql');

app.use(express.static('../client/public/src'));

apolloServer.applyMiddleware({ app, path: '/graphql' });

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req, res) => {
    res.send(path.join(__dirname, 'client/build/index.html'));
  });
}

module.exports = app;