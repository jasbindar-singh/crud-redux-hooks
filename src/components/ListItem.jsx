import React, { useState, useRef } from 'react'
import { deleteData, updateData } from '../redux/data/data.action'
import { useDispatch } from 'react-redux'

function ListItem({doc, index}) {

    const dispatch = useDispatch()
    const [isUpdate, setIsUpdate] = useState(false)
    const inputRef = useRef(null)

    function toggle(){
        setIsUpdate(prev => !prev)
    }

    function handleUpdate(doc, e){
        e.preventDefault();
        dispatch(
            updateData(
                {
                    id: doc.id,
                    content: inputRef.current.value
                }
            )
        )
        toggle()
    }

    return (
        <li className="list-item">
            {index + 1}.&nbsp;
            {
                isUpdate ? (
                    <>
                        <form onSubmit={handleUpdate.bind(this, doc)} className="todo-input">
                            <input ref={inputRef} defaultValue={doc.content} type="text" required/>
                            <input type="submit"/>
                        </form>
                        <button onClick={toggle}>Cancel</button>
                    </>
                ) : (
                    <>
                        <div onClick={toggle} className="list-content">{doc.content}</div>
                        <div className="btn" onClick={() => dispatch(deleteData(doc.id))}>Delete</div>
                    </>
                )
            }
        </li>
    )
}

export default ListItem
