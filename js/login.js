// *INFO:  Obtenemos los datos del localstorage "USERS"
const usersArray = JSON.parse(localStorage.getItem("users")) || [];

// *INFO: Obtenemos el formulario del login
const loginFormHTML = document.getElementById("login-form");

// *INFO: INICIO DE SESIÓN
loginFormHTML.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const email = loginFormHTML.email.value;
    const password = evt.target.elements.password.value;

    console.log(email, password)

    // Buscamos algun usuario con email y constraseña
    const userFind = usersArray.find((user) => {
        if(user.email.toLowerCase() === email.toLowerCase()){
            return true;
        }
        return false;
    })

    // Verificamos si tenemos algun usuario econtrado en el find
    if(!userFind || userFind.password !== password){
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Login Incorrecto",
            text: 'Alguno de los datos ingresados no es correcto.',
            showConfirmButton: false,
            timer: 1500
        });
        return;
    }

    delete userFind.password;

    localStorage.setItem("currentUser", JSON.stringify(userFind));

    Swal.fire({
        position: "center",
        icon: "success",
        title: "Login Correcto",
        text: 'Será redireccionado en un momento.',
        showConfirmButton: false,
        timer: 2000
    });

    setTimeout(function(){
        window.location.href = '/index.html'
    }, 500)
})