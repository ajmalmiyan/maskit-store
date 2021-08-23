import React from "react";
import { Router } from "./Routes/Router";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { Navbar } from "./Components/Navigation/Navbar";
import { useHistory } from "react-router";

const theme = {
  light: {
    backgroundColor: "#fff",
    fontColor: "#173e43",
    btnBackground: "#3fb0ac",
  },
  dark: {
    backgroundColor: "#000",
    fontColor: "#fff",
    btnBackground: "#242525",
  },
};

function App() {
  // eslint-disable-next-line 
  const [activeTheme, setActiveTheme] = React.useState("light");
  const history = useHistory();

  history.listen((location, action) => {
    window.scrollTo(0, 0);
  });

  return (
    <ThemeProvider theme={theme[activeTheme]}>
      <Navbar></Navbar>
      <Router></Router>
    </ThemeProvider>
  );
}

export default App;
