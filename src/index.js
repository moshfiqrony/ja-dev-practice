import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
// import ErrorBoundary from "./ErrorBoundary";
// import App from "./ObjectSorting2";
// import App from "./ObjectSorting";
import App from "./App";
// import App from "./ErrorTestApp";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    {/* <ErrorBoundary> */}
    <App />
    {/* </ErrorBoundary> */}
  </React.StrictMode>,
  rootElement
);
