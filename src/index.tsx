import React from "react";
import ReactDOM from "react-dom";
import {} from "styled-components/cssprop";
import App from "./components/app";
import GlobalStyles from "./globalStyles";

ReactDOM.render(
    <>
        <GlobalStyles />
        <App />
    </>,
    document.querySelector("#root")
);
