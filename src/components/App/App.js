import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import GlobalStyles from "../GlobalStyles";

const App = () => {
  return (
    <Router>
      <h1>Hello World</h1>
      <GlobalStyles />
    </Router>
  );
};

export default App;
