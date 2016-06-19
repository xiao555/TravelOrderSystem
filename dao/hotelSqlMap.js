// CRUD SQL语句
var hotel = {
	insert: 'INSERT INTO hotels121 VALUES(?,?,?,?,?);',
	queryByLocal: 'select * from hotels121 where location=?;',
	queryAll: 'select * from hotels121;',
	delete: 'delete from hotels121 where hot_num=?;'

};
 
module.exports = hotel;