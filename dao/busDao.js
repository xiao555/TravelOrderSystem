// 实现与MySQL交互
var mysql = require('mysql');
var $conf = require('../conf/db');
var $util = require('../util/util');
var $sql = require('./busSqlMap');
 
// 使用连接池，提升性能
var pool  = mysql.createPool($util.extend({}, $conf.mysql));
 
module.exports = {
    add: function (req, cb) {
        pool.getConnection(function(err, connection) {
            // 获取前台页面传过来的参数
            var bus_num = req.body.bus_num;
            var location = req.body.location;
            var bus_price = req.body.bus_price;
            var bus_busNum = req.body.bus_busNum;
            var bus_avaNum = req.body.bus_avaNum;
            // 建立连接，向表中插入值
            // 'INSERT INTO customers121(name) VALUES(?)'
            connection.query($sql.insert, [bus_num,location,bus_price,bus_busNum,bus_avaNum], function(err, result) {
                if(err) return cd(err);
                if(result) {
                    cb(null, result)    
                }
                // 释放连接 
                connection.release();
            });
        });
    },
    queryByLocal: function (req, cb) {
        var location = req.body.location; 
        pool.getConnection(function(err, connection) {
            connection.query($sql.queryByLocal, location, function(err, result) {
            	console.log(err + " " +result);
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
        var bus_num = req.body.bus_num;
        pool.getConnection(function(err, connection) {
            connection.query($sql.delete, bus_num,function(err, result) {
                if(err) return cb(err);               
                connection.release();
                cb(null, result); 
            });
        });
    } 
};
