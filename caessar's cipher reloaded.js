const friend = "BRUTUS";
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";


//step1
function encryptedLetter(letter, shift){
    const index = alphabet.indexOf(letter.toLowerCase());
    const encryptedIndex = (index + shift) % alphabet.length;
    return alphabet[encryptedIndex];  //returns the encrypted letter of the current friend's character.  The shiftValue is applied to the index of the current friend's character in the alphabet.  The result is then used to find the encrypted letter in the alphabet string.  The encrypted letter is returned.  The function is designed to work with a single character at a time.  If the friend's character is not in the alphabet, the function will return the same character.  The function will also handle the case where the shiftValue is negative, by wrapping around the alphabet.  For example, encryptLetter("z", -3) will return "c".  The function is designed to be used in a loop to encrypt each character of the friend's name.  The encryptedMessage is then returned as a string.  The function is designed to
}
console.log(encryptedLetter('a',3));

//step2 
function encryptedMessage(word,shift){
    let encryptedMessage = "";
    for(let i = 0; i < word.length; i++){
        encryptedMessage += encryptedLetter(word[i],shift);
    }
    return encryptedMessage;
}

//step3
function decryptLetter(letter,shift){
    const index = alphabet.indexOf(letter.toLowerCase());
    const decryptedIndex = (index - shift+alphabet.length) % alphabet.length;
    return alphabet[decryptedIndex];  //returns the decrypted letter of the current encrypted character.  The shiftValue is applied to the index of the current encrypted character in the alphabet.  The result is then used to find the decrypted letter in the alphabet string.  The decrypted letter is returned.  The function is designed to work with a single character at a time.  If the encrypted character is not in the alphabet, the function will return the same character.  The function will also handle the case where the shiftValue is negative, by wrapping around the alphabet.  For example, decryptLetter("c", -3) will return "z".  The function is designed to be used in a loop to decrypt each character of the encrypted message.  The decryptedMessage is then returned as a string.  The function is designed to be used in
}

//step4
function decryptMessage(word ,shift){
    let decryptedMessage = "";
    for(let i = 0; i < word.length; i++){
        decryptedMessage += decryptLetter(word[i],shift);
    }
    return decryptedMessage;
}

console.log(encryptedMessage("Iueuan jrxuq cjythdykwxaj mixkqtaeml ebv wHenckvbkei rqdmt fHukckvi.r Jbxuihus, tmxayiwfuxh sjxau amenhtv 'zQkhhuubyjkit' yjew jhxux mxydatij. zJxmu hvymhihj ajel kldlsuyjb dyju yid uekdh qIbkqsxa xsxqqdvduzb wuqzhdoi qjxwu waueo xjem jfxuy dpuntj dgkvuiwj.",42));
; //prints out: EUXWXV

console.log(decryptMessage("EUXWXV", 3)); //prints out: BRUTUS

//q1. yes hewould get Brutus back because he is decrypting the encripted letters/word   