import React, { useState } from "react";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import Quiz from "./components/Quiz";
import styled from "styled-components/macro";

function App() {
  const [isQuiz, setIsQuiz] = useState(true);
  const AppContainer = styled.div`
    background: #f5f5f5;
    overflow: hidden;
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
