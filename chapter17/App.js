import logo from './logo.svg';
import Test from './Test.js';
import './App.css';
import axios from 'axios';
import React from 'react';


class App extends React.Component{
  constructor(props){
    super(props);
  }

  state={
    arr:[]
  };

  getMyData=async()=>{
    let retData = await axios.get("https://www.everdevel.com/ReactJS/output-axios-data/jsonKey/");
    retData = retData.data.myDeviceData;
    this.setState({arr:retData});
  }

  componentDidMount(){
    this.getMyData();
  }

  render(){
    return(
      this.state.arr.map((myMapData)=>{
        return( 
          <Test key={myMapData.key} name={myMapData.name} ram={myMapData.RAM} />
        );
      })
    );
  }
}

export default App;
