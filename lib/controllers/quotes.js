const { Router } = require('express');
const { Quote } = require('../models/Quote');

module.exports = Router()
  .post('/', async (req, res, next) => {
    try {
      const quote = await Quote.insert(req.body);
      console.log('QUOTE: ', quote);
      res.json(quote);
    } catch(error) {
      error.status = 500;
      next(error);
    }
  });
