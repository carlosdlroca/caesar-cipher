import React, { useState } from "react";
import "./Styles.css";

import Input from "./Input";
import Shift from "./Shift";

const ALPHA = /[a-zA-Z]/;

export default () => {
    const [text, setText] = useState("");
    const [shiftAmount, setShift] = useState(0);
    const [encryptedText, setEncryptedText] = useState(text);

    const encrypt = (value, shift) => {
        let encrypted = "";
        for (let char of value) {
            encrypted += shiftLetter(char, shift);
        }
        return encrypted;
    };

    const shiftLetter = (char, shift) => {
        const charCode = char.charCodeAt(0);
        if (ALPHA.test(char)) {
            let lower;
            if (charCode >= 65 && charCode <= 90) lower = 65;
            if (charCode >= 97 && charCode <= 122) lower = 97;

            const shiftedCharCode = ((charCode - lower + shift) % 26) + lower;
            return String.fromCharCode(shiftedCharCode);
        }
        return char;
    };

    return (
        <main className='App'>
            <h1>Caeser Cipher</h1>
            <section className='Cipher'>
                <Input
                    value={text}
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
                    <span>Encrypted:</span> <br /> {encryptedText}
                </h3>
            </section>
            <footer>
                Created by <span className='Author'>Carlos De La Roca</span>
            </footer>
        </main>
    );
};
