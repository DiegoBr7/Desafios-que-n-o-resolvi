function vezesLetraAparece(frase, letra) {
    var a = 0

    for (var i = 0; i < frase.length; i++) {
    if (frase[i] == letra) {
        a++
    }
    }
return a;
}
var frase = "esta é minha frase";
var letra = "a";
console.log("A letra [ "+letra+" ] apareceu: "+ vezesLetraAparece(frase, letra)+" vezes na frase!")