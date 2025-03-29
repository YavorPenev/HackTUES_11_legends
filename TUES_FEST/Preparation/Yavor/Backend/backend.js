const express = require("express");
const mysql = require("mysql2");
require("dotenv").config();
const app = express();
const cors = require("cors");

////////////////////////////////////////////////////

const corsOptions = {
origin:"http://localhost:5173",// wruzka s frontend
};

app.use(cors(corsOptions));

////////////////////////////////////////////////////

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

db.connect((err) => {
    if (err) {
        console.error("Error connecting to the database:", err);
        process.exit(1); // Exit the application if the database connection fails
    } else {
        console.log("Connected to the database");
    }
});

/////////////////////////////////////////////////////

app.get("/api", (req, res) => {
res.json( {fruit:["apple", " bannana", "oranges"]}); //testwane na wruzkata
});

////////////////////////////////////////////////////

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);// port na backend
});