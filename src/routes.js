module.exports = (app) => {
    app.use('/', require('./healthcheck'));
    app.use('/login', require('./login/login'));
    app.use('/client', require('./modules/client/clientController'));
}