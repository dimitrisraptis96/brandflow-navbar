import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import SocialMediaCard from "./SocialMediaCard";
import Header from "./Header";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ThemeProvider>
    <CSSReset />
    <SocialMediaCard />
    <Header />
  </ThemeProvider>,
  rootElement
);
