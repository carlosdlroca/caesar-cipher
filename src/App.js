import React, { useState } from "react";
import "./Styles.css";

import Input from "./Input";

export default () => {
    const [text, setText] = useState("");

    function handleInputChange(e) {
        const { value } = e.target;
        setText(value);
    }

    return (
        <main className='App'>
            <Input value={text} onChange={e => handleInputChange(e)} />
        </main>
    );
};
