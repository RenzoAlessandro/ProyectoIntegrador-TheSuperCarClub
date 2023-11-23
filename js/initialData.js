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
    {
        id: '1',
        marca: 'Porsche',
        modelo: '718 Cayman',
        motor: '4.0L V6',
        anio: new Date('2016-01-01').getTime(),
        transmision: 'Mécanico', // Automático
        combustible: 'Gasolina', // Diesel
        tipo: 'Deportivo', // Convertible, Sedan, Eléctrico, Supercar, SUV, Ultra Luxury
        sede: 'Alemania',
        asientos: 2,
        precio_24h: 986,
        active: true,
        logoImg: '/assets/Brands/Brand-Porsche.png',
        autoImg: '/assets/Cars/Porsche/porsche-718-cayman.webp',
        descripcion: 'Los modelos 718 GTS 4.0 cubren una amplia gama de prestaciones. Garantía de ello es el motor atmosférico de 4.0 litros y 6 cilindros capaz de desarrollar unos rotundos 400 CV (294 kW) a 7.000 rpm. El par máximo: 420 Nm. En combinación con el PDK: 430 Nm. Aceleración de 0 a 100 km/h: 4,0 segundos con PDK y Launch Control. Velocidad máxima: 288 km/h. En combinación con una caja de cambios manual de 6 velocidades, incluso hasta 293 km/h.'
    },

    {
        id: '2',
        marca: 'Porsche',
        modelo: '911',
        motor: '4.0L V6',
        anio: new Date('2016-01-01').getTime(),
        transmision: 'Mécanico', // Automático
        combustible: 'Gasolina', // Diesel
        tipo: 'Deportivo', // Convertible, Sedan, Eléctrico, Supercar, SUV, Ultra Luxury
        sede: 'Alemania',
        asientos: 2,
        precio_24h: 986,
        active: true,
        logoImg: '/assets/Brands/Brand-Porsche.png',
        autoImg: '/assets/Cars/Porsche/porsche-718-cayman.webp',
        descripcion: 'Los modelos 718 GTS 4.0 cubren una amplia gama de prestaciones. Garantía de ello es el motor atmosférico de 4.0 litros y 6 cilindros capaz de desarrollar unos rotundos 400 CV (294 kW) a 7.000 rpm. El par máximo: 420 Nm. En combinación con el PDK: 430 Nm. Aceleración de 0 a 100 km/h: 4,0 segundos con PDK y Launch Control. Velocidad máxima: 288 km/h. En combinación con una caja de cambios manual de 6 velocidades, incluso hasta 293 km/h.'
    },

    {
        id: '3',
        marca: 'Porsche',
        modelo: 'Impresa',
        motor: '4.0L V6',
        anio: new Date('2016-01-01').getTime(),
        transmision: 'Mécanico', // Automático
        combustible: 'Gasolina', // Diesel
        tipo: 'Deportivo', // Convertible, Sedan, Eléctrico, Supercar, SUV, Ultra Luxury
        sede: 'Alemania',
        asientos: 2,
        precio_24h: 986,
        active: true,
        logoImg: '/assets/Brands/Brand-Porsche.png',
        autoImg: '/assets/Cars/Porsche/porsche-718-cayman.webp',
        descripcion: 'Los modelos 718 GTS 4.0 cubren una amplia gama de prestaciones. Garantía de ello es el motor atmosférico de 4.0 litros y 6 cilindros capaz de desarrollar unos rotundos 400 CV (294 kW) a 7.000 rpm. El par máximo: 420 Nm. En combinación con el PDK: 430 Nm. Aceleración de 0 a 100 km/h: 4,0 segundos con PDK y Launch Control. Velocidad máxima: 288 km/h. En combinación con una caja de cambios manual de 6 velocidades, incluso hasta 293 km/h.'
    },

    


];

if(localStorage.getItem("modelCars") === null){
    localStorage.setItem("modelCars", JSON.stringify(modelCarsStart));
}