// *INFO:  Obtenemos los datos del localstorage "USERS"
const usersArray = JSON.parse(localStorage.getItem("users")) || [];

// *INFO: Obtenemos el formulario
const registerFormHTML = document.querySelector("form#register-form");

// *INFO: ACTUALIZAMOS EL LOCAL STORAGE
function updateLocalStorage() {
    localStorage.setItem("users", JSON.stringify(usersArray));
}

// *INFO: LIMPIAMOS EL FORMULARIO DE CERO
function resetUserForm() {
    registerFormHTML.reset();
    registerFormHTML.elements.firstName.focus();
}

// *INFO: AGREGAMOS UN USUARIO NUEVO
registerFormHTML.addEventListener("submit", (evt) => {
    evt.preventDefault();
    
    const el = evt.target.elements;

    // Controlamos el repetir contraseña
    if(el.password.value !== el.password2.value){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Las constraseñas no coinciden!",
        });
        return;
    }

    // Verificamos si ya existe el email registrado
    const emailExit = usersArray.find((user) => {
        if(user.email === evt.target.elements.email.value){
            return true;
        }
        return false;
    })

    if(emailExit && el.id.value !== emailExit.id){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El correo ya se encuentra registrado.!',
        })
        return;
    }

    const usuario = {
        id: crypto.randomUUID(),
        firstName: el.firstName.value,
        lastName: el.lastName.value,
        age: el.age.value,
        email: el.email.value,
        active: el.active.checked,
        password: el.password.value,
        bornDate: new Date(el.bornDate.value).getTime(),
        location: el.location.value,
        image: el.image.value
    };

    // AGREGAR
    usersArray.push(usuario);

    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Usuario Registrado",
        text: 'El usuario se creo correctamente. Ahora inicie sesión.',
        showConfirmButton: false,
        timer: 1500
    });

    updateLocalStorage();
    resetUserForm();

    setTimeout(function(){
        window.location.href = '/pages/login/login.html'
    }, 500)

})