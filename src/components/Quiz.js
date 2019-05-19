import React from "react";
import styled from "styled-components/macro";

function Quiz(props) {
  const QuizContainer = styled.div`
    padding: 2rem 2rem;
    background: #8559da;
    height: 100%;

    @media (max-width: 700px) {
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

  return (
    <>
      <QuizContainer>
        <Title>Let's learn!</Title>
        <Button onClick={props.handleClick}>Start Quiz</Button>
      </QuizContainer>
    </>
  );
}

export default Quiz;
