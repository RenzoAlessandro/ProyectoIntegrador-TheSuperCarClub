// *INFO: Obtenemos los datos del localstorage "MODELCARS"
const modelCarsArray = JSON.parse(localStorage.getItem("modelCars")) || [];
const brandsArray = JSON.parse(localStorage.getItem("brands")) || [];

// *INFO: Obtenemos el body de la tabla
const tableBodyHTML = document.getElementById("table-body");

// *INFO: Obtenemos el input del buscador
const searchInputModelCarHTML = document.getElementById("searchModelCar");

// *INFO: Obtenemos el fomulario 
const modelCarsFormHTML = document.querySelector("form#model-car-form");

// *INFO: Obtenemos el subtitulo, mensaje y el button del form
const subtitle = document.getElementById("subtitle");
const message = document.getElementById("message");
const submitButton = modelCarsFormHTML.querySelector("button[type=submit].buttonSimple");

printModelCars(modelCarsArray);

function printModelCars(listModelCars) {
    tableBodyHTML.innerHTML = '';
    listModelCars.forEach(car => {
        tableBodyHTML.innerHTML += `
                                    <tr class="table-body">
                                        <td class="modelCar-image">
                                            <img src="${car.autoImg}" alt="${car.modelo} Avatar">
                                        </td>
                                        <td class="brand-image">
                                        <img src="${car.marca.imagoTipo}" alt="${car.marca.marca} Avatar">
                                        </td>
                                        <td class="modelCar-model">${car.modelo}</td>
                                        <td class="modelCar-type">${car.tipo}</td>
                                        <td class="modelCar-year">${formatDateOutput(car.anio)}</td>
                                        <td class="modelCar-engine">${car.motor}</td>
                                        <td class="modelCar-transmission">${car.transmision}</td>
                                        <td class="modelCar-fuel">${car.combustible}</td>
                                        <td class="modelCar-seating">${car.asientos}</td>
                                        <td class="modelCar-precio24h">${car.precio_24h}</td>
                                        <td class="modelCar-description">${car.descripcion}</td>
                                        <td class="modelCar-action">
                                            <button class="action-btn btn-danger" 
                                                    title="Borrar usuario"
                                                    onclick="deleteModelCar('${car.id}', '${car.modelo}')">
                                            <i class="fa-solid fa-trash"></i>
                                            </button>
                                            <button class="action-btn btn-warning" 
                                                    title="Editar usuario"
                                                    onclick="editModelCar('${car.id}')">
                                            <i class="fa-solid fa-pen-to-square"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    `;
    })
}

// *INFO: BUSCADOR POR MODELO DE AUTO
searchInputModelCarHTML.addEventListener('keyup', (evento) => {
    const inputVaue = evento.target.value.toLowerCase();
    const modelCarFilter = modelCarsArray.filter((modelCar) => {
        const marcaModelCar = modelCar.marca.toLowerCase();
        const modeloModelCar = modelCar.modelo.toLowerCase();
        // Buscamos por marca y modelo
        if(marcaModelCar.includes(inputVaue) || modeloModelCar.includes(inputVaue)){
            return true;
        } else {
            return false;
        }
    })
    printModelCars(modelCarFilter);
})

// *INFO: LIMPIAMOS EL FORMULARIO DE CERO
function resetModelCarForm() {
    modelCarsFormHTML.reset();

    subtitle.innerText = 'Registra un Vehículo';
    message.innerText = 'Registra un vehículo en la flota.';
    submitButton.classList.remove('btn-edit');
    submitButton.innerText = 'Registrar Vehículo';

    modelCarsFormHTML.elements.marca.focus();
}

// *INFO: ACTUALIZAMOS EL LOCAL STORAGE
function updateLocalStorage(){
    localStorage.setItem("modelCars", JSON.stringify(modelCarsArray));
}

// *INFO: ELIMINAMOS UN VEHÍCULO
function deleteModelCar(ID, Model) {
    Swal.fire({
        title: `Estas seguro que quieres borrar ${Model}?`,
        text: "No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, borralo!"
    }).then((result) => {
        if (result.isConfirmed) {

            const indice = modelCarsArray.findIndex( modelCar => modelCar.id === ID);
            modelCarsArray.splice(indice,1);
            printModelCars(modelCarsArray);
            updateLocalStorage();

            Swal.fire({
            title: "Eliminado!",
            text: "El usuario ha sido eliminado.",
            icon: "success"
            });
        }
    });
}

// *INFO: AGREGAMOS UN NUEVO MODELO
modelCarsFormHTML.addEventListener("submit", (evt) => {
    evt.preventDefault();

    const el = evt.target.elements;

    // Verificamos su ya existe el mismo modelo
    const modelExit = modelCarsArray.find((modelCar) => {
        if(modelCar.modelo === evt.target.elements.modelo.value){
            return true;
        }
        return false;
    })

    if(modelExit && el.id.value !== modelExit.id){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El modelo ya se encuentra registrado.!',
        })
        return;
    }

    // TRUE: En el caso que si exista ID (EDITAR)
    // FALSE: En el caso que no exista ID (CREA)
    const id = el.id.value ? el.id.value : crypto.randomUUID();

    const vehiculo = {
        id: id,
        marca: brandsArray[el.marca.value],
        modelo: el.modelo.value,
        motor: el.motor.value,
        anio: new Date(el.anio.value).getTime(),
        transmision: el.transmision.value, // Automático
        combustible: el.combustible.value, // Diesel
        tipo: el.tipo.value, // Convertible, Sedan, Eléctrico, Supercar, SUV, Ultra Luxury
        asientos: el.asientos.value,
        precio_24h: el.precio_24h.value,
        active: el.active.checked,
        autoImg: el.autoImg.value,
        descripcion: el.descripcion.value,
    };

    // Tenemos que realizar dos acciones:
    // 1. Agregar un nuevo vehículo
    // 2. Editar un vehiculo, donde reemplazaremos la info del usuario
    if(el.id.value){
        // EDITAR
        const indice = modelCarsArray.findIndex( modelcar => {
            if(modelcar.id === el.id.value){
                return true;
            }
        })

        modelCarsArray[indice] = vehiculo;

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Vehiculo Editado",
            text: 'Los datos del vehiculo fueron actualizados correctamente.',
            showConfirmButton: false,
            timer: 1500
        });

    } else {
        // AGREGAR
        modelCarsArray.push(vehiculo);

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Vehiculo Agregado",
            text: 'El vehiculo se creo correctamente.',
            showConfirmButton: false,
            timer: 1500
        });
    }

    printModelCars(modelCarsArray);
    updateLocalStorage();
    resetModelCarForm();
})

// *INFO: EDITAR ALGUN VEHICULO
function editModelCar(idSearch){
    // Buscamos el usuario
    const modelCarEdit = modelCarsArray.find((car) => {
        if(car.id === idSearch){
            return true;
        }
    })

    // CLAUSULA GUARDA: Indicamos que el vehiculos no fue encontrado
    if(!modelCarEdit){
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'El vehiculo a editar no existe!',
        })
        return;
    }

    // Relenar el formulario con los datos del vehiculo a editar
    const el = modelCarsFormHTML.elements;

    el.id.value = modelCarEdit.id;
    el.marca.value = (modelCarEdit.marca.id - 1);
    el.modelo.value = modelCarEdit.modelo;
    el.motor.value = modelCarEdit.motor;
    el.anio.value = formatDateInput(modelCarEdit.anio);
    el.transmision.value = modelCarEdit.transmision; // Automático
    el.combustible.value = modelCarEdit.combustible; // Diesel
    el.tipo.value = modelCarEdit.tipo; // Convertible, Sedan, Eléctrico, Supercar, SUV, Ultra Luxury
    el.asientos.value = modelCarEdit.asientos;
    el.precio_24h.value = modelCarEdit.precio_24h;
    el.active.checked = modelCarEdit.active;
    el.autoImg.value = modelCarEdit.autoImg;
    el.descripcion.value = modelCarEdit.descripcion;

    // Cambiamos el button a editar vehiculo
    subtitle.innerText = 'Editar un Vehículo';
    message.innerText = 'Edita un vehículo con su identificador único.';
    submitButton.classList.add('btn-edit');
    submitButton.innerText = 'Editar Vehículo';
}