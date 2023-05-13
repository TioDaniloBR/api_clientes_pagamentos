const mongoose = require('mongoose');

class Bd_Connection{

    constructor(){
        this.dbConfig = require('./db_config');
    }

    connect(){
        return new Promise((resolve, reject)=>{
            let connectionUrl = this._getDbConnectionUrl();
            mongoose.set('strictQuery', false)
            mongoose.connect(connectionUrl)
                .then(()=>{
                    resolve({success:true, url: connectionUrl});
                })
                .catch((err)=>{
                    reject({success:false, url:connectionUrl, message:err.message});
                });
        });
    }

    _getDbConnectionUrl(){
        if(this.dbConfig.dbAuth){
            let url = `mongodb+srv://${this.dbConfig.dbUser}:${this.dbConfig.dbPass}@${this.dbConfig.dbHost}/${this.dbConfig.dbName}`;
            return url;
        }
        let url = `mongodb://${this.dbConfig.dbHost}:${this.dbConfig.dbPort}/${this.dbConfig.dbName}`;
        return url;
    }
    
}

module.exports = new Bd_Connection();
//como utilizar middleware para authenticar rotas