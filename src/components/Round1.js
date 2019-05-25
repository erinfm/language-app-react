import React, { useState } from "react";
import styled from "styled-components/macro";

function Round1() {
  return (
    <>
      <Title>Basic Colours</Title>
      <Subtitle>Take a look at the colours below.</Subtitle>
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
      <ContBtn onClick={() => setQuizState("round2")}>Continue →</ContBtn>
    </>
  );
}

export default Round1;
