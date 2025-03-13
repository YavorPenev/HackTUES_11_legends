const express = require("express");
const path = require("path");
const app = express();

// Serve static files from the React app (the build folder)
app.use(express.static(path.join(__dirname, "..", "frontend", "build")));

// Any requests that don’t match static files should go to index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "build", "index.html"));
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
})