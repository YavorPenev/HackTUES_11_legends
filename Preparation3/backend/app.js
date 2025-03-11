const express = require("express");
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const path = require("path");

const router = express.Router();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "efedrin12",
    database: "yourdatabase"
});

db.connect((err) => {
    if (err) throw err;
    console.log("Connected to MySQL");
});

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "frontend", "public", "index.html"), (err) => {
        if (err) {
            console.error("Error loading index.html:", err);
            res.status(500).send("Internal Server Error: Unable to load index.html");
        }
    });
});

router.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "frontend", "public", "signup.html"), (err) => {
        if (err) {
            console.error("Error loading signup.html:", err);
            res.status(500).send("Internal Server Error: Unable to load signup.html");
        }
    });
});

router.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "frontend", "public", "login.html"), (err) => {
        if (err) {
            console.error("Error loading login.html:", err);
            res.status(500).send("Internal Server Error: Unable to load login.html");
        }
    });
});

router.post("/signup", async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.redirect("/signup.html?error=empty-fields");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = "INSERT INTO users (username, password) VALUES (?, ?)";
    db.query(sql, [username, hashedPassword], (err, result) => {
        if (err) return res.redirect("/signup.html?error=duplicate-user");

        res.redirect("/login.html?signup=success");
    });
});

router.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.redirect("/login.html?error=empty-fields");
    }

    const sql = "SELECT * FROM users WHERE username = ?";
    db.query(sql, [username], async (err, results) => {
        if (err || results.length === 0) {
            return res.redirect("/login.html?error=invalid-credentials");
        }

        const user = results[0];
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.redirect("/login.html?error=invalid-credentials");
        }

        res.redirect("/"); 
    });
});

module.exports = router;