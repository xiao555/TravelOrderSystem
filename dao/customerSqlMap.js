// dao/customers121sqlMap.js
// CRUD SQL语句
var customer = {
	insert: 'INSERT INTO customers121 VALUES(?);',
	queryByName: 'select * from customers121 where cus_name=?;',
	queryAll: 'select * from customers121;'
};
 
module.exports = customer;