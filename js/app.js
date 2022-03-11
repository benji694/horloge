const nb1 = document.querySelector('#nb1');
const nb2 = document.querySelector('#nb2');
const nb3 = document.querySelector('#nb3');
const nb4 = document.querySelector('#nb4');



function n1(elt){
    elt.firstElementChild.className += ' haut gauche bas';
    elt.lastElementChild.className += ' haut gauche bas';
}
function n2(elt){
    elt.firstElementChild.className += '  gauche';
    elt.lastElementChild.className += ' droite';
}
function n3(elt){
    elt.firstElementChild.className += ' gauche';
    elt.lastElementChild.className += ' gauche';
}
function n4(elt){
    elt.firstElementChild.className += ' haut';
    elt.lastElementChild.className += '  gauche bas';
}
function n5(elt){
    elt.firstElementChild.className += ' droite';
    elt.lastElementChild.className += ' gauche';
}
function n6(elt){
    elt.firstElementChild.className += ' droite';
}
function n7(elt){
    elt.firstElementChild.className += ' gauche bas';
    elt.lastElementChild.className += ' haut gauche bas';
}

function n9(elt){
    elt.lastElementChild.className += ' gauche';
}

n9(nb1)
