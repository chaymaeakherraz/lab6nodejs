const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, {
  serverSelectionTimeoutMS: 5000
})
  .then(() => {
    console.log('Connexion MongoDB réussie');
  })
  .catch((err) => {
    console.error('Erreur MongoDB:', err.message);
  });

module.exports = mongoose;