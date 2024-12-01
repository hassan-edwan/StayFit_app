import React from "react";
import ReactDOM from "react-dom/client";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Router and Routes
import AuthenticatorWrapper from "./AuthenticatorWrapper";
import App from "./App";
import Screen2 from "./Screen2"; // Import Screen2
import Screen3 from "./Screen3"; // Import Screen3
import Screen4 from './Screen4';
import "./index.css";

Amplify.configure(outputs);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Router> {/* Wrap with Router to handle routing */}
      <AuthenticatorWrapper>
        <Routes>
          {/* Define your routes */}
          <Route path="/" element={<App />} /> {/* Route for the App screen */}
          <Route path="/screen2" element={<Screen2 />} /> {/* Route for Screen2 */}
          <Route path="/screen3" element={<Screen3 />} /> {/* Route for Screen3 */}
          <Route path="/screen4" element={<Screen4 />} /> {/* Route for Screen4 */}
        </Routes>
      </AuthenticatorWrapper>
    </Router>
  </React.StrictMode>
);
