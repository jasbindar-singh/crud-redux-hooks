import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addData } from '../redux/data/data.action'

function Form() {
    console.log("Form Rendered!")
    const inputRef = useRef(null)

    const dispatch = useDispatch()

    function handleSubmit(event){
        event.preventDefault();
        dispatch(addData(inputRef.current.value))
        inputRef.current.value = ''
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <input className="todo-input" ref={inputRef} type="text" placeholder="Add a todo..." required/>
            <input type="submit" value="Add" />
        </form>
    )
}

// function mapStateToDispatch(dispatch){
//     return {
//         addTodo: function(todo){
//             dispatch(addTodo(todo))
//         }
//     }
// }

// export default connect(null, mapStateToDispatch)(Form)
export default Form
