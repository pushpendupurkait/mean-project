var express = require('express');

module.exports = function(){
  var app = new express();

  app.get('/',function(req, res){
    res.send("Hello World!!!")
  })

  app.get('/user',function(req, res){
    res.send(req.query);
  })
  return app;
}
