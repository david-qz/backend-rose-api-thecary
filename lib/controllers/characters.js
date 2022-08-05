const { Router } = require('express');
const Character = require('../models/Character');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const characters = await Character.getAll();
      res.json(characters);
    } catch(error) {
      error.status = 500;
      next(error);
    }
  });
