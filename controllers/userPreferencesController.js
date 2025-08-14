// In-memory storage for user preferences (replace with database in production)
const userPreferences = {
    language: 'en',
    theme: 'light',
    fontSize: 16,
    fontFamily: 'Arial',
    fontWeight: 'normal',
    fontColor: 'black',
    backgroundColor: 'white',
};

const getUserPreferences = (req, res) => {
    res.json(userPreferences);
};

const updateUserPreferences = (req, res) => {
    console.log(req.body);
    
    // Update only the fields that are provided in the request
    if (req.body.language !== undefined) {
        userPreferences.language = req.body.language;
    }
    if (req.body.theme !== undefined) {
        userPreferences.theme = req.body.theme;
    }
    if (req.body.fontSize !== undefined) {
        userPreferences.fontSize = req.body.fontSize;
    }
    if (req.body.fontFamily !== undefined) {
        userPreferences.fontFamily = req.body.fontFamily;
    }
    if (req.body.fontWeight !== undefined) {
        userPreferences.fontWeight = req.body.fontWeight;
    }
    if (req.body.fontColor !== undefined) {
        userPreferences.fontColor = req.body.fontColor;
    }
    if (req.body.backgroundColor !== undefined) {
        userPreferences.backgroundColor = req.body.backgroundColor;
    }
    
    res.json(userPreferences);
};

module.exports = {
    getUserPreferences,
    updateUserPreferences
}; 