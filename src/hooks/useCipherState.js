import { useReducer } from "react";
import { encrypt } from "../utils/encrypt";

const initialState = {
    text: "",
    shift: 0,
    encryptedText: ""
};

const reducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_TEXT":
            return {
                ...state,
                text: action.value,
                encryptedText: encrypt(action.value, state.shift)
            };
        case "UPDATE_SHIFT":
            const shiftValue = Number(action.value);
            return {
                ...state,
                shift: shiftValue,
                encryptedText: encrypt(state.text, shiftValue)
            };
        default:
            return state;
    }
};

export default () => useReducer(reducer, initialState);
