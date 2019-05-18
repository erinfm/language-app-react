import React from "react";
import styled from "styled-components/macro";

function Scores() {
  const ScoresContainer = styled.div`
    padding: 2rem;
    background: #fff;
    border-radius: 6px;
    grid-area: scores;
    position: relative;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);

    @media (max-width: 700px) {
      box-shadow: none;
      border-radius: 0;
    }
  `;

  const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: 600;
    color: #555;
  `;

  const ScoreList = styled.div`
    font-size: 1rem;
    line-height: 2rem;
    padding: 1rem;
    color: #555;
  `;

  return (
    <>
      <ScoresContainer>
        <Title>Highscores</Title>
        <ScoreList>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>{" "}
        </ScoreList>
      </ScoresContainer>
    </>
  );
}

export default Scores;
