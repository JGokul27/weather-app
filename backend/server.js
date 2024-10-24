const express = require('express');
const cors = require('cors')
const weatherRoute = require('./routes/weather')
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json())

app.use('/api/weather', weatherRoute)

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> console.log(`server running on the port ${PORT}`))