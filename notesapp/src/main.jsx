import React from "react";
import ReactDOM from "react-dom/client";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import AuthenticatorWrapper from "./AuthenticatorWrapper";
import App from "./App";
import "./index.css";

Amplify.configure(outputs);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <AuthenticatorWrapper>
      <App />
    </AuthenticatorWrapper>
  </React.StrictMode>
);
