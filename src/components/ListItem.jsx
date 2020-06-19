import React from 'react'
import { deleteData } from '../redux/data/data.action'
import { useDispatch } from 'react-redux'

function ListItem({doc, index}) {

    const dispatch = useDispatch()

    return (
        <li className="list-item">
            <div className="list-content">{`${index + 1}. ${doc.content}`}</div>
            <div className="btn" onClick={() => dispatch(deleteData(doc.id))}>Delete</div>
        </li>
    )
}

export default ListItem
