const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
origin:" http://localhost:5173",// wruzka s frontend
};

app.use(cors(corsOptions));

app.get("/api", (req, res) => {
res.json( {fruit:["apple", " bannana", "oranges"]});//testwane na wruzkata
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);// port na backend
});