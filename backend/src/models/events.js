const db = require('../../db');

// Sample events with image URLs
const events = [
    { name: "Tech Conference", location: "New York", ageGroup: "18-35", interests: ["technology", "networking"], imageUrl: "https://example.com/tech-conference.jpg" },
    { name: "Art Exhibition", location: "San Francisco", ageGroup: "25-45", interests: ["art", "culture"], imageUrl: "https://example.com/art-exhibition.jpg" },
    { name: "Music Festival", location: "Los Angeles", ageGroup: "18-30", interests: ["music", "entertainment"], imageUrl: "https://example.com/music-festival.jpg" },
    { name: "Cooking Class", location: "Chicago", ageGroup: "30-60", interests: ["cooking", "food"], imageUrl: "https://example.com/cooking-class.jpg" },
    { name: "Yoga Retreat", location: "Miami", ageGroup: "20-50", interests: ["health", "wellness"], imageUrl: "https://example.com/yoga-retreat.jpg" },
];

// Function to initialize the events table
const initializeEventsTable = () => {
    db.serialize(() => {
        db.run(`CREATE TABLE IF NOT EXISTS events (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            location TEXT,
            ageGroup TEXT,
            interests TEXT,
            imageUrl TEXT
        )`);

        const stmt = db.prepare(`INSERT INTO events (name, location, ageGroup, interests, imageUrl) VALUES (?, ?, ?, ?, ?)`);
        for (const event of events) {
            stmt.run(event.name, event.location, event.ageGroup, JSON.stringify(event.interests), event.imageUrl);
        }
        stmt.finalize();
    });
};

// Call the function to initialize the table
initializeEventsTable();