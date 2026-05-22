const Product = require('../models/product');

exports.createProduct = async (data) => {
  const product = new Product(data);
  return await product.save();
};

exports.getAllProducts = async () => {
  return await Product.find().sort({ createdAt: -1 });
};

exports.getProductById = async (id) => {
  const product = await Product.findById(id);

  if (!product) {
    throw new Error('Produit non trouvé');
  }

  return product;
};

exports.updateProduct = async (id, data) => {
  const product = await Product.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true
  });

  if (!product) {
    throw new Error('Produit non trouvé');
  }

  return product;
};

exports.deleteProduct = async (id) => {
  const product = await Product.findByIdAndDelete(id);

  if (!product) {
    throw new Error('Produit non trouvé');
  }

  return product;
};