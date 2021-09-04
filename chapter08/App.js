import logo from './logo.svg';
import Test from './Test.js';
import './App.css';
import { Fragment } from 'react';

function App() {
  return (
    <div>
      App Component
      <Test myParam="First animal" animal="dog"/>
      <Test myParam="Secon animal" animal="cat"/>
    </div>
  );
}

export default App;
