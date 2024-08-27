function encrypt() {
    let text = document.querySelector('textarea').value;
    let arrayText = text.split('');
    let wordEncrypted = "";
    wordEncrypted = encryptWord(arrayText, wordEncrypted);
    
    document.getElementById("encryptedText").value = wordEncrypted;
    document.getElementById("decryptedText").value = ""; // Limpa o campo de descriptografia
}

function decrypt() {
    let text = document.querySelector('textarea').value;
    const conversoes = {
        "enter": "e",
        "imes": "i",
        "ai": "a",
        "ober": "o",
        "ufat": "u"
    };
    let palavraDescriptografada = text;

    for (let key in conversoes) {
        palavraDescriptografada = palavraDescriptografada.split(key).join(conversoes[key]);
    }

    document.getElementById("decryptedText").value = palavraDescriptografada;
    document.getElementById("encryptedText").value = ""; // Limpa o campo de criptografia
}

function encryptWord(arrayText, wordEncrypted) {
    for (let i = 0; i < arrayText.length; i++) {
        if (arrayText[i] == 'a') {
            wordEncrypted += "ai";
        } else if (arrayText[i] == 'e') {
            wordEncrypted += "enter";
        } else if (arrayText[i] == 'i') {
            wordEncrypted += "imes";
        } else if (arrayText[i] == 'o') {
            wordEncrypted += "ober";
        } else if (arrayText[i] == 'u') {
            wordEncrypted += "ufat";
        } else {
            wordEncrypted += arrayText[i];
        }
    }
    return wordEncrypted;
}
