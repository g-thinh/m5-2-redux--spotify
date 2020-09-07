import React from "react";
import styled from "styled-components";
import COLORS from "../COLORS";

const Tags = (props) => {
  return (
    <Wrapper>
      <TagTitle>tags</TagTitle>
      <TagList>
        {props.genres.map((genre) => {
          return <TagItem>{genre}</TagItem>;
        })}
      </TagList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
`;

const TagList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`;

const TagItem = styled.li`
  padding: 10px 20px;
  margin: 5px 10px;
  border-radius: 12px;
  /* border: 1px solid red; */
  color: ${COLORS.White};
  background-color: ${COLORS.GrayFade};
  font-size: 1.2rem;
`;

const TagTitle = styled.h1`
  margin: 4vh 0;
  font-size: 2.5rem;
  color: ${COLORS.White};
`;

export default Tags;
