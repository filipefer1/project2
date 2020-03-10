const express = require('express');

const restaurantsRoutes = require('./routes/restaurants');

const app = express();
app.use(express.json());

app.use(restaurantsRoutes);

app.listen(3001);
