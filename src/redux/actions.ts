import ActionType from "../models/ActionType";

export const SET_COUNT = 'set-count';
export const SET_WIDTH = 'set-width';
export const countsAction = function (payload: number): ActionType {
    return {payload,type: SET_COUNT};
}
export const widthAction = function (payload: number): ActionType {
    return {payload, type: SET_WIDTH}
}
