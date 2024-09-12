const express = require('express');
const router = express.Router();

const { Player } = require('../db/models');

router.get('/', async (req, res) => {
  //!!ADD
  // let { firstName, number } = req.query;
  //!!END_ADD
  //!!START SILENT
  let { firstName, number, page, size } = req.query;

  page = parseInt(page);
  size = parseInt(size);

  if (Number.isNaN(page)) page = 1;
  if (Number.isNaN(size)) size = 2;
  if (size > 10) size = 10;
  //!!END

  const where = {};
  if (firstName && firstName !== '') {
    //!!ADD
    // where.firstName = firstName[0].toLowerCase() + firstName.slice(1);
    //!!END_ADD
    //!!START SILENT
    where.firstName = firstName[0].toUpperCase() + firstName.slice(1);
    //!!END
  } else if (firstName === '') {
    res.status(400);
    return res.json({
      errors: [
        { message: 'firstName filter should not be empty' }
      ]
    });
  }

  if (number) {
    //!!ADD
    // if (!isNaN(number) && number <= 0) {
    //!!END_ADD
    //!!START SILENT
    if (!isNaN(number) && number >= 0) {
    //!!END
      where.number = parseInt(number);
    } else {
      res.status(400);
      return res.json({
        errors: [
          { message: 'number filter should be a number greater or equal to 0' }
        ]
      });
    }
  }

  const players = await Player.findAll({
    where,
    //!!START SILENT
    limit: size,
    offset: (page - 1) * size
    //!!END
  });
  return res.json({
    players,
    //!!START SILENT
    page,
    size,
    //!!END
  });
});

module.exports = router;
