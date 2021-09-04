import logo from './logo.svg';
import Test from './Test.js';
import './App.css';
import { Fragment } from 'react';

function App() {
  return (
    <div>
      App Component
      <Test myData="myData1"/>
      <Test myData="myData2"/>
    </div>
  );
}

export default App;
