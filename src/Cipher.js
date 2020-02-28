import React, { useState } from "react";
import Input from "./Input";
import Shift from "./Shift";

export default () => {
    const [text, setText] = useState("");
    const [shiftAmount, setShift] = useState(0);
    const [encryptedText, setEncryptedText] = useState(text);
    const ALPHA = /[a-zA-Z]/;

    const encrypt = (value, shift) => {
        let encrypted = "";
        for (let char of value) {
            encrypted += encryptCharacter(char, shift);
        }
        return encrypted;
    };

    const encryptCharacter = (char, shift) => {
        const charCode = char.charCodeAt(0);
        if (ALPHA.test(char)) {
            let lower;
            if (charCode >= 65 && charCode <= 90) lower = 65;
            if (charCode >= 97 && charCode <= 122) lower = 97;

            const encryptedCharCode = ((charCode - lower + shift) % 26) + lower;
            return String.fromCharCode(encryptedCharCode);
        }
        return char;
    };

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
