import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reduser";
import {storeType} from "./state";

const reducers = combineReducers({
    dialogsPage: dialogsReducer
})

export const store: storeType = createStore(reducers)

