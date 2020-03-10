const Restaurant = require('../models/restaurant');

module.exports = {
  async store(req, res) {
    const {
      name, picture, street, city,
      zipCode, state, weekOpen, weekClose,
      weekendOpen, weekendClose,
    } = req.body;

    const restaurant = new Restaurant({
      name,
      picture,
      address: {
        street,
        city,
        zipCode,
        state,
      },
      openingHours: {
        week: {
          weekOpen,
          weekClose,
        },
        weekend: {
          weekendOpen,
          weekendClose,
        },
      },
    });

    res.status(201).json(restaurant);
  },
};
