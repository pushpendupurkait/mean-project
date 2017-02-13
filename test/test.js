var assert = require('assert');
var superagent = require('superagent');
var app = require('../expressRoutes')

describe("The feature", function(){
  it('works', function(){
    assert.equal('A','A');
  })
  it('worksss',function(){})
})

describe('The other feature', function(){
  it('worsss',function(){})
})

describe('Test Routes',function(){
  var server;

  beforeEach(function(){
    server = app().listen('3000');
  })

  afterEach(function(){
    server.close();
  })

  it('Should hit / route', function(done){
    superagent.get('http://localhost:3000/', function(error, res){
      assert.ifError(error);
      assert.equal(res.status, 200);
      assert.equal(res.text, "Hello World!!!");
      done();
    })
  })
})
