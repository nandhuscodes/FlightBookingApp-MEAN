const mongoose = require("mongoose");
const db = 'mongodb://127.0.0.1:27017/flight-booking';
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));