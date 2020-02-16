import React, { useState } from "react";
import "./Styles.css";

import Input from "./Input";
import Shift from "./Shift";

export default () => {
    const [text, setText] = useState("");
    const [shiftAmount, setShift] = useState(0);
    const [encryptedText, setEncryptedText] = useState(text);

    function handleInputChange(e) {
        const { value } = e.target;
        setText(value);
    }

    const encrypt = value => {
        return value;
    };

    return (
        <main className='App'>
            <Input value={text} onChange={e => handleInputChange(e)} />
            <Shift
                onChange={e => {
                    const { value } = e.target;
                    setShift(Number(value));
                    setEncryptedText(encrypt(text));
                }}
            />

            <h3 className='EncryptedText'>{encryptedText}</h3>
        </main>
    );
};
