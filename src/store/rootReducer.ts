import {combineReducers} from "redux";

import productReducer from "./products/ProductsReducer.ts";


const rootReducer = combineReducers({productReducer})
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer