const pg = require("pg");
const db = new pg.Pool({
    conectionString: process.env.DATABASE_URL
});

module.exports = db;
