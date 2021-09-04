import logo from './logo.svg';
import Test from './Test.js';
import React, {Component} from 'react';
import './App.css';
import { Fragment } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    console.log("in Constructor");
  }

  componentDidMount(){
    console.log("in componentDidMount");
  }

  componentDidUpdate(){
    console.log("in componentDidUpdate");
  }

  componentWillUnmount(){
    console.log("in componentWillUnmount");
  }

  render(){
    console.log("in Render")
    return <div>App Component Renderedd</div>;
  }
}

export default App;
