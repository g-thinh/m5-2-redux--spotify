import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  requestArtistProfile,
  receiveArtistProfile,
  requestArtistProfileError,
} from "../../actions";
import { fetchArtistProfile } from "../../helpers/api-helpers";

import Header from "./Header";
import Tags from "./Tags";
import COLORS from "../COLORS";
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
    try {
      dispatch(requestArtistProfile());
      fetchArtistProfile(accessToken, id).then((json) =>
        dispatch(receiveArtistProfile(json))
      );
    } catch (error) {
      console.log(error);
      dispatch(requestArtistProfileError());
    }
  }, [accessToken, id]);

  //the status and the profile must be updated before the main render
  if (artistStatus === "loading" || !artist) {
    return (
      <LoadingWrapper>
        <CircularProgress size={100} />
      </LoadingWrapper>
    );
  }

  return (
    <Wrapper>
      <Header
        picture={artist.profile.images[0].url}
        name={artist.profile.name}
        followers={artist.profile.followers.total}
      />
      <Tags genres={artist.profile.genres} />
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
  background-color: ${COLORS.Charcoal};
  overflow: hidden;
`;

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 0 5vw;
  position: relative;
  background-color: ${COLORS.Charcoal};
`;
export default ArtistRoute;
