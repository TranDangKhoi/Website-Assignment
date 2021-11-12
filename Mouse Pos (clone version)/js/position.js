var sx = document.getElementById('sx'); // Element to hold screenX
var sy = document.getElementById('sy'); //Element to hold screenY
var px = document.getElementById('px'); //Element to hold pageX
var py = document.getElementById('py'); //Element to hold pageY
var cx = document.getElementById('cx'); //Element to hold clientX
var cy = document.getElementById('cy'); //Element to hold clientY

function showPos(position){
    sx.value =position.screenX // Update element with screenX
    sy.value =position.screenY // Nhu tren nhung ma la voi screenY
    px.value =position.pageX //
    py.value =position.pageY
    cx.value =position.clientX
    cy.value =position.clientY
}

var el = document.getElementById('body'); //Get body element
el.addEventListener('mousemove', showPos, false);


