function encrypt(){
    let text = document.querySelector('textarea').value;
    let arrayText = text.split('');
    let wordEncrypted = "";
    encryptWord(arrayText, wordEncrypted);
}


    function descrypt() {
    let text = document.querySelector('textarea').value;

        const conversoes = {
            "enter": "e",
            "imes": "i",
            "ai": "a",
            "ober": "o",
            "ufat": "u"
        };
        const palavrasCriptografadas = text.split(' ');
        let palavraDescriptografada = "";

    for (let i = 0; i < palavrasCriptografadas.length; i++) {
        const palavraCriptografada = palavrasCriptografadas[i];
        const palavraOriginal = conversoes[palavraCriptografada] || palavraCriptografada;
        palavraDescriptografada += palavraOriginal + " ";
    }

    // Remova o espaço extra no final
    palavraDescriptografada = palavraDescriptografada.trim();
    console.log(palavraDescriptografada);
    // return palavraDescriptografada;
    }
   
    function encryptWord(arrayText, wordEncrypted){
        for(let i=0; i<=arrayText.length - 1; i++){
            if(arrayText[i] == 'a'){
                arrayText[i] = "ai";
                wordEncrypted += arrayText[i];
            }else if(arrayText[i] == 'e'){
                arrayText[i] == "enter";
                wordEncrypted += arrayText[i];
            }else if(arrayText[i] == 'i'){
                arrayText[i] == "imes";
                wordEncrypted += arrayText[i];
            }else if(arrayText[i]=='o'){
                arrayText[i] = "ober";
                wordEncrypted += arrayText[i];
            }else if(arrayText[i]=='u'){
                arrayText[i] = "ufat";
                wordEncrypted += arrayText[i];
            }else{
                arrayText[i] = arrayText[i];
                wordEncrypted += arrayText[i];
            }
        }
        console.log(wordEncrypted);
    }