const axios = require('axios');

let newsdata = {};

const getNews = async (req, res) => {
    try {
        const response = await axios.get('https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=75e996fde2e3cacbb05771700438c7ac');
        console.log('News data fetched successfully');
        newsdata = response.data;
        res.json(newsdata);
    } catch (error) {
        console.error('Error fetching news data:', error.message);
        res.status(500).json({ 
            error: 'Failed to fetch news',
            message: error.message 
        });
    }
};

const getNewsData = () => {
    return newsdata;
};

module.exports = {
    getNews,
    getNewsData
}; 