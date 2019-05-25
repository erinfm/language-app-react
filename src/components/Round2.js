import React, { useState } from "react";
import styled from "styled-components/macro";

function Round2() {
  return (
    <>
      <Title>Let's learn!</Title>
      <Question>Question</Question>
      <OptionBlock>
        <Option>Answer</Option>
        <Option>Answer</Option>
        <Option>Answer</Option>
      </OptionBlock>
      <MarginBlock />
      <ContBtn onClick={() => setQuizState("round3")}>Continue →</ContBtn>
    </>
  );
}

export default Round2;
