var express = require('express');
var router = express.Router();

var flightDao = require('../dao/flightDao');
var hotelDao = require('../dao/hotelDao');
var busDao = require('../dao/busDao');
var reserveDao = require('../dao/reserveDao');

// var Handle = require('../controllers/index');




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

// 获取航班数据
router.post('/getFlightData', function(req, res, next) {
	flightDao.queryAll(function(err, result){
		if(err) {
			return res.status(403).send({
				msg: err
			})
		} else {
			res.status(200).send({
				data: result
			})
		}
	});
})

// 获取宾馆数据
router.post('/getHotelData', function(req, res, next) {
	hotelDao.queryAll(function(err, result){
		if(err) {
			return res.status(403).send({
				msg: err
			})
		} else {
			res.status(200).send({
				data: result
			})
		}
	});
})

// 获取大巴数据
router.post('/getBusData', function(req, res, next) {
	busDao.queryAll(function(err, result){
		if(err) {
			return res.status(403).send({
				msg: err
			})
		} else {
			res.status(200).send({
				data: result
			})
		}
	});
})

// 增加航班数据
router.post('/addFlightData', function(req, res, next) {
	console.log("addFlightData");
	flightDao.add(req, function (err, result) {
		if(err) {
			return res.status(403).send({
				msg: "增加数据失败"
			})
		} else {
			res.status(200).send({
				msg: "增加数据成功"
			})
		}
	});
})

// 增加宾馆数据
router.post('/addHotelData', function(req, res, next) {
	hotelDao.add(req, function (err, result) {
		if(err) {
			return res.status(403).send({
				msg: err
			})
		} else {
			res.status(200).send({
				msg: "增加数据成功"
			})
		}
	});
})

// 增加大巴数据
router.post('/addBusData', function(req, res, next) {
	busDao.add(req, function (err, result) {
		if(err) {
			return res.status(403).send({
				msg: err
			})
		} else {
			res.status(200).send({
				msg: "增加数据成功"
			})
		}
	});
})

// 修改航班数据
router.post('/modFlightData', function(req, res, next) {
	flightDao.delete(req, function(err, result) {
		if(err) {
			return res.status(403).send({
				msg: err
			})
		} else {
			flightDao.add(req, function (err, result) {
				if(err) {
					return res.status(403).send({
						msg: err
					})
				} else {
					res.status(200).send({
						msg: "修改数据成功"
					})
				}
			});
		}
	})
})

// 修改宾馆数据
router.post('/modHotelData', function(req, res, next) {
	hotelDao.delete(req, function(err, result) {
		if(err) {
			return res.status(403).send({
				msg: err
			})
		} else {
			hotelDao.add(req, function (err, result) {
				if(err) {
					return res.status(403).send({
						msg: err
					})
				} else {
					res.status(200).send({
						msg: "修改数据成功"
					})
				}
			});
		}
	})
})

// 修改大巴数据
router.post('/modBusData', function(req, res, next) {
	busDao.delete(req, function(err, result) {
		if(err) {
			return res.status(403).send({
				msg: err
			})
		} else {
			busDao.add(req, function (err, result) {
				if(err) {
					return res.status(403).send({
						msg: err
					})
				} else {
					res.status(200).send({
						msg: "修改数据成功"
					})
				}
			});
		}
	})
})
// 删除航班数据
router.delete("/deleteFlight", function(req, res, next) {
	flightDao.delete(req, function(err, result) {
		if(err) {
			return res.status(403).send({
				msg: "删除数据失败"
			})
		} else {
				res.status(200).send({
				msg: "删除数据成功"
			})
		}
	})
})
// 删除数据宾馆
router.delete("/deleteHotel", function(req, res, next) {
	hotelDao.delete(req, function(err, result) {
		if(err) {
			return res.status(403).send({
				msg: "删除数据失败"
			})
		} else {
				res.status(200).send({
				msg: "删除数据成功"
			})
		}
	})
})
// 删除大巴数据
router.delete("/deleteBus", function(req, res, next) {
	busDao.delete(req, function(err, result) {
		if(err) {
			return res.status(403).send({
				msg: "删除数据失败"
			})
		} else {
				res.status(200).send({
				msg: "删除数据成功"
			})
		}
	})
})

// 查询航线
router.post("/queFlightLine", function(req, res, next) {
	flightDao.queryByFrom(req, function(err, Fromresult) {
		if(err) {
			return res.status(403).send({
				msg: "查询失败"
			})
		} else {
			res.status(200).send({
				From: Fromresult
			})
		}
	})
})

// 查询航班price
router.post("/queFlightPrice", function(req, res, next) {
	flightDao.queryByFromTo(req, function(err, result) {
		if(err) {
			res.status(403).send({
				msg: "查询失败"
			})
		} else {
			res.status(200).send({
				result: result[0]
			})
		}
	})
})

// 预定航班
router.post("/orderFlight", function(req, res, next) {
	reserveDao.add(req, function(err, result) {
		if(err) {
			res.status(403).send({
				msg: "预定失败"
			})
		} else {
			res.status(200).send({
				result: "预定成功"
			})
		}
	})
})
// 预定宾馆
router.post("/orderHot", function(req, res, next) {
	reserveDao.add(req, function(err, result) {
		if(err) {
			res.status(403).send({
				msg: "预定失败"
			})
		} else {
			res.status(200).send({
				result: "预定成功"
			})
		}
	})
})
// 预定大巴
router.post("/orderBus", function(req, res, next) {
	reserveDao.add(req, function(err, result) {
		if(err) {
			res.status(403).send({
				msg: "预定失败"
			})
		} else {
			res.status(200).send({
				result: "预定成功"
			})
		}
	})
})
// 获取订单信息
router.post('/getReserveMsg', function(req, res, next) {
	reserveDao.queryByName(req, function(err,result) {
		if(err) {
			res.status(403).send({
				msg: "获取失败"
			})
		} else {
			res.status(200).send({
				result: result
			})
		}
	})	
})



module.exports = router;
