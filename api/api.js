const express = require('express') //looking by defauly in node_modules file
const app = new express() // returning a new instance of an express application
const cors = require('cors')

const mongoose = require('mongoose')
const port = process.env.PORT || 5000 

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/finalWeekof2018')

const Exoplanet = require('./models/Exoplanet')

app.get('/', (req, res) => {
    Exoplanet.find({})
    .then(planets => res.send(planets))
})

app.get('/planet/:pl_id', (req, res) => {
    const { pl_id } = req.params
    const id = parseInt(pl_id);
    Exoplanet.findOne({pl_id: id})
    .then(planet => res.send(planet))
})

app.listen(port, () => {
    console.log (`listening at http://localhost:${port}`)
})