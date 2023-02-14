const { Router } = require('express');
const routes = Router();
const LoginService = require('./loginService')

routes.get('/getToken', (req, res, next) => {
    LoginService.login(req, res, next)
});

routes.post('/validate', (req, res, next) => {
    LoginService.validateToken(req, res, next)
});

module.exports = routes;