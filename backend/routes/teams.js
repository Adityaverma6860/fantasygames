const express = require('express');
const Team = require('../models/team');
const Player = require('../models/player');
const router = express.Router();


router.post('/api/v1/product/new', async (req, res) => {
  try {
    const { name, players } = req.body;
    const selectedPlayers = await Player.find({ _id: { $in: players } });
    const totalPoints = selectedPlayers.reduce((sum, player) => sum + player.points, 0);

    const team = new Team({ name, players, totalPoints });
    await team.save();
    res.json(team);
  } catch (error) {
    res.status(500).json({ error: 'Error creating team' });
  }
});

router.get('/api/v1/product:id', async (req, res) => {
  try {
    const team = await Team.findById(req.params.id).populate('players');
    if (!team) {
      return res.status(404).json({ error: 'Team not found' });
    }
    res.json(team);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving team' });
  }
});

module.exports = router;
