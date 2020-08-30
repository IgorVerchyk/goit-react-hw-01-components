import React from "react";
import styled from "styled-components";
import user from "./user.json";
import SocProfile from "./social-profile";

const MainContainer = styled.div`
  display: flex;
  background-color: #e7ecf2;
`;

export default function App() {
  return (
    <MainContainer>
      <SocProfile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
    </MainContainer>
  );
}
