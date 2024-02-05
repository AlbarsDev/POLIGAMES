const express = require('express');

//Express tiene un metodo que funciona como enrutador para enlazar todas nuestras rutas de nuestra aplicacion(Localhost:31000/)//

const router = express.Router()

///Esta funcion define nuestras rutas de la API que me permiten conectar mi parte visual (html) con mi servidor (nodejs)//

function routerAPI(app) {
    app.use('/api/v1', router);
};

//Vamos a exportar nuestra funcion para utilizarla en nuestro index.js principal del server//

module.exports = routerAPI;