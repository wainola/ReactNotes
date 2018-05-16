import { combineReducers } from 'redux'
import EmpsReducers from './EmpsReducer'

const rootReducer = combineReducers({
    emps: EmpsReducers
})

export default rootReducer