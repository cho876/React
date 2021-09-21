import React from 'react';
import TodoItem from './TodoItem';


class TodoItemList extends React.Component{

    // 컴포넌트에 대한 렌더링을 다시 할지 판단하는 내장함수
    shouldComponentUpdate(nextProps, nextState){
        return this.props.todos != nextProps.todos;
    }

    render(){
        const{todos, onToggle, onRemove} = this.props;
        const todoList = todos.map(
            (todo)=> (
                <TodoItem 
                    {...todo}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={todo.id}
                />
            )
        );

        return(
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoItemList;