/*Neste desafio , voce deve implementar a função calculadoraAdiçãoSubtração , que:
- recebe 3 argumentos ; sendo os dois primeiros números inteiros,
numero e outroNumero, e o 
terçeiro operação , sendo uma string "+" ou "-"; 
- retorna um valor dependendo da operação :
   - Se operação é "+" ; 
   então retorna a soma 
   do numero com outroNumero.

   - Se operação é "-" ; 
   então retorna a subtração 
   do numero com outroNumero.

   -Se operação é "*" ; 
   então retorna a multiplicação 
   do numero com outroNumero.

   -Se não é nenhuma das operações esperadas,então
    retorna o valor 0.
*/


Complete a função 'calculadoraAdicaoSubtracao' abaixo.
 *
 * É esperado que a função retorne um número inteiro.
 * A função aceita os seguintes parâmetros:
 *  1. numero (número inteiro)
 *  2. outroNumero (número inteiro)
 *  3. operacao (string)
 */

function calculadoraAdicaoSubtracao(numero, outroNumero, operacao) {
    // Escreva seu código aqui
    numero =  1||9||3;
    outroNumero = 2||5||2; 
    operacao = "+"|| "-"||"*";
    if (operacao === "+"){
        return numero+outroNumero
    }else if(operacao==="-"){
        return numero-outroNumero
    }else{
        return 0
    }

}

function main() {