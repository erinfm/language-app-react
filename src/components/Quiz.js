import React, { useState } from "react";
import styled from "styled-components/macro";

function Quiz() {
  const QuizContainer = styled.div`
    padding: 2rem 2rem;
    background: #8559da;
    height: calc(100vh - 3.5rem);

    @media (max-width: 700px) {
      height: 100vh;
    }
  `;

  const Title = styled.h1`
    font-size: 2rem;
    font-weight: 400;
    color: #fff;
  `;

  const Button = styled.button`
    background: #651fff;
    border: 1.5px solid #fff;
    border-radius: 6px;
    color: #fff;
    cursor: pointer;
    font-size: 1.25rem;
    padding: 1rem 1.75rem;
    position: absolute;
    bottom: 2rem;
    left: 2rem;
    transition: background 0.5s ease;

    &:hover {
      background: #5c1cea;
    }
  `;

  const Question = styled.span`
    position: absolute;
    top: 50%;
    background: #fff;
    font-size: 1.25rem;
    border-radius: 6px;
    font-weight: 600;
    color: #555;
    cursor: pointer;
    padding: 1rem 1.5rem;
  `;

  const OptionBlock = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    display: flex;
    flex-direction: column;
  `;
  const Option = styled(Question)`
    position: static;
    background: lightblue;
  `;

  const [quizState, setQuizState] = useState("initial");

  if (quizState === "initial") {
    return (
      <>
        <QuizContainer>
          <Title>Let's learn!</Title>
          <Button onClick={() => setQuizState("round1")}>Start Quiz</Button>
        </QuizContainer>
      </>
    );
  }

  if (quizState === "round1") {
    return (
      <>
        <QuizContainer>
          <Title>Let's learn!</Title>
          <Question>Question</Question>
          <OptionBlock>
            <Option>Answer</Option>
            <Option>Answer</Option>
            <Option>Answer</Option>
          </OptionBlock>
        </QuizContainer>
      </>
    );
  }
}

export default Quiz;
