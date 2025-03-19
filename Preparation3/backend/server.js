const express = require("express");
const path = require("path");
const app = express();
const router = require("./app.js"); 

app.use(express.static(path.join(__dirname, "..", "frontend", "build")));

app.use("/src", express.static(path.join(__dirname, "..", "frontend", "src")));



app.use(express.json());

app.use("/", router);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});