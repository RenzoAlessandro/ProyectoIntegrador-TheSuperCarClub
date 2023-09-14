// Para obtener la el año actual
document.getElementById("year").innerHTML = new Date().getFullYear();

// Para cambiar el tema light/dark detectando el prefers-color-scheme



// Para cambiar el tema light/dark segun class 
const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');


    // #README: Guardando el modo en localstorage
    if(document.body.classList.contains('dark')){
        localStorage.setItem('dark-mode', 'true');
    } else{
        localStorage.setItem('dark-mode', 'false');
    }

});

//README: Obetenemos el modo actual.
if(localStorage.getItem('dark-mode') === 'true'){
    document.body.classList.add('dark');
    btnSwitch.classList.add('active');
} else{
    document.body.classList.remove('dark');
    btnSwitch.classList.remove('active');
}