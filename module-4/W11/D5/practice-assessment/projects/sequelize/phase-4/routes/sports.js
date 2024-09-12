const express = require('express');
const router = express.Router();

//!!START SILENT
const { Sport } = require('../db/models');

router.get('/', async (req, res) => {
  const sports = await Sport.findAll({
    order: [['name', 'DESC']]
  });
  res.json(sports);
});

//!!END
module.exports = router;
