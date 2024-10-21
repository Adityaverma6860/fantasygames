const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const playerRoutes = require('./routes/players');
const teamRoutes = require('./routes/teams');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/players', playerRoutes);
app.use('/teams', teamRoutes);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/fantasy_game', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});