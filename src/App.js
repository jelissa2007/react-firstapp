import React from 'react';
import './App.css';
import './index.css';

import Button1 from "./components/Button1";

export default function App() {
  return (
    <div className="App">
      <h1>Jelissa Whatley Bio </h1>
      <h2>Career Objective</h2>
      <p>
        Proven ability to leverage full-stack knowledge and experience to build
        interactive and user centered websites and application designs to scale.
        Extensive expertise in large system architecture development and
        administration, as well as network design and configuration.{" "}
      </p>
      <Button1 />

      <button className="btn2">Resume</button>
    </div>
  );
}
