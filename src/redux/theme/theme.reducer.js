import { types } from "./theme.types";

let initialState = 'dark'

export default function themeReducer(state = initialState, action){
    switch(action.type){
        case types.CHANGE_THEME:
            if(state === 'light')
                return 'dark'
            else
                return 'light'
        default:
            return state
    }
}