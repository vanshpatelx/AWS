const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Route: Home
app.get('/', (req, res) => {
    res.send('Welcome to Express.js!');
});

// Route: API example
app.get('/api', (req, res) => {
    res.json({ message: 'Hello from the API route!' });
});

// Route: Echo body data
app.post('/echo', (req, res) => {
    const data = req.body;
    res.json({ echoedData: data });
});

// Route: Dynamic parameters
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.json({ userId });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
