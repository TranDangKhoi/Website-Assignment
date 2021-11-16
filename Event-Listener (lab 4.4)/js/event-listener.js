function checkUsername(){
    var elMsg = document.getElementById("feedback");
    if (this.value.length<5){
        elMsg.textContent = "Username must be at least 5 characters long";
    }
    else{
        elMsg.textContent = "";
    }
}

function checkUsernameFirstCharUpper(){
    const lowerAlph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var elMsg = document.getElementById("feedback2");
    for (var i = 0;i < lowerAlph.length();i++){
        if(username.value.charAt(0) == lowerAlph[i]){
            
            elMsg.textContent = "You must have an uppercase letter as the first letter in your username";
        }
            else{
                elMsg.textContent = "";
            }
        }
        
}

var username = document.getElementById("username");

username.addEventListener('blur',checkUsername,false);
username.addEventListener('blur',checkUsernameFirstCharUpper,false);
