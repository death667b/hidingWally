import webpack from 'webpack';

module.exports = {
  target: 'node',
  entry: [
    'babel-polyfill',
    './app.js',
  ],
  output: {
    path: __dirname,
    filename: 'server.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  devtool: 'eval-source-map',
  module: {
    loaders: [
      { // Babelify the javascript
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          babelrc: false,
          presets: [
            'react',
            'es2015',
            'es2016',
            'stage-0',
          ],
          plugins: [
            'transform-dirname-filename',
          ]
        },
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ]
  },
};
