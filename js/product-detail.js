const modelCarID = localStorage.getItem("currentModelCar") || 1;

const modelCarsArray = JSON.parse(localStorage.getItem("modelCars")) || [];

const productDetailHTML = document.getElementById("modelCar-detail");

printProductDetail(modelCarID, productDetailHTML);

function printProductDetail(carID, containerHTML){

    const productDetailCarExit = modelCarsArray.find((modelCar) => {
        if(modelCar.id === carID){
            return true;
        }
        return false;
    })

    if(!productDetailCarExit){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "El Modelo de Vehiculo no fue encontrado!",
        });
        return;
    }

    containerHTML.innerHTML = '';
    containerHTML.innerHTML = `
                                    <div  class="container-wallpaper">
                                        <p class="modelCar-text-background">${productDetailCarExit.marca.marca}</p>
                                        <img class="modelCar-img-body" src="${productDetailCarExit.autoImg}" alt="">
                                        
                                        <header class="detail-modelCars-header">
                                            <div class="detail-modelCars-brand-container">
                                                <img class="detail-modelCars-logo" src="${productDetailCarExit.marca.isoTipo}" alt="Logo Ferrari">
                                                <div class="detail-modelCars-brand">
                                                <h2 class="detail-modelCars-make">${productDetailCarExit.marca.marca}</h2>
                                                <p class="detail-modelCars-model">${productDetailCarExit.modelo}</p>
                                                </div>
                                            </div>
                                        </header>
                                        
                                        <section class="info-modelCar-footer">
                                            <div class="info-modelCar">
                                                <i class="fa-solid fa-car"></i>
                                                <h4>Motor</h4>
                                                <p>${productDetailCarExit.motor}</p>
                                            </div>
                                            <div class="info-modelCar">
                                                <i class="fa-solid fa-gauge-high"></i>
                                                <h4>Vel. Max.</h4>
                                                <p>${productDetailCarExit.velocidadMax} km/h</p>
                                            </div>
                                            <div class="info-modelCar">
                                                <i class="fa-solid fa-chart-line"></i>
                                                <h4>0 - 100 km/h</h4>
                                                <p>${productDetailCarExit.de0a60MPH} km/h</p>
                                            </div>
                                            <div class="info-modelCar">
                                                <i class="fa-solid fa-horse"></i>
                                                <h4>HP</h4>
                                                <p>${productDetailCarExit.horsepowerHP}</p>
                                            </div>
                                            <div class="info-modelCar">
                                                <i class="fa-solid fa-dollar-sign"></i>
                                                <h4>Precio/24h</h4>
                                                <p>$ ${productDetailCarExit.precio_24h}</p>
                                            </div>
                                            <div class="info-modelCar">
                                                <a class="reservar-btn" href="/index.html">Reservar</a>
                                            </div>
                                        </section>
                                    </div>
                                    `;
}