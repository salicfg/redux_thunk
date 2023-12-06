import {AnyAction, applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "@redux-devtools/extension"
import thunk, {ThunkDispatch} from "redux-thunk";

import rootReducer from "./rootReducer.ts";


export type ReduxState = ReturnType<typeof rootReducer>;
export type ThunkDispatchType = ThunkDispatch<ReduxState, unknown, AnyAction>;

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store