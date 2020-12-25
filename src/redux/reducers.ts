import ActionType from "../models/ActionType";
import {SET_COUNT, SET_WIDTH} from "./actions";

export const countsReducer = function(count: number = 0, action: ActionType):number {
    return action.type === SET_COUNT ? action.payload : count;
}
export const widthReducer = function(width: number = window.innerWidth,
                                     action: ActionType): number {
    return action.type === SET_WIDTH ? action.payload : width;
}
