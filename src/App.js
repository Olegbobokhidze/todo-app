import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { lightTheme, darkTheme, GlobalStyle } from "./Themes.js";
import ThemeIcon from "./svgs/ThemeIcon.js";
import TodoAndInput from "./components/TodoAndInput.js";
const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 327px;
  margin-top: 50px;
  @media screen and (min-width: 750px) {
    margin-top: 90px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 100px;
    width: 540px;
  }
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TodoText = styled.h1`
  font-size: 30px;
  color: #fff;
  letter-spacing: 10px;
`;

function App() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Container>
        <Header>
          <TodoText>TODO</TodoText>
          <ThemeIcon themeToggler={themeToggler} theme={theme} />
        </Header>
        <TodoAndInput />
      </Container>
    </ThemeProvider>
  );
}

export default App;
