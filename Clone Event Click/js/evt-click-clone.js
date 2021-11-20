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
    if (username.value.length >= 7){
        document.getElementById('submit').style.backgroundColor = "rgb(167, 69, 69)";
    }
}

document.getElementById('submit').onmouseleave = function(){
    if (username.value.length >= 7){
        document.getElementById('submit').style.backgroundColor = "rgb(211, 96, 96)";
    }
}


function checkEmail(){
    elMsg = document.getElementById("feedback");
    if (username.value.length >= 7){
        elMsg.textContent = "";
        document.getElementById('submit').style.backgroundColor = "rgb(211, 96, 96)";
    }
    else{
        elMsg.textContent = "Your username should be more than 5 characters long";
        document.getElementById('submit').style.backgroundColor = "rgb(160, 138, 138)";
    }
}

function checkReq(){
    if (username.value.length >= 7){
        window.location.href = "https://github.com/TranDangKhoi";
    }
}

document.addEventListener('contextmenu', event => event.preventDefault());

var username = document.getElementById('username');


/* check inspect disablity even though i know it meaningless */

username.addEventListener('blur',checkEmail,false);

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