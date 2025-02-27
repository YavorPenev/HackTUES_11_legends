const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');

dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public', 'css')));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected')).catch(err => console.log(err));

// User Schema
const UserSchema = new mongoose.Schema({
    username: String,
    email: { type: String, unique: true },
    password: String
});
const User = mongoose.model('User', UserSchema);

// Routes for serving pages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/bookpage', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'bookpage.html'));
});

app.get('/categ1', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'categ1.html'));
});

app.get('/categ2', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'categ2.html'));
});

app.get('/categ3', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'categ3.html'));
});

// Signup Route
app.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        res.status(400).json({ error: 'User already exists' });
    }
});

// Login Route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ error: 'User not found' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

        res.json({ message: 'Login successful' });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


