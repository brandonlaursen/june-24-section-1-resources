const express = require('express');
const router = express.Router();

// BONUS
//!!START SILENT
const { Match, Team } = require('../db/models');

router.get('/:id', async (req, res) => {
  const matches = await Match.findByPk(req.params.id, {
    include: [
      {
        model: Team,
        as: 'HomeTeam'
      },
      {
        model: Team,
        as: 'AwayTeam'
      },
      {
        model: Team,
        as: 'Winner'
      }
    ],
  });
  return res.json(matches);
});

//!!END
module.exports = router;