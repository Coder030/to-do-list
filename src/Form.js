import { React, useState,useEffect,useRef } from "react"

function TodoForm(props) {

    const [input, setInput] = useState(props.edit ? props.edit.value:'');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleSubmit = (e) =>{
        e.preventDefault()

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })

        setInput('')
    }

    return ( 
        <div className="home">
            <form className="todo-form" onSubmit={handleSubmit}>
                {props.edit ? (
                    <>
                    <input 
                    type="text"
                    name="text" 
                    autoComplete="off"
                    className="todo-input"
                    placeholder="Update your item"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    ref={inputRef}
                />
                <button
                className="todo-button"
                >Update</button>
                    </>
                ) :
                (
                    <>
                    <input 
                    type="text"
                    name="text" 
                    autoComplete="off"
                    className="todo-input"
                    placeholder="Type the task here."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    ref={inputRef}
                />
                <button
                className="todo-button"
                >Add Task</button>
                    </>
                )}
                

            </form>
        </div>
     );
}
 
export default TodoForm;
