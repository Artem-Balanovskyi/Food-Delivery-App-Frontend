import {configureStore, combineReducers} from "@reduxjs/toolkit";

import {shopsReducer} from "./reducers/shopsReducer";


const rootReducer = combineReducers({
    shopsPageState: shopsReducer,

})

const store = configureStore({reducer: rootReducer})

// @ts-ignore
window.store = store
export default store