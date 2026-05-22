const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Le nom du produit est obligatoire'],
    trim: true,
    minlength: [2, 'Le nom doit contenir au moins 2 caractères']
  },
  price: {
    type: Number,
    required: [true, 'Le prix est obligatoire'],
    min: [0, 'Le prix ne peut pas être négatif']
  },
  description: {
    type: String,
    trim: true
  },
  category: {
    type: String,
    enum: ['Électronique', 'Vêtements', 'Alimentation', 'Livres', 'Autres'],
    default: 'Autres'
  },
  inStock: {
    type: Boolean,
    default: true
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0
  },
  tags: [String],
  imageUrl: {
    type: String,
    default: 'https://via.placeholder.com/300x200'
  }
}, {
  timestamps: true
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;