import React from "react";
import Welcome from "./Welcome";
import styled from "styled-components/macro";

function MainContainer() {
  const Container = styled.div`
    margin: 4rem 1.5rem;
    display: grid;
    grid-gap: 2rem;
    height: 80vh;
    width: 100vh;
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-row: 25% 25% 25% 25%;
    grid-template-areas:
      "welcome welcome . ."
      "welcome welcome . ."
      ". . . ."
      ". . . .";
  `;

  return (
    <>
      <Container>
        <Welcome />
      </Container>
    </>
  );
}

export default MainContainer;
