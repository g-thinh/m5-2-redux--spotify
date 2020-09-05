const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("isomorphic-fetch");

const app = new express();
const port = 5678;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//This endpoint will return to you an access token to send an official request
//to the Spotify API
app.get("/spotify_access_token", async (req, res, next) => {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_SECRET;

  // We need, annoyingly, a base64-encoded string of our id:secret, for spotify.
  // We can use Buffers to do this for us.
  const authString = Buffer.from(clientId + ":" + clientSecret).toString(
    "base64"
  );

  const url = "https://accounts.spotify.com/api/token";
  const options = {
    method: "POST",
    headers: {
      Authorization: `Basic ${authString}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  };

  //the fetch response will be the data we need to send to the front-end to
  //make a resquest to the API, basically our actual credentials have been
  //validated in the BE, and we cans end a temp request via the FE.
  const response = await fetch(url, options);

  const json = await response.json();

  console.log("the info sent to the front-end is:", json);

  return res.send(json);
});

app.listen(port, function (error) {
  if (error) {
    console.error(error);
  } else {
    console.info(`==> 🌎  Listening on port ${port}.`);
  }
});
