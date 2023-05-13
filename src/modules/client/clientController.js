const { Router } = require('express');
const routes = Router();
const Client = require('./clientService');

routes.post('/', (req, res, next) => {
    Client.insertClient(req, res, next);
});

routes.get('/', (req, res, next) => {
   Client.getClient(req, res, next);
});

routes.put('/', (req, res, send) => {
    Client.updateClient(req, res, send)
});

routes.delete('/', (req, res, next) => {
    Client.deleteClient(req, res, next);
})

module.exports = routes;