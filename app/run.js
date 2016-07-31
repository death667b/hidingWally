import webpack from 'webpack';

import server from './webpack.server.config';

const type = process.env.BUILD_TYPE;

if (type === 'server') {
  const compiler = webpack(server);
  compiler.run((err, stats) => {
    if (err) console.error(err);
    console.log(stats.hasErrors());
  });
}