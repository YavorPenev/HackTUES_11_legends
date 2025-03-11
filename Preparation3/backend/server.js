const express = require("express");
const path = require("path");
const app = express();
const router = require("./app.js"); // Import the router from app.js

// Serve static files from the "frontend/public" directory
app.use(express.static(path.join(__dirname, "..", "frontend", "public")));

// Use the router for all routes
app.use("/", router);

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});