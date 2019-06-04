import React, { useState } from "react";
import styled from "styled-components/macro";

const DragQuizContainer = styled.div`
  display: flex;
`;

const QuestionBlock = styled.div`
  display: flex;
  width: 200px;
  flex-direction: column;
`;

const Question = styled.span`
  position: static;
  background: #fff;
  font-size: 1.25rem;
  border-radius: 6px;
  font-weight: 600;
  color: #555;
  cursor: pointer;
  padding: 1rem 1.5rem;
  margin-top: 2.5rem;
  text-align: center;
`;

const OptionBlock = styled(QuestionBlock)`
  margin-left: 10rem;
`;

const Option = styled(Question)`
  background: lightblue;
`;

function Round2() {
  return (
    <>
      <DragQuizContainer>
        <QuestionBlock>
          <Question>Question</Question>
          <Question>Question</Question>
          <Question>Question</Question>
        </QuestionBlock>
        <OptionBlock>
          <Option>Answer</Option>
          <Option>Answer</Option>
          <Option>Answer</Option>
        </OptionBlock>
      </DragQuizContainer>
    </>
  );
}

export default Round2;
