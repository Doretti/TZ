import { combineReducers } from "redux";
import { favoritesReducer } from "./favoritesReducer";
import { loginReducer } from "./loginReducer";
import { searchReducer } from "./searchReducer";

export const rootReducer = combineReducers({
    login: loginReducer,
    search: searchReducer,
    fav: favoritesReducer
})