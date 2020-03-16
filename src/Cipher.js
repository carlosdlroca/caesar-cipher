import React from "react";
import Shift from "./Shift";
import useCipherState from "./hooks/useCipherState";

export default () => {
    const [state, dispatch] = useCipherState();

    const handleChange = (event, type) => {
        const { value } = event.target;
        dispatch({ type, value });
    };

    return (
        <section className='Cipher'>
            <input
                value={state.text}
                placeholder={"Enter your text"}
                onChange={e => {
                    handleChange(e, "UPDATE_TEXT");
                }}
                className='Input'
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
