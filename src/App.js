import React from "react";
import "./Styles.css";

import Cipher from "./Cipher";
import BackgroundSvg from "./BackgroundSvg";

export default () => {
    return (
        <main className='App'>
            <a
                className='gh-link'
                href='https://github.com/carlosdlroca/caeser-cipher'
            >
                Link to Code
            </a>
            <BackgroundSvg />
            <header className='HeaderTitle'>Caeser Cipher</header>
            <Cipher />
        </main>
    );
};
