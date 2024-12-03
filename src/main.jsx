import React from "react";
import ReactDOM from "react-dom/client";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Router and Routes
import AuthenticatorWrapper from "./AuthenticatorWrapper";
import GymAccess from "./GymAccess";
import HealthConcerns from "./HealthConcerns"; 
import BuildRoutine from "./BuildRoutine"; 
import ReviewRoutine from './ReviewRoutine';
import LoadingScreen from './LoadingScreen';  
import Routines from './Routines'; 
import Progress from './Progress';  
import Community from './Community';  
import Profile from './Profile';   
import "./index.css";

Amplify.configure(outputs);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Router> {/* Wrap with Router to handle routing */}
      <AuthenticatorWrapper>
        <Routes>
          {/* Define your routes */}
          <Route path="/" element={<GymAccess />} /> 
          <Route path="/HealthConcerns" element={<HealthConcerns />} /> 
          <Route path="/BuildRoutine" element={<BuildRoutine />} /> 
          <Route path="/ReviewRoutine" element={<ReviewRoutine />} /> 
          <Route path="/LoadingScreen" element={<LoadingScreen />} />
          <Route path="/Routines" element={<Routines />} /> 
          <Route path="/Progress" element={<Progress />} />  
          <Route path="/Community" element={<Community />} />  
          <Route path="/Profile" element={<Profile />} /> 
        </Routes>
      </AuthenticatorWrapper>
    </Router>
  </React.StrictMode>
);
