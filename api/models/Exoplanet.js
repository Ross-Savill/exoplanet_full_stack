const mongoose = require('mongoose')

const exoplanetSchema = new mongoose.Schema({
    pl_name: String, //planet name
    pl_hostname: String, //star name
    pl_pnum: Number, //number of planets in the star system
    pl_orbper: Number, //number of days to orbit that star
    pl_radj: Number, //Length of a line segment from the center of the planet to its surface, measured in units of radius of Jupiter. 
    pl_discmethod: String, //planet discovery method
    st_dist: Number //distance to that star system in parsecs. 1 Parsec = 3.26 light-years (30 trillion km or 19 trillion miles) in length))
})

module.exports = mongoose.model('Exoplanet', exoplanetSchema)