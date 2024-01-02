import React,{useState} from 'react'
import TodoForm from './TodoForm'
import { IoIosClose } from "react-icons/io";
import { CiEdit } from "react-icons/ci";

function Todo({todos, completeTodo, removeTodo, updateTodo }) {
    const [edit, setEdit] = useState({
        id:null,
        value: ''
    })

    const submitTask = value => {
        updateTodo(edit.id, value)
        setEdit({
            id:null,
            value: ''
        })
 }

 if(edit.id){
    return  <TodoForm edit={edit} onSubmit={submitTask}/>
 }

  return todos.map((todo,index) =>(
    <div 
        className={todo.isComplete ? 'todo-row complete' : 'todo-row'} 
        key={index}
    >
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
        </div>
        <div className='icons'>
            <IoIosClose 
                onClick={() => removeTodo(todo.id)}
                className='delete-icon'
            />
            <CiEdit
                onClick={() => setEdit({id: todo.id, value: todo.text})}
                className='edit-icon'
            />
        </div>
    </div>
  ))
}

export default Todo
