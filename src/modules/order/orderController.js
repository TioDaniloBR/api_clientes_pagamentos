const { Router } = require('express');
const routes = Router();
const Order = require('./orderService');

routes.post('/', (req, res, next) => {
    Order.insertOrder(req, res, next);
});

routes.get((req, res, next) => {
    Order.getOrder(req, res, next);
});

routes.put((req, res, next) => {
    Order.updateOrder(req, res, next);
});

routes.delete((req, res, next) => {
    Order.deleteOrder(req, res, next);
});

module.exports = routes;