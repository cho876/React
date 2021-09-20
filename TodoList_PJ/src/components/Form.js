import React from 'react';
import './Form.css';

/*
    value : input 내용
    onChange: input 내용이 변경될 때, func
    onCreate: 버튼이 클릭될 때, func
    onKeyPress: input 태그에서 키를 입력할 때, 실행되는 함수
*/
const Form = ({value, onChange, onCreate, onKeyPress})=>{
    return(
        <div className='form'>
            <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
            <div className='create-button' onClick={onCreate}>
            추가
            </div>
        </div>
    );
};

export default Form;