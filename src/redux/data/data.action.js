import { types } from './data.types'

export function addData(data){
    return {
        type: types.ADD_DATA,
        payload: data
    }
}

export function deleteData(id){
    return {
        type: types.DELETE_DATA,
        payload: id
    }
}

export function updateData(dataObj){
    return {
        type: types.UPDATE_DATA,
        payload: {...dataObj}
    }
}