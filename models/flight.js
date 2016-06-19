var mysql = require("mysql");
var DB_NAME = 'travelOrderSys121';

var pool = mysql.createPool({
	host: '127.0.0.1',
	user: 'root',
	password: '1234'
});

pool.on('connection', function(connection) {
	connection.query('SET SESSION auto_increment_increment=1')
})