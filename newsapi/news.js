const axios = require('axios');
let newsdata = {};

const getnews = async () => {
  try {
    const response = await axios.get('https://api.publicapis.org/entries');
    console.log('News data fetched successfully');
    newsdata = response.data;
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error; // Re-throw the error so the calling function can handle it
  }
};
 
module.exports = {getnews, newsdata};