import express from 'express';
import multer from 'multer';
import bodyParser from 'body-parser';
import path from 'path';

import {CSV} from './lib/csv';
import {types} from './lib/types';

import chokidar from 'chokidar';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config';
const compiler = webpack(config);

const app = express();

/**
 * Storage Manager for multer uploads
 * @param  {Object} options - an options object
 * @param  {Function} options.destination - returns the file destination
 * @param  {Function} options.filename - returns the file name
 * @return {Storage} a multer storage engine
 */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}`);
  },
});
const upload = multer({storage});

app.set('views', './client');
app.set('view engine', 'pug');

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));
app.use(webpackHotMiddleware(compiler));
app.use('/components', express.static('bower_components'));
app.use('/favi', express.static('favi'));
app.use('/css', express.static('css'));

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
  res.render('index');
});

// Upload processes the file, and then needs to return
/*
/*
  {
    pathname: filePath,
    columns: [
      {
        header: columnName,
        transforms: [
          {
            type: [valid type for this column],
            methods: [the methods allowed for this type]
          }
        ]
      }
    ]
  }
 */
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) return res.status(400).send('Invalid File');
  const filePath = req.file.path;
  CSV.parseColumnKeys(filePath)
    .then(columns => res.json({
      pathname: filePath,
      columns
    }))
    .catch(err => console.error(err));
});

app.post('/transform', (req, res) => {
  const transaction = req.body;
  const pathname = path.join(__dirname, transaction.pathname);
  const transformers = CSV.createTransformer(transaction.selectors, types);
  return CSV.transformCSV(pathname, transformers)
    .then(newPath => res.sendFile(newPath));
});

// Do "hot-reloading" of express stuff on the server
// Throw away cached modules and re-require next time
// Ensure there's no important state in there!
const watcher = chokidar.watch('.', {ignored: /[\/\\]\.|node_modules|uploads/});

watcher.on('ready', function () {
  watcher.on('all', function () {
    console.log("Clearing /server/ module cache from server");
    Object.keys(require.cache).forEach(function (id) {
      if (/[\/\\]server[\/\\]/.test(id)) delete require.cache[id];
    });
  });
});

// Do "hot-reloading" of react stuff on the server
// Throw away the cached client modules and let them be re-required next time
compiler.plugin('done', function () {
  console.log("Clearing /client/ module cache from server");
  Object.keys(require.cache).forEach(function (id) {
    if (/[\/\\]client[\/\\]/.test(id)) delete require.cache[id];
  });
});

app.listen(3000, '0.0.0.0', () => {
  console.info('Listening on http://localhost:3000');
});
