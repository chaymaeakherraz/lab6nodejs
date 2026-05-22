const productService = require('../services/productService');

const categories = ['Électronique', 'Vêtements', 'Alimentation', 'Livres', 'Autres'];

exports.getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();

    res.render('products/index', {
      title: 'Liste des produits',
      products
    });
  } catch (error) {
    res.status(500).render('error', {
      title: 'Erreur',
      message: error.message
    });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await productService.getProductById(req.params.id);

    res.render('products/details', {
      title: product.name,
      product
    });
  } catch (error) {
    res.status(404).render('error', {
      title: 'Produit non trouvé',
      message: error.message
    });
  }
};

exports.showCreateForm = (req, res) => {
  res.render('products/create', {
    title: 'Ajouter un produit',
    categories,
    product: {},
    error: null
  });
};

exports.createProduct = async (req, res) => {
  try {
    const data = {
      ...req.body,
      inStock: req.body.inStock === 'on',
      tags: req.body.tags ? req.body.tags.split(',').map(tag => tag.trim()) : []
    };

    const product = await productService.createProduct(data);
    res.redirect(`/products/${product._id}`);
  } catch (error) {
    res.status(400).render('products/create', {
      title: 'Ajouter un produit',
      categories,
      product: req.body,
      error: error.message
    });
  }
};

exports.showEditForm = async (req, res) => {
  try {
    const product = await productService.getProductById(req.params.id);

    res.render('products/edit', {
      title: 'Modifier le produit',
      categories,
      product,
      error: null
    });
  } catch (error) {
    res.status(404).render('error', {
      title: 'Erreur',
      message: error.message
    });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const data = {
      ...req.body,
      inStock: req.body.inStock === 'on',
      tags: req.body.tags ? req.body.tags.split(',').map(tag => tag.trim()) : []
    };

    const product = await productService.updateProduct(req.params.id, data);
    res.redirect(`/products/${product._id}`);
  } catch (error) {
    res.status(400).render('products/edit', {
      title: 'Modifier le produit',
      categories,
      product: { ...req.body, _id: req.params.id },
      error: error.message
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await productService.deleteProduct(req.params.id);
    res.redirect('/products');
  } catch (error) {
    res.status(404).render('error', {
      title: 'Erreur',
      message: error.message
    });
  }
};