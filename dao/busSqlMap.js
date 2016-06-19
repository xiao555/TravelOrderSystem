// CRUD SQL语句
var bus = {
	insert: 'INSERT INTO bus121 VALUES(?,?,?,?,?);',
	queryByLocal: 'select * from bus121 where location=?;',
	queryAll: 'select * from bus121;',
	delete: 'delete from bus121 where bus_num=?;'
};
 
module.exports = bus;