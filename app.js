const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Import routes
const authRoutes = require('./routes/authRoutes');
const userPreferencesRoutes = require('./routes/userPreferencesRoutes');
const newsRoutes = require('./routes/newsRoutes');

// Use routes
app.use('/auth', authRoutes);
app.use('/userpreferences', userPreferencesRoutes);
app.use('/news', newsRoutes);
// Health check endpoint
app.get('/', (req, res) => {
    res.json({ message: 'News Aggregator API is running' });
});

// Start server
const { PORT } = require('./config/config');

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});