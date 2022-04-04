//Importations
const express = require('express')
const app = express()
const port = 8000

// Routes vers les fichiers statiques (html, css, js...)
app.use(express.static('public'));
app.use('/scripts', express.static(__dirname + '/node_modules/three'));

// Définir les vues
app.set('views', './public/views');
app.set('view engine', 'ejs');

// Navigation
app.get('', (req, res) => {
    res.sendFile(__dirname + '/public/views/index.html')
})
app.get('/affichage', (req, res) => {
   res.sendFile(__dirname + '/public/views/display.html')
})

// Démarrage du serveur
app.listen(port, () => console.info(`Le serveur fonctionne et écoute au port ${port}.`))


/*
// Setup des routes
const path = require('path')
const publicDirPath = path.join(__dirname, '../public')
app.use(express.static(publicDirPath, {extensions: ['html']}))
app.use('/css', express.static(__dirname + '../css'))


app.listen(port, () => {
    console.log('Server is up and running on PORT ${port}.')
})
*/