const express = require('express');
const Player = require('../models/player');
const router = express.Router();

// GET /players - Retrieve all players
router.get('/api/v1/products', async (req, res) => {
  try {
    const players = await Player.find();
    res.json(players);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching players' });
  }
});

module.exports = router;