module.exports = {
  entry: [
    'babel-polyfill',
    './app.js',
  ],
  devtool: 'eval-source-map',
  output: {
    path: __dirname,
    filename: 'server.js',
  },
  externals: [require('webpack-node-externals')()],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ["node_modules", "bower_components"],
  },
  target: 'node',
  module: {
    loaders: [
      { // Babelify the javascript
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          babelrc: false,
          presets: [
            'es2015',
          ],
        },
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
      },
    ]
  }
};
