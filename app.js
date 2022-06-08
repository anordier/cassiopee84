// Code généreusement copié de https://www.bezkoder.com/node-js-express-login-mongodb/

const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(
  cookieSession({
    name: "bezkoder-session",
    secret: "COOKIE_SECRET", // should use as secret environment variable
    httpOnly: true
  })
);


const db = require("./models");
const dbConfig = require("./config/db.config");
const Role = db.role;
db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

  function initial() {
    Role.estimatedDocumentCount((err, count) => {
      if (!err && count === 0) {
        new Role({
          name: "user"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
          console.log("added 'user' to roles collection");
        });
        new Role({
          name: "moderator"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
          console.log("added 'moderator' to roles collection");
        });
        new Role({
          name: "admin"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
          console.log("added 'admin' to roles collection");
        });
      }
    });
  }

// routes
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
// require('./routes/home.routes')(app);




/*


// Définir les vues
app.use(express.static('public'));
app.set('views', './public/views');


// Routes vers les fichiers statiques (html, css, js...)

app.use('/scripts', express.static(__dirname + '/node_modules/three'));



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

*/


var port = 8000;
// Démarrage du serveur
app.listen(port, () => console.info(`Le serveur fonctionne et écoute au port ${port}.`))



