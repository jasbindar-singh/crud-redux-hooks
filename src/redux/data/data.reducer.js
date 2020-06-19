import { types } from './data.types'
import { v1 as uuidv1 } from 'uuid'

let initialState = []

export default function dataReducer(state = initialState, action){
    switch(action.type){
        case types.ADD_DATA:
            state.push({
                id: uuidv1(),
                content: action.payload
            })
            return [...state];
        case types.DELETE_DATA:
            return state.filter(data => data.id !== action.payload)
        default:
            return state;
    }
}