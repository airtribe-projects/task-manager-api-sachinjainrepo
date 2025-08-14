const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const hashPassword = require('../encryptpass');

const { JWT_SECRET } = require('../config/config');

// In-memory storage (replace with database in production)
const user = {};

const register = async (req, res) => {
    try {
        user.name = req.body.name;
        user.email = req.body.email;
        user.password = await hashPassword(req.body.password);
        res.json(user);
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ error: 'Registration failed' });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
   
    const hashedPassword = password;

    const payload = {
        email: email
    };
    
    if(user.email === email && user.password === hashedPassword && validEmailFormat(email)){
        const token = jwt.sign(payload, JWT_SECRET, {
            expiresIn: '1h' // Token expires in 1 hour
        });
        
        res.status(200).json({
            message: 'Login successful',
            token: token
        });
    } else {
        res.status(401).json({message: 'Invalid credentials'});
    }
};

const validEmailFormat = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

module.exports = {
    register,
    login
}; 