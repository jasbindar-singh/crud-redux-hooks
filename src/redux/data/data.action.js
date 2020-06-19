import { types } from './data.types'

export function addTodo(data){
    return {
        type: types.ADD_DATA,
        payload: data
    }
}

export function deleteTodo(id){
    return {
        type: types.DELETE_DATA,
        payload: id
    }
}