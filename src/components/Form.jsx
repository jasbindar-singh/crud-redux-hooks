import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../redux/data/data.action'

function Form(props) {
    console.log("Form Rendered!")
    const inputRef = useRef(null)

    function handleSubmit(event){
        event.preventDefault();
        props.addTodo(inputRef.current.value)
        inputRef.current.value = ''
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <input className="todo-input" ref={inputRef} type="text" placeholder="Add a todo..." required/>
            <input type="submit" value="Add" />
        </form>
    )
}

function mapStateToDispatch(dispatch){
    return {
        addTodo: function(todo){
            dispatch(addTodo(todo))
        }
    }
}

export default connect(null, mapStateToDispatch)(Form)
