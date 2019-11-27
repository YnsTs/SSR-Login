import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "../shared/App";
import "owl.carousel";
import "bootstrap";
import "bootstrap/js/dist/modal";
import "../assets/js/ssr";

hydrate(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("wrapper")
);
