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

        case types.UPDATE_DATA:
            return state.map(data => {
                if(data.id === action.payload.id)
                    return {id: data.id, content: action.payload.content}
                return data
            })
        default:
            return state;
    }
}