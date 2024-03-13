const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const placesRoutes = require('./routes/places-routes');
const usersRoutes = require('./routes/users-routes');
const HttpError = require('./models/http-error');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  next();
});

app.use('/api/places', placesRoutes);
app.use('/api/users', usersRoutes);

app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || 'An unknown error occurred!' });
});

  const connectUrl = 'mongodb+srv://hysaryn:project123@cluster0.fzfnw7g.mongodb.net/?retryWrites=true&w=majority';
 
  const connectConfig = { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true 
  }
   
  mongoose.connect(connectUrl, connectConfig)
    .then(() => {
      console.log('+++ Database connected! +++');
      app.listen(5050);
    })
    .catch(err => {
      console.log(err);
    });
  