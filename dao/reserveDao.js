// 实现与MySQL交互
var mysql = require('mysql');
var $conf = require('../conf/db');
var $util = require('../util/util');
var $sql = require('./reserveSqlMap');
 
// 使用连接池，提升性能
var pool  = mysql.createPool($util.extend({}, $conf.mysql));
 
module.exports = {
    add: function (req, cb) {
        pool.getConnection(function(err, connection) {
            // 获取前台页面传过来的参数
            var cus_name = req.body.cus_name;
            var res_type = req.body.res_type;
            var ord_no = req.body.ord_no;
            // 建立连接，向表中插入值
            // 'INSERT INTO customers121(name) VALUES(?)'
            connection.query($sql.insert, [cus_name,res_type,ord_no], function(err, result) {
                if(err) return cd(err);
                if(result) {
                    cb(null, result)    
                }
                // 释放连接 
                connection.release();
            });
        });
    },
    queryByName: function (req, cb) {
        var cus_name = req.body.cus_name; 
        pool.getConnection(function(err, connection) {
            connection.query($sql.queryByName, cus_name, function(err, result) {
            	console.log(err + " " +result);
            	if(err) return cb(err);               
                connection.release();
            	cb(null, result); 
            });
        });
    },
    queryAll: function (req, res, next) {
        pool.getConnection(function(err, connection) {
            connection.query($sql.queryAll, function(err, result) {
                jsonWrite(res, result);
                connection.release();
            });
        });
    } 
};
