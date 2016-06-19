var express = require('express');
var router = express.Router();

var userDao = require('../dao/customerDao');
var reserveDao = require('../dao/reserveDao');
// 检测登录
router.get("/", function(req, res, next) {
	console.log("检测登录："+ res.user.name);
	if(_user.name) {
		res.send(200, {
			name: _user.name
		})
	} else {
		res.send(403);
	}
})
// 增加用户
router.post('/addUser', function(req, res, next) {
	console.log("增加用户: " + req.body.name);
	userDao.queryByName(req, function(err, result) {
		if(err) {
			return res.status(403).send({
				msg: err
			})
		}
		else if(result) {
			res.status(403).send({
				msg: "用户名已存在"
			})
		} else {
			console.log("新用户");
			userDao.add(req, function(err, result) {
				if(err) {
					return res.status(403).send({
						msg: err
					})
				}
				return res.send(200);
			});
		}
	});
});

// 查询所有用户
router.post("/queryAll", function(req, res, next) {
	console.log("查询所有用户");
	userDao.queryAll(req, function(err, result) {
		if(err) {
			return res.status(403).send({
				msg: err
			})
		}
		else if(result) {
			res.status(200).send({
				users: result
			})
		}
	});
});

// 查询某个用户
router.post("/queryByName", function(req, res, next) {
	console.log("查询: " + req.body.name);
	reserveDao.queryByName(req, function(err, result) {
		if(err) {
			return res.status(403).send({
				msg: err
			})
		}
		else if(result) {
			res.status(200).send({
				users: result
			})
		}
	});
})

module.exports = router;
