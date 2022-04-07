const express = require('express');
const path = require('path')
require('dotenv').config()

const app = express()


//This will create a middleware.
//When you navigate to the root page, it would use the built react-app
app.use(express.static(path.join(__dirname, "client/build")));


// Define external routes/subroutes
const search = require('./routes/search')

const port = process.env.PORT || 5000; //xxx
app.use('/search', search)

app.listen(process.env.PORT || 5000) ///xxx

// app.listen(5000, () => {

//     console.log('Server is running on port 5000')
// })