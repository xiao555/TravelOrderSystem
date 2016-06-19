// 查询处理
exports.queryData = function(err, result){
	if(err) {
		return res.status(403).send({
			msg: err
		})
	} else {
		res.status(200).send({
			data: result
		})
	}
}

//添加数据处理
exports.addData = function (err, result) {
	if(err) {
		return res.status(403).send({
			msg: err
		})
	} else {
		res.status(200).send({
			msg: "增加数据成功"
		})
	}
}

//修改数据处理
exports.modData = function (err, result) {
	if(err) {
		return res.status(403).send({
			msg: err
		})
	} else {
		res.status(200).send({
			msg: "修改数据成功"
		})
	}
}