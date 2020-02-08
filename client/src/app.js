import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import LandingPage from "./views/landing-page";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient();
const engine = new Styletron();

const App = () => {
  return (
    <ApolloProvider client={client}>
      <StyletronProvider value={engine}>
        <Router>
          <Route exact path="/" component={LandingPage} />
        </Router>
      </StyletronProvider>
    </ApolloProvider>
  );
};

export default App;
