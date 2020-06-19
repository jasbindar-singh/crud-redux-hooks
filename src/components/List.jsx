import React from 'react'
import { useDispatch, useSelector } from 'react-redux' 
import { deleteTodo } from '../redux/data/data.action'

function List() {
    console.log("List Rendered!")

    let { data } = useSelector();

    return (
        <ul className="list">
            {
                props.data.length ? (
                    props.data.map((data, index) => {
                        return (<li key={data.id} className="list-item">
                            <p>{`${index + 1}. ${data.content}`}</p>
                            <div className="btn" onClick={() => props.deleteTodo(data.id)}>Delete</div>
                        </li>)
                    })
                ) : (
                    "Empty!"
                )
            }
        </ul>
    )
}

function mapStateToprops(state){
    return {
        data: state.data
    }
}

function mapDispatchToprops(dispatch){
    return {
        deleteTodo: function(id){
            dispatch(deleteTodo(id))
        }
    }
}

export default connect(mapStateToprops, mapDispatchToprops)(List)
