// CRUD SQL语句
var flight = {
	insert: 'INSERT INTO flight121 VALUES(?,?,?,?,?,?);',
	queryByFrom: 'select * from flight121 where fromcity=?;',
	queryByTo: 'select * from flight121 where arr_city=?;',
	queryAll: 'select * from flight121;',
	delete: 'delete from flight121 where fli_num=?;'
};
 
module.exports = flight;