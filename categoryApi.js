var express = require('express');
var status = require('http-status');

module.exports = function(wagner) {
  var api = express.Router();

  api.get('/category/id/:id',wagner.invoke(function(Category){
    return function(req, res){
      Category.findOne({ _id: req.params.id}, function(error, category){
        if(error){
          return res.
            status(status.INTERNAL_SERVER_ERROR).
            json({ error: error.toString() });
        }
        if(!category){
          return res.
            status(status.NOT_FOUND).
            json({error: 'Not Found' });
        }
        res.json({category: category})
      })
      //res.json({cat:"d"})
    }
  }));
  return api;
}
