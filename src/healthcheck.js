const { Router } = require('express');
const routes = Router();

routes.get('/healthcheck', (req, res, next) => {
    res.send("API online.");
});

module.exports = routes;