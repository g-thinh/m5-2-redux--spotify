import React from "react";
import styled from "styled-components";
import COLORS from "../COLORS";
import { humanizeNumber } from "../utils";
import Tags from "./Tags";

const Header = (props) => {
  return (
    <Wrapper>
      <ProfileName>{props.name}</ProfileName>
      <ProfilePicture src={props.picture} alt={props.name} />
      <ProfileFollows>
        {humanizeNumber(props.followers)} <span> followers</span>
      </ProfileFollows>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 8vh 0;
`;

const ProfileName = styled.h1`
  position: absolute;
  top: 250px;
  z-index: 5;
  color: ${COLORS.White};
  font-size: 5rem;
  text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.75), 0px 4px 4px rgba(0, 0, 0, 0.5),
    4px 8px 25px #000000;
`;

const ProfilePicture = styled.img`
  position: relative;
  z-index: 0;
  border-radius: 100%;
  width: 300px;
`;

const ProfileFollows = styled.p`
  margin-top: 4vh;
  font-size: 1.2rem;
  color: ${COLORS.Primary};

  & span {
    color: ${COLORS.White};
  }
`;

export default Header;
