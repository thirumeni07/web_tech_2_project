var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient
var data = ''
//********** connect with mongo DB **************/
var url = "mongodb+srv://admin:admin@cluster0.knnqd.mongodb.net/flightDetails?retryWrites=true&w=majority";
MongoClient.connect(url, function(err, client){
    if(err) throw err
    console.log('successfully connected to Mango service')
    db= client.db('flightDetails')
    db.collection('flights').find().toArray(function(err, result){
        if(err) throw err
        //console.log(result);
        data = result;
    })

//********** Routing for index.html **************/
app.get('/',function(request, response){
    console.log('comes here...')
    response.sendFile(__dirname+'/'+'index.html')
})

//********** Handling post request and responding with json data **************/
       
app.get('/fetch-flight-data', function(request, response){

    var from = request.query.from;
    var to = request.query.to;
    console.log(from)
    db.collection('flights').find({"$and":[{"from":from},{"to":to}]}).toArray(function(err, result){
        if(err) throw err
        data=result;
        
        console.log(data);
        response.write(JSON.stringify(data));
        response.end();
    });

})

app.get('/weather-data', function(request, response){
    response.write("Such a sunny day it is!")
    response.end();
})

var server = app.listen(process.env.PORT || 5000,function(){
console.log('The server started....')
})
    
})