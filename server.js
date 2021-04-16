const express = require('express');
const app = express();
const path = require('path');
const logger = require('morgan');

require('dotenv').config();
require('./config/database');

const userRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const flightRouter = require('./routes/flights');
const itineraryRouter = require('./routes/itinerary');
const hotelsRouter = require('./routes/hotels');
const attractionsRouter = require('./routes/attractions')

const cors = require('cors')


app.use(cors());
app.use(logger('dev'));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/flights', flightRouter);
app.use('/api/itinerary', itineraryRouter);
app.use('/api/hotels', hotelsRouter)
app.use('/api/attractions', attractionsRouter)

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, ()=> {
  console.log(`Express is listening on port ${port}.`)
});
