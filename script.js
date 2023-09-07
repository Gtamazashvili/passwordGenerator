document.addEventListener('DOMContentLoaded', function() {
    
    const keyboardSymbols = [
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
            'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
            'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
            '`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-',
            '_', '=', '+', '[', '{', ']', '}', , '|', ';', ':', '\'', '"',
            ',', '<', '.', '>', '/', '?', ' '
    ];

    document.getElementById("myRange").oninput = function() {
        document.getElementById("numberOfChars").innerHTML = this.value;
    };

    document.getElementById("generate").addEventListener("click", function() {
        let number = parseInt(document.getElementById("numberOfChars").innerText);
        let password = "";
        
        for(let i = 0; i < number; i++) {
            let index = Math.floor(Math.random() * keyboardSymbols.length);
            password += keyboardSymbols[index];
        }
        
        document.querySelector(".password").value = password;
    });
    document.getElementById("copy").addEventListener("click",function(){
        var copyText= document.getElementById("password");
        copyText.select();
        document.execCommand("copy");
        copyText.setSelectionRange(copyText.value.length, copyText.value.length);
    })
});
