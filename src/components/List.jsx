import React from 'react'
import { useSelector } from 'react-redux'
import ListItem from './ListItem'

function List() {
    console.log("List Rendered!")

    let data = useSelector(state => state.data);

    return (
        <ul className="list">
            {
                data.length ? (
                    data.map((doc, index) => {
                        return <ListItem key={doc.id} doc={doc} index={index}/>
                    })
                ) : (
                    "Empty!"
                )
            }
        </ul>
    )
}

// function mapStateToprops(state){
//     return {
//         data: state.data
//     }
// }

// function mapDispatchToprops(dispatch){
//     return {
//         deleteTodo: function(id){
//             dispatch(deleteTodo(id))
//         }
//     }
// }

// export default connect(mapStateToprops, mapDispatchToprops)(List)
export default List
