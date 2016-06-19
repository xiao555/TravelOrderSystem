// 实现与MySQL交互
var mysql = require('mysql');
var $conf = require('../conf/db');
var $util = require('../util/util');
var $sql = require('./flightSqlMap');
 
// 使用连接池，提升性能
var pool  = mysql.createPool($util.extend({}, $conf.mysql));
 
module.exports = {
    add: function (req, cb) {        pool.getConnection(function(err, connection) {
            // 获取前台页面传过来的参数
            var fli_num = req.body.fli_num;
            var price = req.body.price;
            var fli_numseats = req.body.fli_numseats;
            var fli_numavail = req.body.fli_numavail;
            var fromcity = req.body.fromcity;
            var arr_city = req.body.arr_city;
            console.log(fli_num);
            // 建立连接，向表中插入值
            // 'INSERT INTO customers121(name) VALUES(?)'
            connection.query($sql.insert, [fli_num,price,fli_numseats,fli_numavail,fromcity,arr_city], function(err, result) {
                console.log("1");
                if(err) return cb(err);
                if(result) {
                    cb(null, result[0])    
                }
                // 释放连接 
                connection.release();
            });
        });
    },
    queryByFrom: function (req, cb) {
        var fromcity = req.body.fromcity; 
        pool.getConnection(function(err, connection) {
            connection.query($sql.queryByFrom, fromcity, function(err, result) {
            	console.log(err +" " +result);
            	if(err) return cb(err);               
                connection.release();
            	cb(null, result); 
            });
        });
    },
    queryByTo: function (req, cb) {
        var arrcity = req.body.arrcity; 
        pool.getConnection(function(err, connection) {
            connection.query($sql.queryByTo, arrcity, function(err, result) {
                console.log(err +" " +result);
                if(err) return cb(err);               
                connection.release();
                cb(null, result); 
            });
        });
    },
    queryAll: function (cb) {
        pool.getConnection(function(err, connection) {
            connection.query($sql.queryAll, function(err, result) {
                if(err) return cb(err);               
                connection.release();
                cb(null, result); 
            });
        });
    },
    delete: function(req, cb) {
        var fli_num = req.body.fli_num;
        console.log(fli_num);
        pool.getConnection(function(err, connection) {
            connection.query($sql.delete, fli_num, function(err, result) {
                if(err) return cb(err);               
                connection.release();
                cb(null, result); 
            });
        });
    } 
};
