const express = require('express');
const path = require('path')
require('dotenv').config()

const app = express()


//This will create a middleware.
//When you navigate to the root page, it would use the built react-app
app.use(express.static(path.resolve(__dirname, "./client/build")));

app.get('/', (request, response) => response.send('Hello World!'))

// Define external routes/subroutes
const search = require('./routes/search')
app.use('/search', search)

app.listen(5000, () => {
    console.log('Server is running on port 5000')
})