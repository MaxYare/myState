import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tabs from "./components/Tabs";
import Intro from './components/Intro';

class App extends React.Component {
  render() {

    return (
      <BrowserRouter>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <Tabs />
          <Intro />
        </div>

      </BrowserRouter>
    );
  }
}

export default () => (

  <App />

)

