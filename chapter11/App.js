import logo from './logo.svg';
import Test from './Test.js';
import './App.css';
import axios from 'axios';
import React, { useEffect } from 'react';


class App extends React.Component {
  constructor(props){
    super(props);
    console.log("in constructore");
  }

  getJSONData =async()=>{
    console.log("in componentDidMount");
    const data = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(JSON.stringify(data));
  }

  componentDidMount(){
    this.getJSONData();
  }

  componentWillUnmount(){
    console.log("componentWillUnmount");
  }

  componentDidUpdate(){
    console.log("componentUpdate");
  }

  render(){
    return <div>It's App Component</div>;
  }
}

export default App;
