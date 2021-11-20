/* For system maintenace */
var msg = '<div class=\"header\"><a id=\"close\" href="#">Close</a></div>';
msg += '<div id="maintenace"><h2>System Maintenace</h2>';
msg += 'Our servers are being updated between 3 and 4 a.m';
msg += ' .During this time, there may be minor disruptions to services.</div>';

var elNote = document.createElement("div"); // Tạo ra một element div
elNote.setAttribute('id','note'); // Set cho thẻ div một id là note
elNote.innerHTML = msg; // Ghi vào bên trong thẻ nội dung như trên
document.body.appendChild(elNote); // Áp dụng vào elNote

function dismissNote(){
    document.body.removeChild(elNote); // remove pop-up
}

var elClose = document.getElementById('close'); // remove pop-up khi click vào một "a" có id là close
elClose.addEventListener('click',dismissNote,false); // remove pop-up khi click vào một "a" có id là close

/* For username */

document.getElementById('submit').onmouseover = function(){
    if (username.value.length >= 7 && password.value.length >= 8){
        document.getElementById('submit').style.backgroundColor = "rgb(167, 69, 69)";
    }
}

document.getElementById('submit').onmouseleave = function(){
    if (username.value.length >= 7 && password.value.length >= 8){
        document.getElementById('submit').style.backgroundColor = "rgb(211, 96, 96)";
    }
}


function checkEmail(){
    elMsg = document.getElementById("feedback");
    if (username.value.length >= 7){
        elMsg.textContent = "";
    }
    else{
        elMsg.textContent = "Your username must be more than 7 characters long";
        
    }
}

document.addEventListener('contextmenu', event => event.preventDefault());

var username = document.getElementById('username');

/* For Password */

function checkPassword(){
        elMsg = document.getElementById("feedback2");
    if (password.value.length >= 8){
        elMsg.textContent = "";
    }
    else{
        elMsg.textContent = "Your password must be more than 8 characters long"
    }
}

var signin = document.getElementById('submit');

username.addEventListener('blur',checkEmail,false);
password.addEventListener('blur',checkPassword,false);
username.addEventListener('blur',checkBoth,false);
password.addEventListener('blur',checkBoth,false);
/* Change sign in background button when both of username and password met the requirements */

function checkBoth(){
    if(username.value.length >= 7 && password.value.length >= 8 ){
        document.getElementById('submit').style.backgroundColor = "rgb(211, 96, 96)";
    }
    else {
        document.getElementById('submit').style.backgroundColor = "rgb(160, 138, 138)";
    }
}

/* check xem da du dieu kien chua moi cho chuyen trang */
function checkReq(){
    if (username.value.length >= 7 && password.value.length >= 8 ){
        window.location.href = "https://github.com/TranDangKhoi";
    }
}
/* check inspect disablity even though i know it meaningless */

document.onkeydown = function(e) {
    if(event.keyCode == 123) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
       return false;
    }
  }