// *INFO: Este archivo lo vamos a utilizar cross en todos los pages

// *INFO: Obtenemos el nav y el user info
const headerNavHTML = document.getElementById("header-nav");
const userInfoHTML = document.getElementById("header-user");

// *INFO: Obtenemos el usuario logueado
const loguedUser = JSON.parse(localStorage.getItem("currentUser"));

if(loguedUser) {
    // *INFO: Si tenemos un usuario logueado
    if(loguedUser.role === 'ADMIN_ROLE'){
        // Si es un ADMIN pintamos algunos buttons
        // 1. Administración de Usuarios
        const listItenUserLink = document.createElement("li");
        listItenUserLink.classList.add('nav-item');
        const adminUserlink = document.createElement("a");
        adminUserlink.href = '/pages/admin/user-admin.html';
        adminUserlink.innerText = 'User Admin';
        adminUserlink.classList.add('nav-link');
        headerNavHTML.appendChild(listItenUserLink).appendChild(adminUserlink);

        // 2. Administración de Vehículos
        const listItenModelLink = document.createElement("li");
        listItenModelLink.classList.add('nav-item');
        const adminModelCarslink = document.createElement("a");
        adminModelCarslink.href = '/pages/admin/model-cars-admin.html';
        adminModelCarslink.innerText = 'Model Cars Admin';
        adminModelCarslink.classList.add('nav-link');
        headerNavHTML.appendChild(listItenModelLink).appendChild(adminModelCarslink);
    }

    // Button de Mis autos Rentados
    const listItemmyRents = document.createElement('li');
    listItemmyRents.classList.add('user-item');
    const buttonMyRents = document.createElement('a');
    buttonMyRents.title = 'Mis autos rentados';
    buttonMyRents.classList.add('user-link');
    buttonMyRents.href = '#';
    const iconMyRents = document.createElement('i');
    iconMyRents.classList.add('fa-solid', 'fa-cart-shopping');
    buttonMyRents.appendChild(iconMyRents);
    listItemmyRents.appendChild(buttonMyRents);
    userInfoHTML.appendChild(listItemmyRents);

    // Button de cerrar sesión
    const listItemLogout = document.createElement('li');
    listItemLogout.classList.add('user-item');
    const buttonLogout = document.createElement('a');
    buttonLogout.innerText = 'Cerrar sesión';
    buttonLogout.title = 'Cerrar sesión';
    buttonLogout.classList.add('user-link');
    buttonLogout.onclick = function(){
        localStorage.removeItem("currentUser");
        window.location.href = '/index.html';
    }
    listItemLogout.appendChild(buttonLogout);
    userInfoHTML.appendChild(listItemLogout);

    // Asignamos el nombre del usuario logueado
    const listItemProfile = document.createElement('li');
    listItemProfile.classList.add('user-item');
    const buttonPerfil = document.createElement('a');
    buttonPerfil.title = 'Mi perfil';
    buttonPerfil.href = '#';
    buttonPerfil.classList.add('profile-link');
    const userName = document.createElement('div');
    userName.classList.add('username-link');
    userName.innerText = `${loguedUser.firstName}`;
    const userImg = document.createElement('img');
    userImg.src = loguedUser.image;
    userImg.alt = `${loguedUser.firstName} profile picture`;
    userImg.classList.add('user-profile-picture');
    buttonPerfil.appendChild(userName);
    buttonPerfil.appendChild(userImg);
    listItemProfile.appendChild(buttonPerfil);
    userInfoHTML.appendChild(listItemProfile);

} else {
    // *INFO: No tenemos un usuario logueado
    // Button de Iniciar sesión



    const listItemLogin = document.createElement('li');
    listItemLogin.classList.add('user-item');

    const buttonLogin = document.createElement('a');
    buttonLogin.innerText = 'Iniciar sesión';
    buttonLogin.title = 'Iniciar sesión';
    buttonLogin.classList.add('user-link');
    buttonLogin.onclick = function(){
        window.location.href = '/pages/login/login.html';
    }
    listItemLogin.appendChild(buttonLogin);
    userInfoHTML.appendChild(listItemLogin);
}