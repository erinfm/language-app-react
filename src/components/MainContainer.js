import React from "react";
import Welcome from "./Welcome";
import Scores from "./Scores";
import styled from "styled-components/macro";

function MainContainer() {
  const Container = styled.div`
    padding: 4rem 2rem;
    display: grid;
    grid-gap: 2rem;
    height: auto;
    width: 100%;
    grid-template-columns: repeat(6, auto);
    grid-template-row: repeat(4, 1fr);
    grid-template-areas:
      "welcome welcome welcome welcome scores scores "
      "welcome welcome welcome welcome scores scores"
      ". . . . . ."
      ". . . . . .";

    @media (max-width: 700px) {
      padding: 0;
      grid-gap: 0rem;
      height: auto;
      width: 100%;
      grid-template-columns: 1fr;
      grid-template-row: repeat(4, 1fr);
      grid-template-areas:
        "welcome"
        "scores"
        "."
        ".";
    }
  `;

  return (
    <>
      <Container>
        <Welcome />
        <Scores />
      </Container>
    </>
  );
}

export default MainContainer;
