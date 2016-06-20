// dao/customerDao.js
// 实现与MySQL交互
var mysql = require('mysql');
var $conf = require('../conf/db');
var $util = require('../util/util');
var $sql = require('./customerSqlMap');
 
// 使用连接池，提升性能
var pool  = mysql.createPool($util.extend({}, $conf.mysql));
 
// // 向前台返回JSON方法的简单封装
// var jsonWrite = function (res, ret) {
// 	if(typeof ret === 'undefined') {
// 		res.json({
// 			code:'1',
// 			msg: '操作失败'
// 		});
// 	} else {
// 		res.json(ret);
// 	}
// };
 
module.exports = {
    add: function (req, cb) {
        pool.getConnection(function(err, connection) {
            // 获取前台页面传过来的参数
            var name = req.body.name;
            // 建立连接，向表中插入值
            // 'INSERT INTO customers121(name) VALUES(?)'
            connection.query($sql.insert, name, function(err, result) {
                if(err) return cb(err);
                if(result) {
                    cb(null, result[0])    
                }
                // 释放连接 
                connection.release();
            });
        });
    },
    queryByName: function (req, cb) {
        var name = req.body.name; 
        pool.getConnection(function(err, connection) {
            connection.query($sql.queryByName, name, function(err, result) {
            	console.log(err +" " +result);
            	if(err) return cb(err);               
                connection.release();
                console.log("no err");
            	cb(null, result[0]); 
            });
        });
    },
    queryAll: function (req, cb) {
        pool.getConnection(function(err, connection) {
            connection.query($sql.queryAll, function(err, result) {
                if(err) return cb(err);
                cb(null, result); 
                connection.release();
            });
        });
    } 
};
