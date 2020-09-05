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

import CircularProgress from "@material-ui/core/CircularProgress";

const ArtistRoute = () => {
  const accessToken = useSelector((state) => state.auth.token);
  const artist = useSelector((state) => state.artists.currentArtist);
  const artistStatus = useSelector((state) => state.artists.status);
  const { id } = useParams();
  console.log(artist);
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

  //the status and the profile must be updated before the main render
  if (artistStatus === "loading" || !artist) {
    return (
      <LoadingWrapper>
        <CircularProgress size={100} />
      </LoadingWrapper>
    );
  }

  // if (!artist) {
  //   // SOmething's gone wrong!
  //   return "Error";
  // }

  return (
    <Wrapper>
      <h1>Hello {artist.profile.name}</h1>
      <img src={artist.profile.images[0].url} />
    </Wrapper>
  );
};

const LoadingWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
`;
export default ArtistRoute;
