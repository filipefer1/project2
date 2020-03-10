const express = require('express');
const RestaurantsControllers = require('../controllers/restaurant');

const routes = express.Router();

routes.get('/restaurants', (req, res) => {
  res.status(200).json({ message: 'ok' });
});

routes.post('/restaurants', RestaurantsControllers.store);

module.exports = routes;
