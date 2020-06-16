import React from 'react';
import { Cv } from './components/Cv';
import cvData from './cv.data';
import './App.scss';

function App() {
  return (
    <div>
      <Cv data={cvData}/>
    </div>
  );
}

export default App;
