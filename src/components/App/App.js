import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { useDispatch } from "react-redux";

import GlobalStyles from "../GlobalStyles";
import ArtistRoute from "../ArtistRoute";
import {
  receiveAccessToken,
  requestAccessToken,
  receiveAccessTokenError,
} from "../../actions";

const DEFAULT_ARTIST_ID = "1vCWHaC5f2uS3yhpwWbIA6";

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    console.log("[App.js] has mounted...");
    dispatch(requestAccessToken());
    const url = "/spotify_access_token";
    try {
      fetch(url)
        .then((res) => res.json())
        .then((json) => {
          dispatch(receiveAccessToken(json.access_token));
        });
    } catch (error) {
      console.log(error);
      dispatch(receiveAccessTokenError());
    }
  }, []);

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
