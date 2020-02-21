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
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
                <defs>
                    <linearGradient id='myGradient'>
                        <stop offset='0%' stop-color='#eb3349' />
                        <stop offset='100%' stop-color='#f45c43' />
                    </linearGradient>
                </defs>
                <path
                    fill='url(#myGradient)'
                    fill-opacity='1'
                    d='M0,32L40,64C80,96,160,160,240,160C320,160,400,96,480,74.7C560,53,640,75,720,90.7C800,107,880,117,960,133.3C1040,149,1120,171,1200,181.3C1280,192,1360,192,1400,192L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z'
                ></path>
            </svg>
            <header className='HeaderTitle'>Caeser Cipher</header>
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
        </main>
    );
};
