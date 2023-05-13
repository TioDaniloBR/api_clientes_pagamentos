const ClientModel = require('../../common/schemas/clientSchema');
const Operations = require('../../common/db_operations/operations');

class Client{
    constructor(){}

    async insertClient(req, res, next){
        const body = req.body;
        if(!Object.keys(body).length){
            res.send('Erro ao carregar body')
            return
        }
        let name = body.name;
        let email = body.email;
        let address = body.address;
        let phone = body.phone;

        let client = {
            name,
            email,
            address,
            phone
        };

        try{
            //const schema = new ClientModel(client);
            let result = await Operations.insert(ClientModel, client);
            res.send({resultado: result});
            return;
        }catch(err){
            res.send({erro: err});
            return;
        }
    }

    async getClient(req, res, next){
        try{
            let params = req.query;
            let result = await Operations.get(ClientModel, params);
            res.send({result});
            return;
        }catch(err){
            res.send({erro: err});
            return;
        }
    }

    async updateClient(req, res, next){
        try{
            let body = req.body;
            if(!Object.keys(body).length){
                res.send('Erro ao carregar body')
                return;
            }else{
                let email = body.email;
                let result = await Operations.update(ClientModel, {email}, body);
                res.send({result});
                return;
            }
        }catch(err){
            res.send({error: err})
            return;
        }
    }

    async deleteClient(req, res, next){
        try{
            let body = req.body;
            if(!Object.keys(body).length){
                res.send('Erro ao carregar body')
                return;
            }else{
                let email = body.email;
                let result = await Operations.delete(ClientModel, {email});
                res.send({result});
                return;
            }
        }catch(err){
            res.send({error: err})
            return;
        }
    }
}

module.exports = new Client();