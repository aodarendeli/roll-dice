import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import elements from '../Reducers/elements'
import themeReducer from '../Reducers/themeReducer'
const appReducer = combineReducers({
  elements,
  themeReducer,
})
const rootReducer = (state, action) => {
  if (action.type === 'DATA_TRANSFER') {
    state = undefined
  }
  return appReducer(state, action)
}

const persistConfig = {
  key: 'root',
  storage,
  // blacklist: ['element'],
  whitelist: ['element'],
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk))

export const persistedStore = persistStore(store)
