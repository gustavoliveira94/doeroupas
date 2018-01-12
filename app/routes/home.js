module.exports = function (app) {
    app.get('/', function (req, res) {

        var connection = app.config.dbConnection();
        
        connection.query('select * from cadastro', function(error, result){
            res.render("home/index", {cadastro: result});
        });
    });
}