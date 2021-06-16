var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';
var dbo, mdb;

MongoClient.connect(url,function(err,db){
	if(err)
		throw err;
	dbo = db.db('ambulance');
	mdb=db;
});

function fetchDrivers(callback){
    dbo.collection('Driver').find({}).toArray(function(err,res){
      
            callback(err,res);
    });
}

function fetchDriver(title,callback){
    dbo.collection('Driver').find({name:title}).toArray(function(err,res){
      
        callback(err,res);
    });
}

function insertDrivers(data,callback){
    dbo.collection('Driver').insertMany(data,function(err,res){
        callback(err,res);
    })
}

function insertDriver(data,callback){
    dbo.collection('Driver').insertOne(data,function(err,res){
        callback(err,res);
    })
}

function updateDriver(title,sal,callback){
    dbo.collection('Driver').updateOne({name:title},{$set:sal},function(err,res){
        callback(err,res);
    })
}

function updateDrivers(title,sal,callback){
    dbo.collection('Driver').updateMany({name:title},{$set:sal},function(err,res){
        callback(err,res);
    })
}

function deleteDriver(title,callback){
    dbo.collection('Driver').deleteOne({name:title},function(err,res){
        callback(err,res);
    })
}

function deleteDrivers(title,callback){
    dbo.collection('Driver').deleteMany({name:title},function(err,res){
        callback(err,res);
    })
}

exports.fetchDriver = fetchDriver;
exports.fetchDrivers= fetchDrivers;
exports.insertDriver = insertDriver;
exports.insertDrivers = insertDrivers;
exports. updateDriver = updateDriver;
exports.updateDrivers = updateDrivers;
exports.deleteDriver = deleteDriver;
exports.deleteDrivers = deleteDrivers;