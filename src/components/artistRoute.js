import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const ArtistRoute = () => {
  const accessToken = useSelector((state) => state.auth.token);

  return <h1>This is the artist's access token</h1>;
};

export default ArtistRoute;
