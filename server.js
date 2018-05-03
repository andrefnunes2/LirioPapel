const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('index'));
app.get('/about', (req, res) => res.render('about'));

app.listen(3000, () => console.log('Server rodando na porta 3000!'));

