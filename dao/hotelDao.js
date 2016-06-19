// 实现与MySQL交互
var mysql = require('mysql');
var $conf = require('../conf/db');
var $util = require('../util/util');
var $sql = require('./hotelSqlMap');
 
// 使用连接池，提升性能
var pool  = mysql.createPool($util.extend({}, $conf.mysql));
 
module.exports = {
    add: function (req, cb) {
        pool.getConnection(function(err, connection) {
            // 获取前台页面传过来的参数
            var hot_num = req.body.hot_num;
            var location = req.body.location;
            var hot_price = req.body.hot_price;
            var hot_romNum = req.body.hot_romNum;
            var hot_avaNum = req.body.hot_avaNum;
            // 建立连接，向表中插入值
            // 'INSERT INTO customers121(name) VALUES(?)'
            connection.query($sql.insert, [hot_num,location,hot_price,hot_romNum,hot_avaNum], function(err, result) {
                if(err) return cd(err);
                if(result) {
                    cb(null, result[0])    
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
        var hot_num = req.body.hot_num;
        pool.getConnection(function(err, connection) {
            connection.query($sql.delete, hot_num,function(err, result) {
                if(err) return cb(err);               
                connection.release();
                cb(null, result); 
            });
        });
    }
};
