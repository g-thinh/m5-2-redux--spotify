import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import GlobalStyles from "../GlobalStyles";
import ArtistRoute from "../artistRoute";

const DEFAULT_ARTIST_ID = "1vCWHaC5f2uS3yhpwWbIA6";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/">
          <Redirect to={`/artist/${DEFAULT_ARTIST_ID}`} />
        </Route>
        <Route path="/artist/:id">
          <ArtistRoute />
        </Route>
      </Switch>
      <GlobalStyles />
    </Router>
  );
};

export default App;
