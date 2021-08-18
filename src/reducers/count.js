import {ADD, SUB} from "../actions/actionType";

const defaultState = 0;
export const count = (state = defaultState, {type, payload}) => {
    switch (type) {
        case ADD:
            return state + payload.n;
        case SUB:
            return state - payload.n;
        default:
            return state;
    }
};
