import { createStore , combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
// import{composeWithDevTools} from 'redux-devtools-extension'
import{produtListReducer} from './reducers/productReducer'
const reducer= combineReducers({

productList : produtListReducer

})
const initital_State={}

const middleware =[thunk]

const store=createStore(reducer,initital_State, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// const store=createStore(reducer,initital_State,composeWithDevTools(applyMiddleware([...middleware])))

export default store