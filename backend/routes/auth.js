const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


// Register
router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const newUser = new User({ username, email, password: hashedPassword })
        const savedUser = await newUser.save()
        console.log(savedUser);
        res.status(200).json(savedUser)
    } catch (error) {
        res.status(500).json("Email Already Exists")
    }
})


// Login

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(401).json({ message: "User Not Found" });
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            return res.status(401).json({ message: "Wrong Password" });
        }

        const token = jwt.sign(
            { _id: user._id, user: user.username, email: user.email },
            process.env.SECRET,
            { expiresIn: '3d' }
        );

        const { password, ...info } = user._doc;

        // Proper Cookie Configuration:
        const isProduction = process.env.NODE_ENV === "production";
        res.cookie('token', token, {
            httpOnly: true,
            secure: isProduction,
            sameSite: isProduction ? "None" : "Lax",
            maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
        });

        res.status(200).json({ ...info });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});



// Logout

router.get('/logout', (req, res) => {
    try {
        res.clearCookie('token', { sameSite: 'none', secure: true }).status(200).json('Logged Out')
    } catch (error) {
        res.status(500).json(error)
    }
})

// REFETCH USER

router.get('/refetch', (req, res) => {
    const token = req.cookies.token
    jwt.verify(token, process.env.SECRET, {}, async (err, data) => {
        if (err) {
            return res.status(404).json(err)
        }
        res.status(200).json(data)
    })
})


module.exports = router