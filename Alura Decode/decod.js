const pegarTexto = document.querySelector("#mensagemfirst");
const outputTexto = document.querySelector("#second"); 
const code = document.querySelector("#mensagemCodificada");
const decode = document.querySelector("#mensagemDecodificada");
//const copiar = document.querySelector();


code.addEventListener('click',function(){

let palavra = pegarTexto.value;
    
let enigma5 = palavra.replace(/a/gi, 'ai');

let enigma4 = enigma5.replace(/e/gi, 'enter'); 

let enigma3 = enigma4.replace(/i/gi, 'imes');

let enigma2 = enigma3.replace(/o/gi, 'ober');

let enigma1 = enigma2.replace(/u/gi, 'ufat');

outputTexto.innerHTML = enigma1;
});


decode.addEventListener('click', function(){
let enigma = pegarTexto.value;
let reverse4 = enigma.replace(/ufat/gi, 'u'); 
let reverse3 = reverse4.replace(/ober/gi, 'o');
let reverse2 = reverse3.replace(/imes/gi, 'i');
let reverse1 = reverse2.replace(/enter/gi, 'e');
let reverse = reverse1.replace(/ai/gi, 'a')
outputTexto.innerHTML= reverse;
});

copiar.addEventListener('click',function(){
    if(navigator.clipboard){
        navigator.clipboard.writeText(outputTexto.textContent)
        copiar.classList.add('greenButton')
        copiar.innerHTML = 'Copiado!'
    }
})


