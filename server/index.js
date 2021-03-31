require("dotenv/config");
const express = require("express");

const db = require("./database");
const app = express();

app.use(express.json());

app.get("/api/test", (req, res, nexts) => {
    res.json({ message: 'test - test' });
});

app.listen(process.env.PORT, () => {
    // eslint-disable-next-line no-console
    console.log("Listening on port", process.env.PORT);
});
