const nb1 = document.querySelector('#nb1');
const nb2 = document.querySelector('#nb2');
const nb3 = document.querySelector('#nb3');
const nb4 = document.querySelector('#nb4');
let heure_dizaine = 2;
let heure_unité = 4;
let minute_dizaine = 5;
let minute_unité = 0;


const numéros = {
    numéro0 : function(elt){
        elt.firstElementChild.className += ' bas';
        elt.lastElementChild.className += ' haut';
    },
    numéro1 : function(elt){
        elt.firstElementChild.className += ' haut gauche bas';
        elt.lastElementChild.className += ' haut gauche bas';
    },
    numéro2 : function(elt){
        elt.firstElementChild.className += '  gauche';
        elt.lastElementChild.className += ' droite';
    },
    numéro3 : function(elt){
        elt.firstElementChild.className += ' gauche';
        elt.lastElementChild.className += ' gauche';
    },
    numéro4 : function(elt){
        elt.firstElementChild.className += ' haut';
        elt.lastElementChild.className += '  gauche bas';
    },
    numéro5 : function(elt){
        elt.firstElementChild.className += ' droite';
        elt.lastElementChild.className += ' gauche';
    },
    numéro6 : function(elt){
        elt.firstElementChild.className += ' droite';
    },
    numéro7 : function(elt){
        elt.firstElementChild.className += ' gauche bas';
        elt.lastElementChild.className += ' haut gauche bas';
    },
    numéro8 : function(elt){
    },
    numéro9 : function(elt){
        elt.lastElementChild.className += ' gauche';
    },

}

const chiffres = document.querySelectorAll('.barre');


function décompte(){
    for(let i = 0; i < chiffres.length; i++){
        chiffres[i].className = 'barre'
    }
    if(minute_unité == 0){
        minute_unité = 9;
        minute_dizaine -= 1;
    }
    if(minute_dizaine == 0){
        minute_dizaine = 9;
        heure_unité -= 1;
    }
    if(heure_unité == 0){
        heure_unité = 9;
        heure_dizaine -= 1;
    }
    let txt = 'numéro' + minute_unité;
    numéros[txt](nb4);
    let txt2 = 'numéro' + minute_dizaine;
    numéros[txt2](nb3);
    minute_unité--;
}


let interval = setInterval(décompte, 1000)