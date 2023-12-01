// *INFO: PRINTS DE LOS MODELS

const modelCarsArray = JSON.parse(localStorage.getItem("modelCars")) || [];
const brandsArray = JSON.parse(localStorage.getItem("brands")) || [];
const typeCarsArray = JSON.parse(localStorage.getItem("typeCars")) || [];
const testimonialsArray = JSON.parse(localStorage.getItem("testimonials")) || [];

// *INFO: Obtenemos la seccion de "Conduce ahora"
const driveNowHTML = document.getElementById("drive-now-container");

// *INFO: Obtenemos la seccion de "Vehículos destacados"
const featuredVehiclesHTML = document.getElementById("featured-vehicles-container");

// *INFO: Obtenemos la seccion de "Buscar por marca"
const SearchByBrandHTML = document.getElementById("search-by-brand-container");

// *INFO: Obtenemos la seccion de "Buscar por tipo"
const SearchByTypeCarsHTML = document.getElementById("search-by-typeCars-container");

// *INFO: Obtenemos la seccion de "Reseñas recientes"
const RecentTestimonialsHTML = document.getElementById("card-testimonial-container");

printFirstCard(modelCarsArray, driveNowHTML);
printSecondCard(modelCarsArray, featuredVehiclesHTML);
printBrandCard(brandsArray, SearchByBrandHTML);
printtypeCarsCard(typeCarsArray, SearchByTypeCarsHTML);
printTestimonialCard(testimonialsArray, RecentTestimonialsHTML);

function hexToRGB(hex){
    //  convertimos hex a rgb
  // 3 digits
  if (hex.length === 4) {
    r = "0x" + hex[1] + hex[1];
    g = "0x" + hex[2] + hex[2];
    b = "0x" + hex[3] + hex[3];

  // 6 digits
  } else if (hex.length === 7) {
    r = "0x" + hex[1] + hex[2];
    g = "0x" + hex[3] + hex[4];
    b = "0x" + hex[5] + hex[6];
  }
  
  // Make r, g, and b fractions of 1
  r /= 255;
  g /= 255;
  b /= 255;

  // Find greatest and smallest channel values
  let cmin = Math.min(r,g,b),
  cmax = Math.max(r,g,b),
  delta = cmax - cmin,
  h = 0;

  // Calculate hue
  // No difference
  if (delta == 0)
    h = 0;
  // Red is max
  else if (cmax == r)
    h = ((g - b) / delta) % 6;
  // Green is max
  else if (cmax == g)
    h = (b - r) / delta + 2;
  // Blue is max
  else
    h = (r - g) / delta + 4;

  h = Math.round(h * 60);
    
  // Make negative hues positive behind 360°
  if (h < 0){
      h += 360;
  }
  return h;
}

function getPastelHigthColor(hex){
  hex = hex.toString();
  hue = hexToRGB(hex);
  // Calculate lightness
  l = 96;
  // Calculate saturation
  s = 100;
  return "hsl(" + hue + "," + s + "%," + l + "%)";
}

function getPastelStrongColor(hex){
  hex = hex.toString();
  hue = hexToRGB(hex);
  // Calculate lightness
  l = 90;
  // Calculate saturation
  s = 100;
  return "hsl(" + hue + "," + s + "%," + l + "%)";
}

function goProductDetail(id){
  localStorage.setItem("currentModelCar", id);
  window.location.href = '/pages/product-detail/product-detail.html';
}

function printFirstCard(listModelCars, containerHTML){
  containerHTML.innerHTML = '';
  listModelCars.forEach(car => {
    containerHTML.innerHTML += `
                                <a onclick=goProductDetail(${car.id})>
                                  <article class="card-cars-first">
                                    <header style="background-color: ${getPastelHigthColor(car.color)};" class="card-first-header">
                                      <div class="card-first-info">
                                        <img class="card-first-logo" src="${car.marca.isoTipo}" alt="Logo ${car.logoImg}">
                                        <div class="card-first-name">
                                          <h2 class="card-first-make">${car.marca.marca}</h2>
                                          <p class="card-first-model">${car.modelo}</p>
                                        </div>
                                      </div>
                                      <img class="card-first-img" src="${car.autoImg}" alt="${car.modelo}">
                                    </header>
                                    <div style="background-color: ${getPastelStrongColor(car.color)};" class="card-first-body">
                                      <div class="card-first-features">
                                        <div class="card-first-seats">
                                          <i class="fa-regular fa-user"></i>
                                          <p>${car.asientos}</p>
                                        </div>
                                        <div class="card-first-transmission">
                                          <i class="fa-solid fa-retweet"></i>
                                          <p>${car.transmision}</p>
                                        </div>
                                        <div class="card-first-fuel">
                                          <i class="fa-solid fa-droplet"></i>
                                          <p>${car.combustible}</p>
                                        </div>
                                        <div class="card-first-type">
                                          <i class="fa-solid fa-car-side"></i>
                                          <p>${car.tipo.tipo}</p>
                                        </div>
                                      </div>
                                      <div class="card-first-price">
                                        <i class="text-price fa-solid fa-dollar-sign">${car.precio_24h}</i>
                                        <p>/día</p>
                                      </div>
                                    </div>
                                  </article>
                                </a>
                                `;
    
  });
}


function printSecondCard(listModelCars, containerHTML){
  containerHTML.innerHTML = '';
  listModelCars.forEach(car => {
    containerHTML.innerHTML += `
                                <article class="card-cars-second">
                                  <header class="card-cars-second-header">
                                    <div class="card-second-info">
                                      <img class="card-second-logo" src="${car.marca.isoTipo}" alt="Logo ${car.logoImg}">
                                      <div class="card-second-name">
                                        <h2 class="card-second-make">${car.marca.marca}</h2>
                                        <p class="card-second-model">${car.modelo}</p>
                                      </div>
                                    </div>
                                    <img class="card-second-img" src="${car.autoImg}" alt="${car.modelo}">
                                  </header>
                                  <div class="card-second-body">
                                    <div class="card-second-features">
                                      <div class="card-tag card-second-seats">
                                        <i class="fa-regular fa-user"></i>
                                        <p>${car.asientos}</p>
                                      </div>
                                      <div class="card-tag card-second-transmission">
                                        <i class="fa-solid fa-retweet"></i>
                                        <p>${car.transmision}</p>
                                      </div>
                                      <div class="card-tag card-second-fuel">
                                        <i class="fa-solid fa-droplet"></i>
                                        <p>${car.combustible}</p>
                                      </div>
                                      <div class="card-tag card-second-type">
                                        <i class="fa-solid fa-car-side"></i>
                                        <p>${car.tipo.tipo}</p>
                                      </div>
                                    </div>
                                    <p class="card-second-description">${car.descripcion}</p>
                                    <div class="card-second-values">
                                      <div class="card-second-date">13/09/2023</div>
                                      <div class="card-second-price">
                                        <i class="text-second-price fa-solid fa-dollar-sign">${car.precio_24h}</i>
                                        <p>/día</p>
                                      </div>
                                    </div>
                                  </div>
                                  <footer class="card-second-footer">
                                    <a class="card-second-btn" onclick=goProductDetail(${car.id})>Ver más</a>
                                    <button class="card-second-btn" onclick=goProductDetail(${car.id})>Alquilar</button>
                                  </footer>
                                </article>
                                `;
  });
}

function printBrandCard(listBrands, containerHTML){
  containerHTML.innerHTML = '';
  listBrands.forEach(brand => {
    containerHTML.innerHTML += `               
                                <article class="card-simple">
                                  <header class="card-simple-header">
                                    <img class="card-simple-img img-grayscale-filter" src="${brand.isoTipo}"
                                      alt="Logo ${brand.marca}">
                                  </header>
                                  <div class="card-simple-body">
                                    <h3 class="card-simple-title">${brand.marca}</h3>
                                  </div>
                                </article>
                                `;
  });
}

function printTestimonialCard(listBrands, containerHTML){
  containerHTML.innerHTML = '';
  listBrands.forEach(brand => {
    containerHTML.innerHTML += `               
                                <article class="card-testimonial">
                                  <header class="card-testimonial-header">
                                    <p class="card-testimonial-review">“ ${brand.testimonio} ”</p>
                                  </header>
                                  <footer class="card-testimonial-footer">
                                    <p class="card-testimonial-date">${formatDateOutput(brand.fecha)}</p>
                                    <h4 class="card-testimonial-autor">- ${brand.autor}</h4>
                                  </footer>
                                </article>
                                `;
  });
}

function printtypeCarsCard(listBrands, containerHTML){
  containerHTML.innerHTML = '';
  listBrands.forEach(brand => {
    containerHTML.innerHTML += `               
                                <article class="card-simple">
                                  <header class="card-simple-header">
                                    <img class="card-simple-img" src="${brand.imagen}" alt="Type ${brand.tipo}">
                                  </header>
                                  <div class="card-simple-body">
                                    <h3 class="card-simple-title">${brand.tipo}</h3>
                                  </div>
                                </article>
                                `;
  });
}