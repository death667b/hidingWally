import 'babel-polyfill';
import express from 'express';
import path from 'path';
const app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.use('/components', express.static('bower_components'));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'DAAASGUD',
    name: 'david',
    test: function(){return 'x'},
  });
});

app.listen(3000, () => {
  console.info('Listening on http://localhost:3000');
});