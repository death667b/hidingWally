const nodemon = require('nodemon');
const webpack = require('webpack');
const config = require('./webpack.config');

const compiler = webpack(config);

compiler.watch({
  aggregateTimeout: 300
}, (err, stats) => {
  if (err) {
    console.error(err);
  }
  console.log(stats.hasErrors())
});

nodemon({
  script: 'server.js',
  watch: 'server.js',
});

nodemon.on('start', function () {
  console.log('App has started');
}).on('quit', function () {
  console.log('App has quit');
}).on('restart', function (files) {
  console.log('App restarted due to: ', files);
});