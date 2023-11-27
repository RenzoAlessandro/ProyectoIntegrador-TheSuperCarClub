const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if(!currentUser || currentUser.role !== 'ADMIN_ROLE') {

    window.location.href = '/index.html';

}