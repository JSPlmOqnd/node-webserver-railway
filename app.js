require('dotenv').config();
const express = require('express')
var hbs = require('hbs');

const app = express()
const port = process.env.PORT;
// indicamos que la web estara controlado por hbs
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');
// Servir contenido estático
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Jose Palma',
        titulo: 'Curso de Node Udemi'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Jose Palma',
        titulo: 'Curso de Node Udemi'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Jose Palma',
        titulo: 'Curso de Node Udemi'
    });
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})