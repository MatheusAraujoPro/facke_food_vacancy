import React from "react";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
function App() {
  return (
    <>
      <Header />
      <MainContent />
      <GlobalStyle />
    </>
  );
}

export default App;
