import {combineReducers, createStore} from 'redux';
import {countsReducer, widthReducer} from "./reducers";

export type ReducersType = {
    count: number,
    width: number
}
const reducers = combineReducers<ReducersType>({
    count: countsReducer,
    width: widthReducer
})
export const store = createStore(reducers);
