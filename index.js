require('dotenv/config');
const mongoose = require('mongoose');
const bd_conn = require('./src/bd/connection');

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

require('./src/routes')(app);

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
    bd_conn.connect()
        .then((data)=>{
            console.log(`Connected on db ${data.url}`.replace(process.env.DB_PASS,'****'));
        })
        .catch((err)=>{
            console.log(`Não foi possível conectar a ${err.url}.`);
            console.log(err);
        });   
});

module.exports = app;