var placeholderMass = document.querySelector('.placeholderMass');
var placehol = placeholderMass.querySelectorAll('.placeholder');

window.onload = function change(){
    for(var i=0; i<placehol.length; i++)placehol[i].setAttribute("onclick", "location.href='http://www.example.com';");
    for(var i=0; i<placehol.length; i++)placehol[i].style.cursor = 'pointer';
}

