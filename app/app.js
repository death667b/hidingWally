import express from 'express';

const app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.use('/', (req, res) => {
  res.render('index', {name: 'david', test: function(){return 'x'}});
});

app.listen(3000, () => {
  console.info('Listening on http://localhost:3000');
});