import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reduсer } from './redusers/loading-reduсer'

export const store = createStore(reduсer, applyMiddleware(thunk))
