var express = require ('express');
var bodyparser = require ('body-parser');
var cors = require ('cors');
var db = require ('./model');

var api = express();
api.use(bodyparser.json());
api.use(bodyparser.urlencoded({extended:true}));
api.use(cors());

api.get('/Drivers',(request,response)=>{
    db.fetchDrivers(function(err,res){
        if(err){
            res={"Error":"No records Found.."}
            response.statusCode = 404;
        }else{
            response.statusCode = 200;
            response.send(JSON.stringify(res));
            response.end();
        }
    })
})

api.get('/Driver/:name',(request,response)=>{
    var name = request.params.name;
    db.fetchDriver(name,function(err,res){
        if(err){
            res={"Error":"No records Found.."}
            response.statusCode = 404;
        }else{
            response.statusCode = 200;
            response.send(JSON.stringify(res));
            response.end();
        }
    })
})

api.post('/Drivers',(request,response)=>{
    var data = request.body;
    db.insertDrivers(data,function(err,res){
        if(err){
            res={"Error":"No Records Found..."}
            response.statusCode = 404;
        }else{
            response.statusCode = 200;
            response.send(JSON.stringify(res));
            response.end();
        }
    })
})

api.post('/Driver',(request,response)=>{
    var data = request.body;
    db.insertDriver(data,function(err,res){
        if(err){
            res={"Error":"No Records Found..."}
            response.statusCode = 404;
        }else{
            response.statusCode = 200;
            response.send(JSON.stringify(res));
            response.end();
        }
    })
})

api.put('/Driver/:name',(request,response)=>{
    var name = request.params.name;
    var salary = request.body;
    db.updateDriver(name,salary,function(err,res){
        if(err){
            res={"Error":"No Records Found..."}
            response.statusCode = 404;
        }else{
            response.statusCode = 200;
            response.send(JSON.stringify(res));
            response.end();
        }
    })
})

api.put('/Drivers/:name',(request,response)=>{
    var name = request.params.name;
    var salary = request.body;
    db.updateDrivers(name,salary,function(err,res){
        if(err){
            res={"Error":"No Records Found..."}
            response.statusCode = 404;
        }else{
            response.statusCode = 200;
            response.send(JSON.stringify(res));
            response.end();
        }
    })
})

api.delete('/Driver/:name',(request,response)=>{
    var name = request.params.name;
    db.deleteDriver(name,function(err,res){
        if(err){
            res={"Error":"No Records Found..."}
            response.statusCode = 404;
        }else{
            response.statusCode = 200;
            response.send(JSON.stringify(res));
            response.end();
        } 
    })
})

api.delete('/Drivers/:name',(request,response)=>{
    var name = request.params.name;
    db.deleteDrivers(name,function(err,res){
        if(err){
            res={"Error":"No Records Found..."}
            response.statusCode = 404;
        }else{
            response.statusCode = 200;
            response.send(JSON.stringify(res));
            response.end();
        } 
    })
})

api.listen(3000,console.log("Waiting at 3000...."));