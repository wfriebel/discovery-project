import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import LandingPage from "./views/landing-page";

const engine = new Styletron();

const App = () => {
  return (
    <StyletronProvider value={engine}>
      <Router>
        <Route exact path="/" component={LandingPage} />
      </Router>
    </StyletronProvider>
  );
};

export default App;
