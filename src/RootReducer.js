import { combineReducers } from 'redux'
import cakeReducer from './Reducers/cake.reducer'
import testReducer from './Reducers/test.reducer'
import userReducer from './Reducers/user.reducer'

const rootReducer = combineReducers({cake:cakeReducer, user:userReducer, test:testReducer})

export default rootReducer;
