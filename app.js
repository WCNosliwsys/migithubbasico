//llamando a express para peticiones http
var express = require('express');
var app = express();
//nos ayudara a leer solo el body y no preocuparnos del head
var bodyParser = require('body-parser');
var product = require('./routes/product');
//nos ayuda a conectarnos con mongodb y reconocer el modelo
var mongoose = require('mongoose');
//variable de entorno proporcionada por evennode
var eConfig = JSON.parse(process.env.APP_CONFIG);
//ruta de conexion con mongodb
var dev_db_url = "mongodb://" + eConfig.mongo.user + ":" + "1234567890" + "@" +
eConfig.mongo.hostString;
//recogiendo de nuestra variable local o de una variable de entorno si el servidor nos lo proporciona
var mongoDB = process.env.MONGODB_URI || dev_db_url;mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//indicando la raiz del proyecto
app.use('/products', product);
//pureto de comunicacion proporcionado por evennode
var port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log('Server is up and running on port numner ' + port);
});