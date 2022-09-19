const express = require('express');
const app = express();
require('dotenv').config()


const checklistRoutes = require('./routes/checklistRoutes')

const port = process.env.PORT

app.use('/', checklistRoutes)

app.listen(port || '4000', (req, res) => {
    console.log('listening on port 4000')  
})