var express = require('express');
var app = express();

app.all('*', function (req, res, next) {
  console.log(req.method, req.url);
  next();
})

app.set('port', (process.env.PORT || 3000));
app.use('/', express.static(__dirname + '/public'));

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});

