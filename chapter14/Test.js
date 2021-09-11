import axios from 'axios';
import React from 'react';

class Test extends React.Component{
    state={
        arr:[]
    }

    getMyData=async()=>{
        let retData = await axios.get("https://jsonplaceholder.typicode.com/users");
        retData = retData.data;
        console.log(JSON.stringify(retData));
        this.setState({arr:retData});
    }

    componentDidMount(){
        console.log("in componentDidMount");
        this.getMyData();
    }

    render(){
        return(
            <div>
                {
                    this.state.arr.map((myMap)=>{
                        return <p key={myMap.id}>name: {myMap.name}</p>;
                    })
                }
            </div>
        );
    }
}

export default Test;