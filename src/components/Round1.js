import React, { useState } from "react";
import styled from "styled-components/macro";

const VocabContainer = styled.div`
  display: flex;
  width: 600px;
  justify-content: space-between;

  @media (max-width: 700px) {
    flex-direction: column;
    width: 100%;
    // max-height: 100px;
  }
`;

const VocabBlock = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 700px) {
    flex-direction: row;
  }
`;

const VocabImage = styled.div`
  height: 8rem;
  width: 8rem;
  border: 3px solid #aaa;
  margin-top: 1rem;

  @media (max-width: 700px) {
    height: 4rem;
    width: 4rem;
  }
`;

const Vocab = styled.p`
  font-size: 2rem;
  align-self: center;
  padding: 1rem;

  @media (max-width: 700px) {
    font-size: 1.5rem;
    margin: 1rem 0;
  }
`;

function Round1() {
  return (
    <>
      <VocabContainer>
        <VocabBlock>
          <VocabImage style={{ backgroundColor: "Red" }} />
          <Vocab>Rojo</Vocab>
        </VocabBlock>
        <VocabBlock>
          <VocabImage style={{ backgroundColor: "DodgerBlue" }} />
          <Vocab>Azul</Vocab>
        </VocabBlock>
        <VocabBlock>
          <VocabImage style={{ backgroundColor: "LimeGreen" }} />
          <Vocab>Verde</Vocab>
        </VocabBlock>
      </VocabContainer>
    </>
  );
}

export default Round1;
