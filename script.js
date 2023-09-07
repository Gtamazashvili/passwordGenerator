document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("myRange").oninput = function() {
        document.getElementById("numberOfChars").innerHTML = this.value;
    };
});
let number=parseInt(document.getElementById("numberOfChars"));
const keyboardSymbols = [
    
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    '`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-',
    '_', '=', '+', '[', '{', ']', '}', '\\', '|', ';', ':', '\'', '"',
    ',', '<', '.', '>', '/', '?', ' '
];document.getElementById("generate").addEventListener("click", function() {
    let password="";
    for(let i = 0; i < number.length; i++) {
        let index=Math.random(0,keyboardSymbols.length)
        password+=keyboardSymbols[index];
    }
    console.log(password);
});