const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.status(403).send("Token is required");

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(401).send("Invalid token");
        
        req.user = decoded; // Attach user info to request object
        next();
    });
};

module.exports = authMiddleware;