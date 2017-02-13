var express = require('express');
var wagner = require('wagner-core');

require('./categoryModel')(wagner)

var app = new express();

app.use('/api/v1', require('./categoryApi')(wagner));

app.listen('3000');
console.log("Server is up now at 3000 port.");
