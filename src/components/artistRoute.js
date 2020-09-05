import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import {
  requestArtistProfile,
  receiveArtistProfile,
  requestArtistProfileError,
} from "../actions";
import { fetchArtistProfile } from "../helpers/api-helpers";

const ArtistRoute = () => {
  const accessToken = useSelector((state) => state.auth.token);
  const currentArtist = useSelector((state) => state.artists);
  const { id } = useParams();

  const dispatch = useDispatch();
  // console.log(currentArtist);
  // console.log("Artist's ID and Token is:", id, accessToken);

  React.useEffect(() => {
    if (!accessToken) {
      return;
    }
    dispatch(requestArtistProfile());

    fetchArtistProfile(accessToken, id).then((json) =>
      dispatch(receiveArtistProfile(json))
    );
  }, [accessToken, id]);

  if (currentArtist.status === "loading") {
    return <h1>Loading...</h1>;
  }

  return <h1>This is the artist's access token</h1>;
};

export default ArtistRoute;
