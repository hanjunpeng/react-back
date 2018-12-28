import rootReducer from '../reducers/rootReducer' // 引入总的rootReducer
import { createStore,applyMiddleware } from 'redux' // 引入redux 包含中间件
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store





