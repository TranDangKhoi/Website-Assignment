var sx = document.getElementById('sx');
var sy = document.getElementById("sy");
var px = document.getElementById("px");
var py = document.getElementById("py");
var cx = document.getElementById("cx");
var cy = document.getElementById("cy");

function showPos(position){
    sx.value = position.screenX
    sy.value = position.screenY
    px.value = position.pageX
    py.value = position.pageY
    cx.value = position.clientX
    cy.value = position.clientY
}

var el = document.getElementById('body');
el.addEventListener('mousemove', showPos, false);
