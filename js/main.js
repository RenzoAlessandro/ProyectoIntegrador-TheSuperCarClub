// *INFO: Para obtener la el año actual
document.getElementById("year").innerHTML = new Date().getFullYear();

// *INFO: Para cambiar el tema light/dark detectando el prefers-color-scheme

// *INFO: Para cambiar el tema light/dark segun class 
const btnSwitch = document.querySelector('#switch');

// *INFO: Obetenemos el modo actual.
const prefersLightTheme = window.matchMedia('(prefers-color-scheme: light)');

if(prefersLightTheme.matches === false){
    document.body.classList.remove('light');
    document.body.classList.add('dark');
    btnSwitch.classList.add('active');
} else{
    document.body.classList.remove('dark');
    document.body.classList.add('light');
    btnSwitch.classList.remove('active');
}


btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
    btnSwitch.classList.toggle('active');

    // Guardando el modo en localstorage
    if(document.body.classList.contains('dark')){
        localStorage.setItem('dark-mode', 'true');
    } else{
        localStorage.setItem('dark-mode', 'false');
    }

});