const touche = [...document.querySelectorAll('.bouton')]
const listekeycode =touche.map(touche=>touche.dataset.key);
console.log(listekeycode)
document.addEventListener('keydown',(e)=>{
    const valeur = e.keycode.toString() ;
    console.log(valeur,typeof valeur)
})
 