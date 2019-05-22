import React, { useState } from "react";
import styled from "styled-components/macro";

function Quiz() {
  const QuizContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem 10rem;
    background: #f5f5f5;
    height: calc(100vh - 3.5rem);

    @media (max-width: 700px) {
      padding: 2rem 2rem;
    }
  `;

  const Title = styled.h1`
    top: 20vh;
    font-size: 2rem;
    font-weight: 600;
    color: #555;
    margin-bottom: 2rem;
  `;

  const Subtitle = styled(Title)`
    color: #444;
    font-size: 1.25rem;
    line-height: 2rem;
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

    // // Margin keeps elements vertically centered on mobile devices
    // @media (max-width: 700px) {
    //   margin-bottom: 3.5rem;
    // }
  `;

  const TopicList = styled.div`
    color: #444;
    font-size: 1.25rem;
    line-height: 2rem;
    list-style-position: inside;
    padding: 2rem 0;
    margin-bottom: 2rem;
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
  `;
  const Option = styled(Question)`
    position: static;
    background: lightblue;
  `;

  const VocabBlock = styled.div`
    display: flex;
    font-size: 2rem;

    @media (max-width: 700px) {
      flex-direction: column;
      font-size: 1.5rem;
    }
  `;

  const Vocab = styled.p`
    padding-right: 10rem;

    @media (max-width: 700px) {
      padding: 1.5rem 0;
    }
  `;

  // MarginBlock component keeps elements correcly vertically centered on mobile devices
  const MarginBlock = styled.div`
    @media (max-width: 700px) {
      margin-bottom: 3.5rem;
    }
  `;

  const [quizState, setQuizState] = useState("round1");

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
          <Subtitle>Here are some colours!</Subtitle>
          <VocabBlock>
            <Vocab>Rojo</Vocab>
            <Vocab>Azul</Vocab>
            <Vocab>Verde</Vocab>
          </VocabBlock>
          <MarginBlock />
        </QuizContainer>
      </>
    );
  }

  if (quizState === "round3") {
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
          <MarginBlock />
        </QuizContainer>
      </>
    );
  }
}

export default Quiz;
