var mongoose = require('mongoose');
var schema = require('./schema');

mongoose.connect('mongodb://localhost:27017/test');

var User = mongoose.model('User', schema, 'user');

var user = new User({
  name:'pushpendu',
  email: 'pushpendupurkait@gmail.com'
});

user.save(function(error){
  if(error){
    console.log(error);
    process.exit(1);
  }
  User.find({ email: 'pushpendupurkait@gmail.com'}, function(error, docs){
    if(error){
      console.log(error);
      process.exit(1);
    }
    console.log(docs);
    process.exit(0);
  })
})
