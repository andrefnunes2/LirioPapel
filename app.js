const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.render('index', {
        title: 'Lírio de Papel'
    });
});

app.listen(3000, () => console.log('Server rodando na porta 3000!'));

app.set('view engine', 'ejs');