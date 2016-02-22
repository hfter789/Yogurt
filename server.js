import express from 'express';
import { match, RoutingContext } from 'react-router';
import { renderToString } from 'react-dom/server';
import React from 'react';
import _ from 'lodash';
import fs from 'fs';
import path from 'path';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config.js'
import routes from './src/routes';

const app = express();
const template = fs.readFileSync(path.join(__dirname, './src/templates/index.html'), 'utf8');

const compiler = webpack(config);
const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
});

app.use(middleware);
app.use(webpackHotMiddleware(compiler));

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
app.set('port', (process.env.PORT || 8081));

app.listen(app.get('port'), () => {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});

