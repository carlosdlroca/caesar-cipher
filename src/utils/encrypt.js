export const encrypt = (value, shift) => {
    let encrypted = "";
    for (let char of value) {
        encrypted += encryptCharacter(char, shift);
    }
    return encrypted;
};

const ALPHA = /[a-zA-Z]/;
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
