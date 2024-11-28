const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./src/routes/authRoutes');
const userRoutes = require('./src/routes/user'); 
const userDemographicsRoutes = require('./src/routes/userDemographics'); // Add this line




const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api', userRoutes);
app.use('/api', userDemographicsRoutes); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});