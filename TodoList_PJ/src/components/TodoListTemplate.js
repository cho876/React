import React from 'react';
import './TodoListTemplate.css';

const TodoListTemplate = ({form, pallette, children})=>{
    return(
        <main className='todo-list-template'>
            <div className='title'>
                To Do List
            </div>
            <section className='form-wrapper'>
            {form}
            </section>
            <section>
            {pallette}
            </section>
            <section className='todos-wrapper'>
            {children}
            </section>
        </main>
    );
};

export default TodoListTemplate;