var BroilerSchema = require('../models/broiler_model');
var mongoose = require('mongoose');
var async = require('async');

// Get log lamp
exports.getLogLamp = (req, res)=>{
	async.series({
   		lamp: function(cb){
    		BroilerSchema.findById("5b02dc72584ab60f90b5076b").exec(function(err, data){
     			if(err){
     				return console.log(err);	
     			} 
     		cb(err, data.lamp);
    		});
   		}
  	}, function(err, data){
   			return res.status(200).json({
     			status: "success",
     			message: "Berhasil mendapatkan data log lamp",
     			data: data.lamp
   			});
  		});
}

// Get log fan
exports.getLogFan = (req, res)=>{
	async.series({
   		fan: function(cb){
    		BroilerSchema.findById("5b02dc72584ab60f90b5076b").exec(function(err, data){
     			if(err){
     				return console.log(err);	
     			} 
     		cb(err, data.fan);
    		});
   		}
  	}, function(err, data){
   			return res.status(200).json({
     			status: "success",
     			message: "Berhasil mendapatkan data log fan",
     			data: data.fan
   			});
  		});
}

// Get log spray
exports.getLogSpray = (req, res)=>{
	async.series({
   		spray: function(cb){
    		BroilerSchema.findById("5b02dc72584ab60f90b5076b").exec(function(err, data){
     			if(err){
     				return console.log(err);	
     			} 
     		cb(err, data.spray);
    		});
   		}
  	}, function(err, data){
   			return res.status(200).json({
     			status: "success",
     			message: "Berhasil mendapatkan data log spray",
     			data: data.spray
   			});
  		});
}

// Get log exhaust fan
exports.getLogExhaust = (req, res)=>{
	async.series({
   		exhaust: function(cb){
    		BroilerSchema.findById("5b02dc72584ab60f90b5076b").exec(function(err, data){
     			if(err){
     				return console.log(err);	
     			} 
     		cb(err, data.exhaust);
    		});
   		}
  	}, function(err, data){
   			return res.status(200).json({
     			status: "success",
     			message: "Berhasil mendapatkan data log exhaust fan",
     			data: data.exhaust
   			});
  		});
}

// Create Log Lamp
exports.createLogsLamp = function(req, res){
	console.log( req.body.title);
	var id_user = "5b02dc72584ab60f90b5076b";
	var pushLogsLamp = {
		$push: {
			lamp: {
				title: req.body.title,
				keterangan: req.body.keterangan
			}
		}
	};
	BroilerSchema.findByIdAndUpdate(id_user, pushLogsLamp, function(err, data){
		if (err) {
			return console.log(err);
		}
		res.json(data);
	});
};

// Create Log Fan
exports.createLogsFan = function(req, res){
	var id_user = "5b02dc72584ab60f90b5076b";
	var pushLogsFan = {
		$push: {
			fan: {
				title: req.body.title,
				keterangan: req.body.keterangan
			}
		}
	};
	BroilerSchema.findByIdAndUpdate(id_user, pushLogsFan, function(err, data){
		if (err) {
			return console.log(err);
		}
		res.json(data);
	});
};

// Create Log Spray
exports.createLogsSpray = function(req, res){
	var id_user = "5b02dc72584ab60f90b5076b";
	var pushLogsSpray = {
		$push: {
			spray: {
				title: req.body.title,
				keterangan: req.body.keterangan
			}
		}
	};
	BroilerSchema.findByIdAndUpdate(id_user, pushLogsSpray, function(err, data){
		if (err) {
			return console.log(err);
		}
		res.json(data);
	});
};

// Create Log Exhaust fan
exports.createLogsExhaust = function(req, res){
	var id_user = "5b02dc72584ab60f90b5076b";
	var pushLogsExhaust = {
		$push: {
			exhaust: {
				title: req.body.title,
				keterangan: req.body.keterangan
			}
		}
	};
	BroilerSchema.findByIdAndUpdate(id_user, pushLogsExhaust, function(err, data){
		if (err) {
			return console.log(err);
		}
		res.json(data);
	});
};