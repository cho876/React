import React from 'react';
class Test extends React.Component{
    constructor(props){
        super(props);
        console.log("in constructor");
    }

    componentDidUpdate(){
        console.log("Pags is updated");
    }
    
    state={
        age:0
    };

    plus=()=>{
        console.log("plus called");
        this.setState(stateVal=>({
            age:stateVal.age + 1
            })
        )
    };

    minus=()=>{
        console.log("minus called");
        this.setState(stateVal=>({
            age:stateVal.age - 1
            })
        )
    };

    render(){
        return(
            <div>
                <input type="button" value="plus" onClick={this.plus}></input>
                <input type="button" value="minus" onClick={this.minus}></input>
                <p>My Age is : {this.state.age}</p>
            </div>
        );
    }
}

export default Test;