import React, { useState } from "react";
import Input from "./Input";
import Shift from "./Shift";
import { encrypt } from "./utils/encrypt";

export default () => {
    const [text, setText] = useState("");
    const [shiftAmount, setShift] = useState(0);
    const [encryptedText, setEncryptedText] = useState(text);

    return (
        <section className='Cipher'>
            <Input
                value={text}
                placeholder={"Enter your text"}
                onChange={e => {
                    const { value } = e.target;
                    setText(value);
                    setEncryptedText(encrypt(value, shiftAmount));
                }}
            />
            <Shift
                onChange={e => {
                    const { value } = e.target;
                    setShift(Number(value));
                    setEncryptedText(encrypt(text, Number(value)));
                }}
            />
            <h3 className='EncryptedText'>
                <span class='EncryptedLabel'>Encrypted:</span> <br />{" "}
                {encryptedText}
            </h3>
        </section>
    );
};
