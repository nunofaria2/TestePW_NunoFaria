const productsRouter = require('express').Router();
const controller = require('../controllers/products');
const authMiddleware = require('../middlewares/auth/auth');

// Error-handling middleware
productsRouter.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Erro');
});

// Route for getting all products
productsRouter.get('/', authMiddleware, controller.getAllProducts);

// Route for getting a product by ID
productsRouter.get('/:id', authMiddleware, controller.getProductById);

// Route for creating a new product
productsRouter.post('/', authMiddleware, controller.createProduct);

// Route for updating a product
productsRouter.put('/:id', authMiddleware, controller.updateProduct);

// Route for deleting a product
productsRouter.delete('/:id', authMiddleware, controller.deleteProduct);

module.exports = productsRouter;