import './App.css';
import React, { useState } from 'react';
import { Router } from '@reach/router';
import Home from './views/Home';
import Contact from './views/Contact';
import Resume from './views/Resume';

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  return (
    <div className="App">
      <Router>

        <Home path="/" width={width} setWidth={setWidth}/>
        <Home path="/home" width={width} setWidth={setWidth}/>
        <Contact path="/contact" width={width} setWidth={setWidth}/>
        <Resume path="/resume" width={width} setWidth={setWidth}/>

      </Router>
    </div>
  );
}

export default App;
