/*
COMO RESOLVER QUANTAS VEZES QUE A LETRA APARECE EM UMA FRASE
*/ 

/*
 * Complete a função 'vezesLetraAparece' abaixo.
 *
 * É esperado que a função retorne um número inteiro.
 * A função aceita os seguintes parâmetros:
 *  1. frase (string)
 *  2. letra (string)
 */

function vezesLetraAparece(frase, letra) {
    // Escreva seu código aqui
frase = "The Lord of The Rings"
letra = "o"
var a = 0
for(var i = 0;i <= frase.length;i++){
   if (letra[i]==="o")
 frase.push(letra[i])
}

function main() {