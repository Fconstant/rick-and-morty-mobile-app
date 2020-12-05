import { combineReducers, configureStore, applyMiddleware } from '@reduxjs/toolkit'
import { charactersReducer } from './character.store'

const store = configureStore({
    reducer: combineReducers({ characters: charactersReducer }),
})

export type RootState = ReturnType<typeof store.getState>

export default store