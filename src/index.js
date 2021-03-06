import React from "react";
import { render } from "react-dom";
import "@babel/polyfill";
import { MaterialUI, ReduxWithMidleware } from "@/HOCs";
import Index from "@/app";

const App = ReduxWithMidleware(MaterialUI(Index));

render(<App />, document.getElementById("app"));
