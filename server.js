const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Connect to MongoDB (replace with your MongoDB connection string)
mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a User schema
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Create a model
const User = mongoose.model('User', userSchema);

// Signup route to handle POST requests
app.post('/signup', async (req, res) => {
  const { email, username, password } = req.body;

  try {
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });

    if (existingUser) {
      return res.status(400).json({ message: 'Email or username already exists' });
    }

    const newUser = new User({ email, username, password });
    await newUser.save();

    res.status(201).json({ message: 'User account created successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred during signup' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

