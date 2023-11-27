
// *INFO:  Obtenemos los datos del localstorage "USERS"
const usersArray = JSON.parse(localStorage.getItem("users")) || [];

// *INFO: Obtenemos el body de la tabla
const tableBodyHTML = document.getElementById("table-body");

// *INFO: Obtenemos el input del buscador
const searchInputUserHTML = document.getElementById("searchUser");

// *INFO: Obtenemos el formulario
const userFormHTML = document.querySelector("form#user-form");

// *INFO: Obtenemos el subtitulo, mensaje y button del form
const subtitle = document.getElementById("subtitle");
const message = document.getElementById("message");
const submitButton = userFormHTML.querySelector("button[type=submit].buttonSimple");

printUsers(usersArray);

// *INFO: IMPRIMIMOS LOS USUARIOS
function printUsers(listUsers){
    tableBodyHTML.innerHTML = '';
    listUsers.forEach(user => { 
        tableBodyHTML.innerHTML += `
                                    <tr class="table-body">
                                        <td class="user-image">
                                            <img src="${user.image}" alt="${user.firstName} Avatar">
                                        </td>
                                        <td class="user-name">${user.firstName} ${user.lastName}</td>
                                        <td class="user-email">${user.email}</td>
                                        <td class="user-location">${user.location}</td>
                                        <td class="user-age">${user.age}</td>
                                        <td class="user-date">${formatDateOutput(user.bornDate)}</td>
                                        <td class="user-role">${(user.role === `ADMIN_ROLE` ? "Administrador" : "Cliente")}</td>
                                        <td class="user-action">
                                            <button class="action-btn btn-danger" 
                                                    title="Borrar usuario"
                                                    onclick="deleteUser('${user.id}', '${user.firstName}')">
                                            <i class="fa-solid fa-trash"></i>
                                            </button>
                                            <button class="action-btn btn-warning" 
                                                    title="Editar usuario"
                                                    onclick="editUser('${user.id}')">
                                            <i class="fa-solid fa-pen-to-square"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    `;
        
    });
}

// *INFO: BUSCADOR POR NOMBRE DE USUARIO
searchInputUserHTML.addEventListener('keyup', (evento) =>{
    const inputValue = evento.target.value.toLowerCase();
    const userFilter = usersArray.filter((user) => {
        const firstNameUser = user.firstName.toLowerCase();
        const lastNameUser = user.lastName.toLowerCase();
        // Buscamos por nombre y apellido
        if( firstNameUser.includes(inputValue) || lastNameUser.includes(inputValue)){
            return true;
        } else{
            return false;
        }
    })
    printUsers(userFilter);
})

// *INFO: LIMPIAMOS EL FORMULARIO DE CERO
function resetUserForm() {

    // ERROR: El reset() no limpia inputs hidden (ID), 
    // SOLUCION: pasarlo a display: none
    // console.log(userFormHTML.elements.id.value)
    userFormHTML.reset();
    // console.log(userFormHTML.elements.id.value)

    userFormHTML.elements.password.disabled = false;
    userFormHTML.elements.password2.disabled = false;
    subtitle.innerText = 'Crea un Usuario';
    message.innerText = 'Crea una cuenta con su correo eléctronico.';
    submitButton.classList.remove('btn-edit');
    submitButton.innerHTML = 'Registrar Usuario'

    userFormHTML.elements.firstName.focus();
}

// *INFO: ACTUALIZAMOS EL LOCAL STORAGE
function updateLocalStorage() {
    localStorage.setItem("users", JSON.stringify(usersArray));
}

// *INFO: ELIMINAMOS UN USUARIO
function deleteUser(ID, nombre) {

    Swal.fire({
        title: `Estas seguro que quieres borrar a ${nombre}?`,
        text: "No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, borralo!"
    }).then((result) => {
        if (result.isConfirmed) {

            const indice = usersArray.findIndex( user => user.id === ID);
            usersArray.splice(indice,1);
            printUsers(usersArray);
            updateLocalStorage();

            Swal.fire({
            title: "Eliminado!",
            text: "El usuario ha sido eliminado.",
            icon: "success"
            });
        }
    });
}

// *INFO: AGREGAMOS UN USUARIO NUEVO
userFormHTML.addEventListener("submit", (evt) => {
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

    // TRUE: En el caso que si exista ID (EDITAR)
    // FALSE: En el caso que no exista ID (CREAR)
    const id = el.id.value ? el.id.value : crypto.randomUUID();

    const usuario = {
        id: id,
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

    // Tenemos que realizar dos acciones:
    // 1. Agregar un usuario nuevo
    // 2. Editar un usuario, donde reemplazamos la info del usuario
    if(el.id.value){
        // EDITAR
        const indice = usersArray.findIndex(user => {
            if(user.id === el.id.value){
                return true
            }
        })

        usersArray[indice] = usuario;

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Usuario Editado",
            text: 'Los datos del usuario fueron actualizados correctamente.',
            showConfirmButton: false,
            timer: 1500
        });

    } else {
        // AGREGAR
        usersArray.push(usuario);

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Usuario Agregado",
            text: 'El usuario se creo correctamente.',
            showConfirmButton: false,
            timer: 1500
        });
    }
    
    printUsers(usersArray);
    updateLocalStorage();
    resetUserForm();
})

// *INFO: EDITAR ALGUN USUARIO
function editUser(idSearch) {
    // buscamos el usuario
    const userEdit = usersArray.find((user) => {
        if(user.id === idSearch){
            return true;
        }
    })

    // CLAUSULA GUARDA: indicamos que el usuario no fue encontrado
    if(!userEdit){
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'El usuario a editar no existe!',
        })
        return;
    }

    // Rellenar el fomulario con los datos del usuario a editar
    const el = userFormHTML.elements;

    el.id.value = userEdit.id;
    el.firstName.value = userEdit.firstName;
    el.lastName.value = userEdit.lastName;
    el.email.value = userEdit.email;
    el.password.value = userEdit.password;
    el.password.disabled = true;
    el.password2.value = userEdit.password;
    el.password2.disabled = true;
    el.location.value = userEdit.location;
    el.age.value = userEdit.age;
    el.bornDate.value = formatDateInput(userEdit.bornDate);
    el.image.value = userEdit.image;
    el.active.checked = userEdit.active;

    // Cambiamos el button a editar usuario
    subtitle.innerText = 'Editar Usuario';
    message.innerText = 'Edita una cuenta con su identificador único.';
    submitButton.classList.add('btn-edit');
    submitButton.innerText = 'Editar Usuario'

}