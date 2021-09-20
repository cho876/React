import React from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends React.Component{

  id=3;

  state={
    input:'',
    todos:[
      {id:0,text:' 리액트 소개',checked:false},
      {id:1,text:' 리액트 소개',checked:true},
      {id:2,text:' 리액트 소개',checked:false},
    ]
  };

  // 키패드로 타이핑할 때마다 호출
  handleChange=(e)=>{
    console.log("is handleChanged");
    this.setState({
      input:e.target.value
    });
  }

  // 추가버튼을 누르거나 엔터키를 누를 시, 초기화
  handleCreate=()=>{
    console.log("is handleCreated");
    const {input, todos} = this.state;
    this.setState({
      input:'',
      todos:todos.concat({
        id:this.id++,
        text:input,
        checked:false
      })
    });
  }

  // 엔터키 누를 경우, 이벤트 처리
  handleKeyPress=(e)=>{
    console.log("is handleKeyPressed");
    if(e.key == 'Enter'){
      this.handleCreate();
    }
  }

  render(){
    const {input, todos} = this.state;
    const{
      handleChange,
      handleCreate,
      handleKeyPress
    } = this;

    return(
      <TodoListTemplate form={
        <Form
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
      }>
        <TodoItemList todos={todos}/>
      </TodoListTemplate>
    );
  }
}

export default App;