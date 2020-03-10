const mongoose = require('mongoose');

const { Schema } = mongoose;

const Restaurant = new Schema({
  name: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  address: {
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    zipCode: {
      type: String,
    },
    state: {
      type: String,
      required: true,
    },
  },
  openingHours: {
    week: {
      open: {
        type: Number,
        required: true,
      },
      close: {
        type: Number,
        required: true,
      },
    },
    weekend: {
      open: {
        type: Number,
        required: true,
      },
      close: {
        type: Number,
        required: true,
      },
    },
  },
});

module.exports = mongoose.model('Restaurant', Restaurant);
