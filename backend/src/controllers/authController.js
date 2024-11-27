const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../../db');

exports.register = async (req, res) => {
    const { name, email, password, demographics } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    db.run('INSERT INTO users (name, email, password, demographics) VALUES (?, ?, ?, ?)', 
        [name, email, hashedPassword, JSON.stringify(demographics)], 
        function(error) {
            if (error) return res.status(500).send("Error registering user");
            res.status(201).send("User registered successfully");
        });
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    db.get('SELECT * FROM users WHERE email = ?', [email], async (error, user) => {
        if (error || !user) return res.status(401).send("Invalid credentials");

        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.status(401).send("Invalid credentials");

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
        res.json({ token });
    });
};

exports.suggestEvents = (req, res) => {
    const userId = req.user.id; // Assuming you have middleware to extract user ID from JWT

    db.get('SELECT demographics FROM users WHERE id = ?', [userId], (error, row) => {
        if (error || !row) return res.status(404).send("User not found");

        const demographics = JSON.parse(row.demographics);
        
        // Extract user demographics
        const { age, location, interests } = demographics;

        // Query to find suitable events based on demographics
        const query = `SELECT * FROM events WHERE 
                       (ageGroup LIKE ?) AND 
                       (location = ?) AND 
                       (interests LIKE ?)`;

        // Prepare parameters for query
        const ageGroupParam = `%${age}%`;
        const locationParam = location;
        const interestsParam = interests.join('%');

        db.all(query, [ageGroupParam, locationParam, interestsParam], (err, events) => {
            if (err) return res.status(500).send("Error fetching events");
            res.json({ suggestions: events });
        });
    });
};