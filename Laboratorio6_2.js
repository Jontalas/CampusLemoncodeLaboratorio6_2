// Constantes.
const plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
const encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

// Funciones para el apartado de la encriptación ------------------------------------
var processText = (isEncrypt) => {
    if (isEncrypt) {
        crypt(plainAlphabet, encryptedAlphabet, document.getElementById("decryptedText").value, document.getElementById("encryptedText"));
    }
    else {
        crypt(encryptedAlphabet, plainAlphabet, document.getElementById("encryptedText").value, document.getElementById("decryptedText"));
    }
}
var crypt = (fromAlphabet, toAlphabet, fromText, toText) => {
    var result = "";
    for (const key in fromText) {
        const position = fromAlphabet.indexOf(fromText[key]);
        if (position == -1) {
            result += fromText[key];
        }
        else {
            result += toAlphabet[position];
        }
    };
    toText.value = result;
}

// Funciones para el apartado de la generación aleatoria ------------------------------------
var randomPick = (n, min, max) => {
    var result = [];
    const range = max - min + 1;
    while (!(result.length >= n || result.length >= range)) {
        var newValue;
        do {
            newValue = Math.floor(Math.random() * range) + min;
        } while (result.indexOf(newValue) != -1);
        result.push(newValue);
    }
    return result;
}
// TEST generación aleatoria
console.log("Primitiva: " + randomPick(6, 1, 49)); // Apuesta automática de la primitiva
console.log("Bolas de billar: " + randomPick(15, 1, 15)); // Escoge combinación de bolas de billar
console.log("Tirada de dado: " + randomPick(1, 1, 6)); // Tirada aleatoria de un dado