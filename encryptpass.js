const bcrypt = require('bcrypt');

const hashPassword=async (password)=> {
    try {
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(password, salt);
        return hash;
    } catch (err) {
        console.error('Error during password hashing:', err);
        throw err; // Or handle the error appropriately
    }
}

module.exports = hashPassword;