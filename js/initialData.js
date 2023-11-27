const typeCars = [
    {
        id: 1,
        tipo: 'Deportivo',
        imagen: '/assets/Types/Type-Coupe-Sports.jpg',
    },
    {
        id: 2,
        tipo: 'Convertible',
        imagen: '/assets/Types/Type-Convertible.jpg',
    },
    {
        id: 3,
        tipo: 'Sedan | 4 Puertas',
        imagen: '/assets/Types/Type-Sedan-4-Door.jpg',
    },
    {
        id: 4,
        tipo: 'Eléctrico',
        imagen: '/assets/Types/Type-EV.png',
    },
    {
        id: 5,
        tipo: 'Supercar',
        imagen: '/assets/Types/Type-Supercar.jpg',
    },
    {
        id: 6,
        tipo: 'SUV',
        imagen: '/assets/Types/Type-SUV.png',
    },
    {
        id: 7,
        tipo: 'Ultra Luxury',
        imagen: '/assets/Types/Type-Ultra-Luxury.jpg',
    },
];

if(localStorage.getItem("typeCars") === null) {
    localStorage.setItem("typeCars", JSON.stringify(typeCars));
}

const brandsStart = [
    {
        id: 1,
        marca: 'Alfa Romeo',
        sede: 'Italia',
        isoTipo: '/assets/Brands/isotipo-Alfa-Romeo.png',
        logoTipo: '/assets/Brands/logotipo-Alfa-Romeo.png',
        imagoTipo: '/assets/Brands/imagotipo-Alfa-Romeo.png',
    },
    {
        id: 2,
        marca: 'Aston Martin',
        sede: 'Reino Unido',
        isoTipo: '/assets/Brands/isotipo-Aston-Martin.png',
        logoTipo: '/assets/Brands/logotipo-Aston-Martin.png',
        imagoTipo: '/assets/Brands/imagotipo-Aston-Martin.png',
    },
    {
        id: 3,
        marca: 'Audi',
        sede: 'Alemania',
        isoTipo: '/assets/Brands/isotipo-Audi.png',
        logoTipo: '/assets/Brands/logotipo-Audi.png',
        imagoTipo: '/assets/Brands/imagotipo-Audi.png',
    },
    {
        id: 4,
        marca: 'BMW',
        sede: 'Alemania',
        isoTipo: '/assets/Brands/isotipo-BMW.png',
        logoTipo: '/assets/Brands/logotipo-BMW.png',
        imagoTipo: '/assets/Brands/imagotipo-BMW.png',
    },
    {
        id: 5,
        marca: 'Bugatti',
        sede: 'Francia',
        isoTipo: '/assets/Brands/isotipo-Bugatti.png',
        logoTipo: '/assets/Brands/logotipo-Bugatti.png',
        imagoTipo: '/assets/Brands/imagotipo-Bugatti.png',
    },
    {
        id: 6,
        marca: 'Ferrari',
        sede: 'Italia',
        isoTipo: '/assets/Brands/isotipo-Ferrari.png',
        logoTipo: '/assets/Brands/logotipo-Ferrari.png',
        imagoTipo: '/assets/Brands/imagotipo-Ferrari.png',
    },
    {
        id: 7,
        marca: 'Jaguar',
        sede: 'Reino Unido',
        isoTipo: '/assets/Brands/isotipo-Jaguar.png',
        logoTipo: '/assets/Brands/logotipo-Jaguar.png',
        imagoTipo: '/assets/Brands/imagotipo-Jaguar.png',
    },
    {
        id: 8,
        marca: 'Koenigsegg',
        sede: 'Suecia',
        isoTipo: '/assets/Brands/isotipo-Koenigsegg.png',
        logoTipo: '/assets/Brands/logotipo-Koenigsegg.png',
        imagoTipo: '/assets/Brands/imagotipo-Koenigsegg.png',
    },
    {
        id: 9,
        marca: 'Lamborghini',
        sede: 'Italia',
        isoTipo: '/assets/Brands/isotipo-Lamborghini.png',
        logoTipo: '/assets/Brands/logotipo-Lamborghini.png',
        imagoTipo: '/assets/Brands/imagotipo-Lamborghini.png',
    },
    {
        id: 10,
        marca: 'Maserati',
        sede: 'Italia',
        isoTipo: '/assets/Brands/isotipo-Maserati.png',
        logoTipo: '/assets/Brands/logotipo-Maserati.png',
        imagoTipo: '/assets/Brands/imagotipo-Maserati.png',
    },
    {
        id: 11,
        marca: 'McLaren',
        sede: 'Reino Unido',
        isoTipo: '/assets/Brands/isotipo-McLaren.png',
        logoTipo: '/assets/Brands/logotipo-McLaren.png',
        imagoTipo: '/assets/Brands/imagotipo-McLaren.png',
    },
    {
        id: 12,
        marca: 'Mercedes Benz',
        sede: 'Alemania',
        isoTipo: '/assets/Brands/isotipo-Mercedes-Benz.png',
        logoTipo: '/assets/Brands/logotipo-Mercedes-Benz.png',
        imagoTipo: '/assets/Brands/imagotipo-Mercedes-Benz.png',
    },
    {
        id: 13,
        marca: 'Pagani',
        sede: 'Italia',
        isoTipo: '/assets/Brands/isotipo-Pagani.png',
        logoTipo: '/assets/Brands/logotipo-Pagani.png',
        imagoTipo: '/assets/Brands/imagotipo-Pagani.png',
    },
    {
        id: 14,
        marca: 'Porsche',
        sede: 'Alemania',
        isoTipo: '/assets/Brands/isotipo-Porsche.png',
        logoTipo: '/assets/Brands/logotipo-Porsche.png',
        imagoTipo: '/assets/Brands/imagotipo-Porsche.png',
    },
];

if(localStorage.getItem("brands") === null) {
    localStorage.setItem("brands", JSON.stringify(brandsStart));
}

const usersStart = [
    {
        firstName: 'Renzo Alessandro',
        lastName: 'Sucari Velasquez',
        age: 30,
        email: 'admin@admin.com',
        id: '1',
        active: true,
        password: 'admin',
        bornDate: new Date('1996-02-14').getTime(),
        location: 'San Francisco, CA',
        image: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
        role: 'ADMIN_ROLE'
    },
    {
        firstName: 'Joaquín Daniel',
        lastName: 'Ramírez García',
        age: 30,
        email: 'joaquin.ramirez@example.com',
        id: '2',
        active: true,
        password: 'password123',
        bornDate: new Date('1993-01-01').getTime(),
        location: 'New York, NY',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/7/71/Mk8iconyoshi.png?width=1280',
        role: 'CLIENT_ROLE'
    },
    {
        firstName: 'Santiago Vicente',
        lastName: 'Vázquez Garrido',
        age: 25,
        email: 'santiago.vazquez@example.com',
        id: '3',
        active: false,
        password: 'password456',
        bornDate: new Date('1998-05-05').getTime(),
        location: 'Los Angeles, CA',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/f/f5/Mk8icondaisy.png?width=1280',
        role: 'CLIENT_ROLE'
    },
    {
        firstName: 'Lucía Paula',
        lastName: 'Castillo Fernández',
        age: 35,
        email: 'lucia.castillo@example.com',
        id: '4',
        active: true,
        password: 'password789',
        bornDate: new Date('1988-08-08').getTime(),
        location: 'Miami, FL',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/1/1d/Mk8icontoadette.png?width=325',
        role: 'CLIENT_ROLE'
    },
    {
        firstName: 'Roberto Carlos',
        lastName: 'González García',
        age: 40,
        email: 'roberto.gonzalez@example.com',
        id: '5',
        active: false,
        password: 'password101',
        bornDate: new Date('1983-04-10').getTime(),
        location: 'Chicago, IL',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/d/d1/Mk8iconrosalina.png?width=1280',
        role: 'CLIENT_ROLE'
    },
    {
        firstName: 'Yolanda Laura',
        lastName: 'Martín Serrano',
        age: 28,
        email: 'yolanda.martin@example.com',
        id: '6',
        active: true,
        password: 'password202',
        bornDate: new Date('1995-02-15').getTime(),
        location: 'Houston, TX',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/5/59/Mk8iconpeach.png?width=325',
        role: 'CLIENT_ROLE'
    },
    {
        firstName: 'Diego Sergio',
        lastName: 'Rodríguez Martínez',
        age: 34,
        email: 'diego.rodríguez@example.com',
        id: '7',
        active: false,
        password: 'password303',
        bornDate: new Date('1989-07-07').getTime(),
        location: 'San Francisco, CA',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/b/bf/Mk8iconmario.png?width=325',
        role: 'CLIENT_ROLE'
    },
    {
        firstName: 'Laura Patricia',
        lastName: 'Vázquez Iglesias',
        age: 22,
        email: 'laura.vazquez@example.com',
        id: '8',
        active: true,
        password: 'password404',
        bornDate: new Date('2001-11-11').getTime(),
        location: 'Boston, MA',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/2/2d/Mk8icondk.png?width=325',
        role: 'CLIENT_ROLE'
    },
    {
        firstName: 'Carlos David',
        lastName: 'Santos Ortíz',
        age: 45,
        email: 'carlos.santos@example.com',
        id: '9',
        active: false,
        password: 'password505',
        bornDate: new Date('1978-12-19').getTime(),
        location: 'Dallas, TX',
        image: "https://m.media-amazon.com/images/I/81wNRtDaTXL.png",
        role: 'CLIENT_ROLE'
    },
    {
        firstName: 'Lucía María',
        lastName: 'García Caño',
        age: 29,
        email: 'lucía.garcia@example.com',
        id: '10',
        active: true,
        password: 'password606',
        bornDate: new Date('1994-06-24').getTime(),
        location: 'San Diego, CA',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/3/3a/Mk8iconkoopa.png?width=325',
        role: 'CLIENT_ROLE'
    },
    {
        firstName: 'Jaime Alfonso',
        lastName: 'Núñez Medina',
        age: 31,
        email: 'jaime.nunez@example.com',
        id: '11',
        active: false,
        password: 'password707',
        bornDate: new Date('1992-03-03').getTime(),
        location: 'Denver, CO',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/b/b7/Mk8iconbowser.png?width=325',
        role: 'CLIENT_ROLE'
    },
    {
        firstName: 'Santiago Iván',
        lastName: 'Álvarez Torres',
        age: 30,
        email: 'santiago.alvarez@example.com',
        id: '12',
        active: true,
        password: 'password123',
        bornDate: new Date('1993-01-01').getTime(),
        location: 'New York, NY',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/7/71/Mk8iconyoshi.png?width=1280',
        role: 'CLIENT_ROLE'
    },
    {
        firstName: 'Ramón Pablo',
        lastName: 'Blanco Pérez',
        age: 25,
        email: 'ramon.blanco@example.com',
        id: '13',
        active: false,
        password: 'password456',
        bornDate: new Date('1998-05-05').getTime(),
        location: 'Los Angeles, CA',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/f/f5/Mk8icondaisy.png?width=1280',
        role: 'CLIENT_ROLE'
    },
    {
        firstName: 'María Ignacio',
        lastName: 'Navarro Martín',
        age: 35,
        email: 'maria.navarro@example.com',
        id: '14',
        active: true,
        password: 'password789',
        bornDate: new Date('1988-08-08').getTime(),
        location: 'Miami, FL',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/1/1d/Mk8icontoadette.png?width=325',
        role: 'CLIENT_ROLE'
    },
    {
        firstName: 'Andrea Concepción',
        lastName: 'Blanco Muñoz',
        age: 40,
        email: 'andrea.blanco@example.com',
        id: '15',
        active: false,
        password: 'password101',
        bornDate: new Date('1983-04-10').getTime(),
        location: 'Chicago, IL',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/d/d1/Mk8iconrosalina.png?width=1280',
        role: 'CLIENT_ROLE'
    },
    {
        firstName: 'Mercedes Paula',
        lastName: 'Guerrero Núñez',
        age: 28,
        email: 'mercedes.guerrero@example.com',
        id: '16',
        active: true,
        password: 'password202',
        bornDate: new Date('1995-02-15').getTime(),
        location: 'Houston, TX',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/5/59/Mk8iconpeach.png?width=325',
        role: 'CLIENT_ROLE'
    },
    {
        firstName: 'Rocío Alicia',
        lastName: 'Ramos Delgado',
        age: 34,
        email: 'rocio.ramos@example.com',
        id: '17',
        active: false,
        password: 'password303',
        bornDate: new Date('1989-07-07').getTime(),
        location: 'San Francisco, CA',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/b/bf/Mk8iconmario.png?width=325',
        role: 'CLIENT_ROLE'
    },
    {
        firstName: 'Javier Joaquín',
        lastName: 'Ortega Ramírez',
        age: 22,
        email: 'javier.ortega@example.com',
        id: '18',
        active: true,
        password: 'password404',
        bornDate: new Date('2001-11-11').getTime(),
        location: 'Boston, MA',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/2/2d/Mk8icondk.png?width=325',
        role: 'CLIENT_ROLE'
    },
    {
        firstName: 'Emilio Enrique',
        lastName: 'Iglesias Alonso',
        age: 45,
        email: 'emilio.iglesias@example.com',
        id: '19',
        active: false,
        password: 'password505',
        bornDate: new Date('1978-12-19').getTime(),
        location: 'Dallas, TX',
        image: "https://m.media-amazon.com/images/I/81wNRtDaTXL.png",
        role: 'CLIENT_ROLE'
    },
    {
        firstName: 'Juan Gabriel',
        lastName: 'Alonso Delgado',
        age: 29,
        email: 'juan.alonso@example.com',
        id: '20',
        active: true,
        password: 'password606',
        bornDate: new Date('2015-12-04').getTime(),
        location: 'San Diego, CA',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/3/3a/Mk8iconkoopa.png?width=325',
        role: 'CLIENT_ROLE'
    }
];

if(localStorage.getItem("users") === null) {
    localStorage.setItem("users", JSON.stringify(usersStart));
}

const modelCarsStart = [
    // <option value="0">Alfa Romeo</option>
    {
        id: '1',
        marca: brandsStart[0],
        modelo: 'Giulia',
        motor: '2.2 JTDM 160CV AT RWD',
        anio: new Date('2023-01-01').getTime(),
        transmision: 'Mecánico',
        combustible: 'Gasolina',
        tipo: 'Sedan',
        asientos: 4,
        precio_24h: 856,
        active: true,
        autoImg: '/assets/Cars/Alfa-Romeo/Alfaromeo-Giulia.png',
        descripcion: 'Diseño italiano al más puro estilo Alfa Romeo. Nivel 2 de conducción autónoma. Equilibrio perfecto para una dinámica de conducción sin concesiones. Mejor sensación de la dirección, máximo confort'
    },
    {
        id: '2',
        marca: brandsStart[0],
        modelo: 'Stelvio',
        motor: '2.2 JTDM 160CV AT RWD',
        anio: new Date('2023-01-01').getTime(),
        transmision: 'Automático',
        combustible: 'Gasolina',
        tipo: 'SUV',
        asientos: 5,
        precio_24h: 931,
        active: true,
        autoImg: '/assets/Cars/Alfa-Romeo/Alfaromeo-Stelvio.png',
        descripcion: 'El SUV, según Alfa Romeo. Nivel 2 de conducción autónoma. Equilibrio óptimo para una dinámica de conducción sin concesiones. Mejor sensación de la dirección, máximo confort'
    },
    {
        id: '3',
        marca: brandsStart[0],
        modelo: 'Tonale',
        motor: '1.6 130CV',
        anio: new Date('2023-01-01').getTime(),
        transmision: 'Automático',
        combustible: 'Diesel',
        tipo: 'SUV',
        asientos: 5,
        precio_24h: 931,
        active: true,
        autoImg: '/assets/Cars/Alfa-Romeo/Alfaromeo-Tonale.png',
        descripcion: 'La tecnología NFT permite hacer un seguimiento del ciclo de vida del coche. Con los últimos sistemas avanzados de asistencia al conductor (ADAS). Equipado con tecnología brake-by-wire.'
    },
    // <option value="1">Aston Martin</option>
    // <option value="2">Audi</option>
    {
        id: '4',
        marca: brandsStart[2],
        modelo: 'A6',
        motor: '2.5 220CV',
        anio: new Date('2023-01-01').getTime(),
        transmision: 'Automático',
        combustible: 'Gasolina',
        tipo: 'Sedan',
        asientos: 5,
        precio_24h: 931,
        active: true,
        autoImg: '/assets/Cars/Audi/Audi-A6.png',
        descripcion: 'Desde el Audi Singleframe ensanchado y las entradas de aire laterales con molduras cromadas deportivas hasta los estrechos faros delanteros, el frontal de Audi A6 Sedán es totalmente progresivo. La línea de cintura más marcada con las fuertes curvas sobre los pasos de rueda enfatiza la arquitectura quattro. Los espejos exteriores se ubican sobre los rieles de las puertas para dar una apariencia más deportiva.'
    },
    {
        id: '5',
        marca: brandsStart[2],
        modelo: 'Q8 Sportback e-tron',
        motor: '2.5 220CV',
        anio: new Date('2023-01-01').getTime(),
        transmision: 'Automático',
        combustible: 'Gasolina',
        tipo: 'Eléctrico',
        asientos: 5,
        precio_24h: 931,
        active: true,
        autoImg: '/assets/Cars/Audi/Audi-Q8-Sportback-e-tron.png',
        descripcion: 'Audi e-tron ha cumplido su papel pionero como el primer vehículo totalmente eléctrico. Ahora ha llegado el momento de incluirlo por su nombre en el portafolio de modelos Audi, como el Audi Q8 e-tron Sportback.'
    },
    {
        id: '6',
        marca: brandsStart[2],
        modelo: 'RS e-tron GT',
        motor: '2.5 220CV',
        anio: new Date('2023-01-01').getTime(),
        transmision: 'Automático',
        combustible: 'Gasolina',
        tipo: 'Eléctrico',
        asientos: 5,
        precio_24h: 931,
        active: true,
        autoImg: '/assets/Cars/Audi/Audi-RS-E-tron-GT.png',
        descripcion: 'La batería de iones de litio de 800 voltios integrada de forma plana ofrece un rendimiento extremadamente alto, tanto en la carga como durante la conducción. En combinación con el sistema de recuperación, se ha calculado una autonomía de hasta 472 km según el procedimiento de medición WLTP; Emisiones de CO₂ combinadas¹: 0 g/km (WLTP). Solo están disponibles para el vehículo los valores de consumo y emisiones según WLTP y no según NEDC).'
    },
    // <option value="3">BMW</option>
    {
        id: '7',
        marca: brandsStart[3],
        modelo: 'i4',
        motor: '3.5 387hp',
        anio: new Date('2023-01-01').getTime(),
        transmision: 'Automático',
        combustible: 'Gasolina',
        tipo: 'Eléctrico',
        asientos: 5,
        precio_24h: 931,
        active: true,
        autoImg: '/assets/Cars/BMW/BMW-i4.webp',
        descripcion: 'Como primer vehículo totalmente eléctrico, el Gran Coupé aúna el extraordinario dinamismo de BMW i4 con un elevado confort y una óptima aptitud para la vida diaria. Equipado con la tecnología BMW eDrive de quinta generación, el 5 puertas ofrece unos valores de potencia de hasta 400 kW/544 CV (BMW i4 M50). Su elevada autonomía de hasta 591 kilómetros* (BMW i4 eDrive40) y la oferta de cinco plazas completas lo hacen ideal para cualquier trayecto.'
    },
    {
        id: '8',
        marca: brandsStart[3],
        modelo: 'X2',
        motor: '3.5 387hp',
        anio: new Date('2023-01-01').getTime(),
        transmision: 'Automático',
        combustible: 'Gasolina',
        tipo: 'Eléctrico',
        asientos: 5,
        precio_24h: 931,
        active: true,
        autoImg: '/assets/Cars/BMW/BMW-X2.webp',
        descripcion: 'Absolutamente único y extraordinario. El BMW X2 es un modelo deportivo y atlético que ofrece unas prestaciones dinámicas y ágiles insuperables en esta categoría. Con un interior exclusivo y tecnologías innovadoras, es el protagonista de una nueva época. ¿Estás preparado?.'
    },
    {
        id: '9',
        marca: brandsStart[3],
        modelo: 'Z4 M40i',
        motor: '3.5 387hp',
        anio: new Date('2023-01-01').getTime(),
        transmision: 'Automático',
        combustible: 'Gasolina',
        tipo: 'Convertible',
        asientos: 5,
        precio_24h: 931,
        active: true,
        autoImg: '/assets/Cars/BMW/BMW-Z4-M40i.webp',
        descripcion: 'Abierto, plano y orientado al alto desempeño. Con su frontal amplio, llantas grandes, capó alargado y numerosos detalles inspirados en el mundo de la competición, el BMW Z4 M40i acelera el pulso ya a primera vista. Este Roadster de alto rendimiento despliega su carácter deportivo en todos los sentidos, entusiasma con su agilidad y garantiza el puro placer de conducir.'
    },
    // <option value="4">Bugatti</option>
    {
        id: '10',
        marca: brandsStart[4],
        modelo: 'Chiron',
        motor: 'W16 de 8 litros 1500 CV',
        anio: new Date('2016-01-01').getTime(),
        transmision: 'Automático',
        combustible: 'Gasolina',
        tipo: 'Supercar',
        asientos: 5,
        precio_24h: 931,
        active: true,
        autoImg: '/assets/Cars/Bugatti/Bugatti-Chiron.png',
        descripcion: 'El Bugatti Chiron es un hiperdeportivo de Bugatti, que reemplazó al Bugatti Veyron en 2016. El Bugatti Chiron se caracteriza por ser el vehículo más rápido del mundo, siendo capaz de sobrepasar los 490 kilómetros por hora.'
    },
    // <option value="5">Ferrari</option>
    {
        id: '11',
        marca: brandsStart[5],
        modelo: '812 Superfast',
        motor: '6.5 V12 799CV',
        anio: new Date('2016-01-01').getTime(),
        transmision: 'Automático',
        combustible: 'Gasolina',
        tipo: 'Deportivo',
        asientos: 5,
        precio_24h: 931,
        active: true,
        autoImg: '/assets/Cars/Ferrari/Ferrari-812.png',
        descripcion: 'El primer desafío, el más difícil, al que se enfrentó Ferrari cuando se centró en el desarrollo del nuevo Ferrari 812 Superfast era superar los límites que imponen sus propios logros. Este desafío se hace aún más complicado cuando la tarea entre manos implica el diseño de un nuevo motor de doce cilindros, la motorización que marcó el inicio de la historia del Cavallino Rampante en 1947.'
    },
    {
        id: '12',
        marca: brandsStart[5],
        modelo: 'Roma',
        motor: 'V8 620CV',
        anio: new Date('2016-01-01').getTime(),
        transmision: 'Automático',
        combustible: 'Gasolina',
        tipo: 'Deportivo',
        asientos: 5,
        precio_24h: 931,
        active: true,
        autoImg: '/assets/Cars/Ferrari/Ferrari-Roma.png',
        descripcion: 'El Ferrari Roma es el último coupé de la marca italiana, un modelo de elegante diseño inspirado en los años 60, con capacidad para cuatro ocupantes y con un motor V8 biturbo de 3,8 litros que desarrolla 620 CV de potencia.'
    },
    // <option value="6">Jaguar</option>
    // <option value="7">Koenigsegg</option>
    // <option value="8">Lamborghini</option>
    // <option value="9">Maserati</option>
    // <option value="10">McLaren</option>
    // <option value="11">Mercedes Benz</option>
    // <option value="12">Pagani</option>
    // <option value="13">Porsche</option>
    {
        id: '13',
        marca: brandsStart[13],
        modelo: '718 Cayman GT4 RS',
        motor: 'V8 620CV',
        anio: new Date('2016-01-01').getTime(),
        transmision: 'Automático',
        combustible: 'Gasolina',
        tipo: 'Deportivo',
        asientos: 5,
        precio_24h: 931,
        active: true,
        autoImg: '/assets/Cars/Porsche/porsche-718-cayman-gt4-rs.webp',
        descripcion: 'El Ferrari Roma es el último coupé de la marca italiana, un modelo de elegante diseño inspirado en los años 60, con capacidad para cuatro ocupantes y con un motor V8 biturbo de 3,8 litros que desarrolla 620 CV de potencia.'
    },
    {
        id: '14',
        marca: brandsStart[13],
        modelo: '718 Cayman GT4',
        motor: 'V8 620CV',
        anio: new Date('2016-01-01').getTime(),
        transmision: 'Automático',
        combustible: 'Gasolina',
        tipo: 'Deportivo',
        asientos: 5,
        precio_24h: 931,
        active: true,
        autoImg: '/assets/Cars/Porsche/porsche-718-cayman-gt4.webp',
        descripcion: 'El Ferrari Roma es el último coupé de la marca italiana, un modelo de elegante diseño inspirado en los años 60, con capacidad para cuatro ocupantes y con un motor V8 biturbo de 3,8 litros que desarrolla 620 CV de potencia.'
    },
    {
        id: '15',
        marca: brandsStart[13],
        modelo: '911 Turbo Cabriolet',
        motor: 'V8 620CV',
        anio: new Date('2016-01-01').getTime(),
        transmision: 'Automático',
        combustible: 'Gasolina',
        tipo: 'Deportivo',
        asientos: 5,
        precio_24h: 931,
        active: true,
        autoImg: '/assets/Cars/Porsche/porsche-911-turbo-cabriolet.webp',
        descripcion: 'El Ferrari Roma es el último coupé de la marca italiana, un modelo de elegante diseño inspirado en los años 60, con capacidad para cuatro ocupantes y con un motor V8 biturbo de 3,8 litros que desarrolla 620 CV de potencia.'
    },
];

if(localStorage.getItem("modelCars") === null){
    console.log(modelCarsStart);
    localStorage.setItem("modelCars", JSON.stringify(modelCarsStart));
}

const testimonialsStart = [
    {
        id: 1,
        testimonio: 'Llamé a The SuperCar Club - Car Rental a las 9:00 a. m. para preguntar sobre la disponibilidad del auto de mis sueños y me entregaron el Lamborghini a las 11:00 a. m. del mismo día. La transacción fue simple y fluida.',
        fecha: new Date('2023-06-09').getTime(),
        autor: 'Shawn H.',
    },
    {
        id: 2,
        testimonio: 'The SuperCar Club es una empresa increíble. Tenían el Lamborghini exacto que necesitábamos y estaba en perfectas condiciones. La empresa es muy hospitalaria y el proceso es sencillo. Nos explicaron todo con el coche e hicieron un recorrido extenso.',
        fecha: new Date('2022-09-14').getTime(),
        autor: 'Eugene S.',
    },
    {
        id: 3,
        testimonio: 'The SuperCar Club hizo un esfuerzo adicional por nuestra empresa (nunca mejor dicho). Fueron muy serviciales y la comunicación fue eficiente. Utilizamos el magnífico Rolls Royce Dawn para nuestro vídeo musical con gran éxito.',
        fecha: new Date('2022-03-04').getTime(),
        autor: 'Gianna C.',
    },
    {
        id: 4,
        testimonio: 'Si buscas coches de calidad y un buen servicio, no te equivocarás aquí. El mejor servicio de alquiler de coches en Perú, sin duda. Tercera vez que alquilo desde aquí, nunca me decepcionó.',
        fecha: new Date('2021-04-25').getTime(),
        autor: 'Ryan M.',
    },
    {
        id: 5,
        testimonio: 'La asistencia que recibí fue excelente. Alquilé un Mercedes S550 Cabriolet para el baile de graduación de mi hija y fueron muy serviciales. ¡Se los recomendaría a todos y los usaré nuevamente en el futuro!',
        fecha: new Date('2020-09-17').getTime(),
        autor: 'Cathy J.',
    },
];

if(localStorage.getItem("testimonials") === null){
    localStorage.setItem("testimonials", JSON.stringify(testimonialsStart));
}