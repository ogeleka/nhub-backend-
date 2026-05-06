const express = require('express');
const app = express();

// Import user routes
const userRoutes = require('./routes/userRoutes');

// Middleware to parse JSON bodies
app.use(express.json());  


// Import user routes
app.use('/api/users',userRoutes);

//our server is running on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});