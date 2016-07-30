import 'babel-polyfill';
import express from 'express';
import multer from 'multer';

import { ParseDate } from './lib/filterDOB';
import { ParseAge } from './lib/filterAge.js';

const app = express();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '/uploads');
  },
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}`);
  },
});

const upload = multer({ storage });

app.set('views', './views');
app.set('view engine', 'pug');

app.use('/components', express.static('bower_components'));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'DAAASGUD',
    name: 'david',
    test: () => 'x',
  });
});

app.post('/upload', upload.single('file'), (req, res) => {
  const filePath = req.file.path;
  res.send(`file path is ${filePath}.`);
});

app.get('/devtest', (req, res) => {
  res.send(ParseAge.filters()['Generalise Age'](42, 10));
});

app.get('/ian', (req, res) => {
  res.send(ParseDate.isValid('20 Mar 80'));
});

app.listen(3000, () => {
  console.info('Listening on http://localhost:3000');
});


