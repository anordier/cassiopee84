// Importer ExpressJS
const express = require('express')
const app = express()



// Setup des routes
const path = require('path')
const publicDirPath = path.join(__dirname, '../public')
app.use(express.static(publicDirPath))


app.listen(3000, () => {
    console.log('Server is up and running on PORT 3000.')
})