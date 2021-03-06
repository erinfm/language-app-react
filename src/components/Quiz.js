import React, { useState } from "react";
import Round1 from "./Round1";
import Round2 from "./Round2";
import styled from "styled-components/macro";

function Quiz() {
  const QuizContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem 12rem;
    background: #f5f5f5;
    height: calc(100vh - 3.5rem);

    @media (max-width: 700px) {
      height: calc(100vh - 3rem);
      padding: 2rem 2rem;
      justify-content: space-between;
    }
  `;
  const ContBtn = styled.span`
    color: #651fff;
    font-size: 1.25rem;
    font-weight: 600;
    margin: 2rem 2rem 0 2rem;
    text-align: right;
    cursor: pointer;
    transition: color 0.5s ease;

    &:hover {
      color: #5a1be5;
    }

    @media (max-width: 700px) {
      font-size: 1rem;
      margin: 0.5rem 2rem 0 2rem;
    }
  `;

  const Title = styled.h1`
    font-size: 2rem;
    font-weight: 600;
    color: #555;
    margin-bottom: 2rem;

    @media (max-width: 700px) {
      font-size: 1.5rem;

      margin-bottom: 1rem;
    }
  `;

  const Subtitle = styled(Title)`
    color: #444;
    font-size: 1.25rem;
    line-height: 2rem;
    font-weight: 400;

    @media (max-width: 700px) {
      font-size: 1rem;
    }
  `;

  const Button = styled.button`
    background: #651fff;
    border: 1.5px solid #fff;
    border-radius: 6px;
    color: #fff;
    cursor: pointer;
    font-size: 1.25rem;
    padding: 1rem 1.75rem;
    transition: background 0.5s ease;
    max-width: 200px;

    &:hover {
      background: #5c1cea;
    }
  `;

  const TopicList = styled.div`
    color: #444;
    font-size: 1.25rem;
    line-height: 2rem;
    list-style-position: inside;
    padding: 2rem 0;
    margin-bottom: 2rem;
  `;

  // MarginBlock component keeps elements correcly vertically centered on mobile devices
  const MarginBlock = styled.div`
    @media (max-width: 700px) {
      margin-bottom: 3.5rem;
    }
  `;

  const [quizState, setQuizState] = useState("round2");

  if (quizState === "initial") {
    return (
      <>
        <QuizContainer>
          <Title>Let's learn!</Title>
          <TopicList>
            In Level 1 you will learn:
            <ul>
              <li>Colours</li>
              <li>Animals</li>
            </ul>
          </TopicList>
          <Button onClick={() => setQuizState("round1")}>Start Quiz</Button>
          <MarginBlock />
        </QuizContainer>
      </>
    );
  }

  if (quizState === "round1") {
    return (
      <>
        <QuizContainer>
          <Title>Basic Colours</Title>
          <Subtitle>Take a look at the colours below.</Subtitle>
          <Round1 />
          <ContBtn onClick={() => setQuizState("round2")}>Continue →</ContBtn>
          <MarginBlock />
        </QuizContainer>
      </>
    );
  }

  if (quizState === "round2") {
    return (
      <>
        <QuizContainer>
          <Title>Let's learn!</Title>
          <Round2 />
          <ContBtn onClick={() => setQuizState("round3")}>Continue →</ContBtn>
          <MarginBlock />
        </QuizContainer>
      </>
    );
  }

  if (quizState === "round3") {
    return (
      <>
        {/* <QuizContainer>
          <Title>Let's learn!</Title>
          <Question>Question</Question>
          <OptionBlock>
            <Option>Answer</Option>
            <Option>Answer</Option>
            <Option>Answer</Option>
          </OptionBlock>
          <MarginBlock />
        </QuizContainer> */}
      </>
    );
  }
}

export default Quiz;
