import React, { useState } from "react";
import Input from "./Input";
import Shift from "./Shift";
import { encrypt } from "./utils/encrypt";

export default () => {
    const [text, setText] = useState("");
    const [shiftAmount, setShift] = useState(0);
    const [encryptedText, setEncryptedText] = useState(text);

    const handleInputOnChange = e => {
        const { value } = e.target;
        setText(value);
        setEncryptedText(encrypt(value, shiftAmount));
    };

    const handleOnShiftChange = e => {
        const { value } = e.target;
        setShift(Number(value));
        setEncryptedText(encrypt(text, Number(value)));
    };

    return (
        <section className='Cipher'>
            <Input
                value={text}
                placeholder={"Enter your text"}
                onChange={handleInputOnChange}
            />
            <Shift onChange={handleOnShiftChange} />
            <h3 className='EncryptedText'>
                <span class='EncryptedLabel'>Encrypted:</span> <br />
                {encryptedText}
            </h3>
        </section>
    );
};
