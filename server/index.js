const app = require('./app.js');

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config();
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server up on port ${port}`);
});