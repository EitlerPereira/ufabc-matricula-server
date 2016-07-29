var express = require('express'),
  config = require('./config/config'),
  glob = require('glob');

var https = require('https');
var pem = require('pem');

var models = glob.sync(config.root + '/app/models/*.js');
models.forEach(function (model) {
  require(model);
});

var app = express();

require('./config/express')(app, config);

app.listen(config.port, function () {
  console.log('Express server listening on port ' + config.port);
});

// pem.createCertificate({days:1, selfSigned:true}, function(err, keys){
//   var app = express();

//   require('./config/express')(app, config);

//   https.createServer({key: keys.serviceKey, cert: keys.certificate}, app).listen(3000);
// });

