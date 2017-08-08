var express=require('express');
var app=express();

app.get('/',function(req,res){
    res.send('hello,ttssssssssss');
});

app.get('/users/:xxx',function(req,res){
    res.send('hello,'+req.params.xxx);
});

app.listen(3000);