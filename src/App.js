import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Screen from './Components/ui/Screen';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Screen />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
