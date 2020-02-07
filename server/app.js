const express = require('express');
const app = express();

app.use(express.static('../client/public/src'));

app.get('/api/', (req, res) => {
  res.send({ name: 'Will' });
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req, res) => {
    res.send(path.join(__dirname, 'client/build/index.html'));
  });
}

module.exports = app;