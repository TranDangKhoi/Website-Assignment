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


function checkEmail(){
    elMsg = document.getElementById("feedback");
    if (username.value.length < 5){
        elMsg.textContent = "Your username should be more than 5 characters long";
    }
    else{
        elMsg.textContent = "";
    }
}
var username = document.getElementById('email');
var signin = document.getElementById('submit');

signin.addEventListener('click',checkEmail,false);