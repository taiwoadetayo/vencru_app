import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Settings from './views/Settings';

function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<Settings />} />
          

          {/* definate path & universal path */}
          {/* <Route path='/settings' element={<Settings />} /> */}          
          {/* <Route path="*" element={<Settings />} /> */}
      </Routes>
  </Router>
  );
}

export default App;

// Adetayo Taiwo Vencru Assessment test 
// <3 & :) </>

// build procedure......
// install react with ts temlate
// open UX design - 
// import font from google.
// use icon svg from fontAwsome