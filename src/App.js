import { ThemeProvider } from "@material-ui/styles";
import { SnackbarProvider } from "notistack";
import { MainColor } from "./components/Utils/MainColor";
import React from "react";
import { Home } from "./views/Home";
import "./App.css";

export const App = () => {
  
  return (
    <SnackbarProvider>
      <ThemeProvider theme={MainColor}>
        <Home />
      </ThemeProvider>
    </SnackbarProvider>
  );
};
