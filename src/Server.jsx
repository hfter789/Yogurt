import express from 'express';
import routes from './components/routes';
import { match, RoutingContext } from 'react-router';
import { renderToString } from 'react-dom/server';
import React from 'react';
import _ from 'lodash';
import fs from 'fs';
import path from 'path';
var app = express();
var template = fs.readFileSync(path.join(__dirname, '../public/serverTemplate.html'), 'utf8');


app.all('*', (req, res, next) => {
  console.log(req.method, req.url);
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      let data = {};
      data.body = renderToString(<RoutingContext {...renderProps} />);
      let compiled = _.template(template);
      res.status(200).send(compiled(data));
    } else {
      next();
    }
  })
})

app.use(express.static('public'));
app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), () => {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});

