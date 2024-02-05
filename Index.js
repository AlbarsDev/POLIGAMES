const express = require('express');
const routerAPI = require('./Server/Router');

//Esto es nuestra aplicacion--origen//
const app = express();

//Esta linea me sirve para quitar el problema de cors//
app.use(cors());

//Esta linea me permite entender los archivos json enviados desde la respuesta//
app.use(express.json());

//Esta funcion es nuestra API//
routerAPI(app);

//.use sirve para servir en nuestro servidor y recibe n cantidades de parametros, el primero va a ser nuestra ruta en la web y el segundo el middleware (Logica cuando vaya a servir esa ruta)
app.use('/', (req, res) => {

    req.setEncoding(<h1>Funciona</h1>);
});

//Levantando nuestro servidor en el puerto x//

//.listen escucha nuestro servidor y como primer parametro recibe el puerto y como segundo la funcion a mostrar cuando nuestro servidor funcione//

app.listen(3000, () => {
    console.log('Aplicacion corriendo en el puerto 3100');
})