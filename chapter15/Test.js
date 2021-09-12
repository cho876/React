import axios from 'axios';
import React from 'react';

class Test extends React.Component{
    state={
        arr:[]
    }

    getMyData=async()=>{
        let {
            data:{myDeviceData}
        } = await axios.get("https://www.everdevel.com/ReactJS/output-axios-data/jsonKey/");
        // retData = retData.data.myDeviceData;
        console.log(JSON.stringify(myDeviceData));
        this.setState({arr:myDeviceData})
    }

    componentDidMount(){
        console.log("in componentDidMount");
        this.getMyData();
    }

    render(){
        console.log(JSON.stringify(this.state.arr));
        return(
            <div>
                {
                    this.state.arr.map((myMapData)=>{
                        return <p key={myMapData.key}>name: {myMapData.name}</p>
                    })
                }
            </div>
        );
    }
}

export default Test;