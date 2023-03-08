const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static('dist'));
app.get('/some-route', (req, res) => {
  res.send('ok')
})
app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
})

app.use(function (req, res, ) {
  res.status(500).send(res.redirect('/500'))
})

app.listen(PORT, function () {
  console.log(`START ON ${PORT}!`);
}); 