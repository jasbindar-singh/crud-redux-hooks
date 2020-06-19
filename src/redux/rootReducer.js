import dataReducer from './data/data.reducer'
import themeReducer from './theme/theme.reducer'
import { combineReducers } from 'redux'

export default combineReducers({
    data: dataReducer,
    theme: themeReducer
})