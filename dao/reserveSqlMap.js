// CRUD SQL语句
var reserve = {
	insert: 'INSERT INTO reservations121 VALUES(?,?,?);',
	queryByName: 'select * from reservations121 where cus_name=?;',
	queryAll: 'select * from reservations121;'
};
 
module.exports = reserve;