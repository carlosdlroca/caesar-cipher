import React, { useReducer } from "react";
import Input from "./Input";
import Shift from "./Shift";
import { encrypt } from "./utils/encrypt";

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

export default () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChange = (event, type) => {
        const { value } = event.target;
        dispatch({ type, value });
    };

    return (
        <section className='Cipher'>
            <Input
                value={state.text}
                placeholder={"Enter your text"}
                onChange={e => {
                    handleChange(e, "UPDATE_TEXT");
                }}
            />
            <Shift
                onChange={e => {
                    handleChange(e, "UPDATE_SHIFT");
                }}
            />
            <h3 className='EncryptedText'>
                <span class='EncryptedLabel'>Encrypted:</span> <br />
                {state.encryptedText}
            </h3>
        </section>
    );
};
