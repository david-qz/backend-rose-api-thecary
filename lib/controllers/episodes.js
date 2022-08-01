const { Router } = require('express');
const { Episode } = require('../models/Episode');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const episodes = await Episode.getAll();
      res.json(episodes);
    } catch(error) {
      error.status = 500;
      next(error);
    }
  });
