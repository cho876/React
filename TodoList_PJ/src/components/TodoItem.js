import React from 'react';
import './TodoItem.css';

/*
    text: todo 내용
    checked: 체크박스 상태
    id: todo 고유 아이디
    onToggle: 체크박스를 키고 끄는 함수
    onRemove: 아이템을 삭제하는 함수
*/

class TodoItem extends React.Component{

    shouldComponentUpdate(nextProps, nextStates){
        return this.props.checked !== nextProps.checked;
    }

    render(){
        const{text, checked, color, id, onToggle, onRemove} = this.props;

        return(
            <div className='todo-item' onClick={()=>onToggle(id)}>
                <div className='remove' onClick={(e)=>{
                    e.stopPropagation();    // onToggle 실행 X
                    onRemove(id)}
                }>&times;</div>
                <div className={"todo-text ${checked ? ' checked':''}"} style={{color}}>
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className='check-mark'></div>)
                }
                </div>
        );
    }
}

export default TodoItem;