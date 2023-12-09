import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/user.model.js';

const router = express.Router();

// Endpoint for user login
router.post('/user-login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user with the provided email in the database
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Compare the provided password with the hashed password in the database
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (isPasswordValid) {
            // Password is valid, send a successful response
            res.status(200).json({ message: 'Login successful', user });
        } else {
            // Password is invalid, send an unauthorized response
            res.status(401).json({ message: 'Invalid credentials Wrong Password' });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Export the router
export default router;
