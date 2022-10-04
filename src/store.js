import {combineReducers} from 'redux';

import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {composeWithDevTools} from 'redux-devtools-extension';
import { getAllPizzaReducer } from './reducers/pizzaReducer';
import { cartReducer } from './reducers/cartReducer';
import { registerUserReducer } from './reducers/userReducer';

const allReducers = combineReducers({
  // Add your reducers here
  getAllPizzaReducer : getAllPizzaReducer,
  cartReducer : cartReducer,
  registerUserReducer : registerUserReducer
})
const cartItems = localStorage.getItem('cartItems') ? 
JSON.parse(localStorage.getItem('cartItems')) : []
const initialState = {
  cartReducer:{
    cartItems: cartItems
  }
}

const composedEnhancers = composeWithDevTools({});

const store = createStore(allReducers, initialState, 
  composedEnhancers(applyMiddleware(thunk)));

export default store;



