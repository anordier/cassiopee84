//Importations
const express = require('express')
const app = express()
const port = 143

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
app.get('/Jaws', (req, res) => {
    res.sendFile(__dirname + '/public/views/Jaws.html')
 })

// Démarrage du serveur
app.listen(port, () => console.info(`Le serveur fonctionne et écoute au port ${port}.`))

