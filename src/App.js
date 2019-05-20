import React, { useState } from "react";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import Quiz from "./components/Quiz";
import styled from "styled-components/macro";

function App() {
  const [isQuiz, setIsQuiz] = useState(true);
  const AppContainer = styled.div`
    background: #f5f5f5;

    @media (max-width: 700px) {
      position: absolute;
      overflow: hidden;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }
  `;

  const handleClick = e => {
    console.log(e.target);
    isQuiz ? setIsQuiz(false) : setIsQuiz(true);
  };

  return (
    <AppContainer>
      <Header />
      {!isQuiz ? (
        <MainContainer handleClick={handleClick} />
      ) : (
        <Quiz handleClick={handleClick} />
      )}
    </AppContainer>
  );
}

export default App;
