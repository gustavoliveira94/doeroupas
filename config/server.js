var express = require ('express');
var consign = require ('consign');

var app = express();
app.use(express.static('css'));
app.use(express.static('js'));
app.use(express.static('img'));
app.set('view engine', 'ejs');
app.set('views', 'app/views');

consign()
.include('/app/routes/home.js')
.then('/config/dbConnection.js')
.into(app);

module.exports = app;

