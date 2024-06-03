const productsRouter = require('express').Router();
const controller = require('../controllers/products');
const authMiddleware = require('../middlewares/auth/auth');

productsRouter.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Erro');
});

productsRouter.get('/', authMiddleware, controller.getAllProducts);

productsRouter.get('/:id', authMiddleware, controller.getProductById);

productsRouter.post('/', authMiddleware, controller.createProduct);

productsRouter.put('/:id', authMiddleware, controller.updateProduct);

productsRouter.delete('/:id', authMiddleware, controller.deleteProduct);

module.exports = productsRouter;