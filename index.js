var _ = require("underscore");
var mongodb = require('mongodb');

_.each([1,2,3], function(v){
	console.log(v);
});

var uri = 'mongodb://localhost:27017/example';
mongodb.MongoClient.connect(uri, function(error, db){
  if(error){
  	console.log(error);
  	process.exit(1);
  }
  
  console.log("You are connected to MongoDB.");
  db.collection('sample').insert({x : 1}, function(error, result){
    if(error){
    	console.log(error);
  	process.exit(1);
    }
    
    db.collection('sample').find().toArray(function(error, docs){
      if(error){
    	console.log(error);
  	process.exit(1);
      }
      
      console.log("Found Docs:")
      _.each(docs,function(doc){
        console.log(JSON.stringify(doc));
      });
      process.exit(0);
    })
  })
})
