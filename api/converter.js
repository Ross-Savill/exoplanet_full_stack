const fs = require('fs');
const exo = require('./exoplanets.json');
newExo = exo.map((e, index) => {
    return {
        pl_id: index + 1,
        pl_name: e.pl_name, //planet name
        pl_hostname: e.pl_hostname, //star name
        pl_pnum: e.pl_pnum, //number of planets in the star system
        pl_orbper: e.pl_orbper, //number of days to orbit that star
        pl_radj: e.pl_radj, //Length of a line segment from the center of the planet to its surface, measured in units of radius of Jupiter. 
        pl_discmethod: e.pl_discmethod, //planet discovery method
        st_dist: e.st_dist
    }
});
fs.writeFile ("newExo.json", JSON.stringify(newExo), function(err) {
        if (err) throw err;
        console.log('complete');
    }
);