import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

import LangState from "./context/lang";

ReactDOM.render(
  <LangState>
    <App />
  </LangState>,
  document.getElementById("root")
);
