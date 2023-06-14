const Operations = require('../../common/db_operations/operations');
const orderModel = require('../../common/schemas/orderSchema');

class Order {

    constructor(){}

    async insertOrder(req, res, next){
        const body = req.body;
        if(!Object.keys(body).length){
            res.send('Erro ao carregar body')
            return
        }

        const client_email = body.client_email;

        try{
            const result = await Operations.insert(orderModel, {client_email});
            res.send({resultado: result});
            return;
        }catch(err){
            res.send({erro: err});
            return;
        }
    }

    async findOrder(req, res, next){
        try{
            let params = req.query;
            let result = await Operations.get(orderModel, params);
            res.send({result});
            return;
        }catch(err){
            res.send({erro: err});
            return;
        }
    }

    async updateOrder(req, res, next){
        try{
            let body = req.body;
            if(!Object.keys(body).length){
                res.send('Erro ao carregar body')
                return;
            }else{
                let client_email = body.client_email;
                let result = await Operations.update(orderModel, {client_email}, body);
                res.send({result});
                return;
            }
        }catch(err){
            res.send({error: err})
            return;
        }
    }

    async deleteOrder(req, res, next){
        try{
            let body = req.body;
            if(!Object.keys(body).length){
                res.send('Erro ao carregar body')
                return;
            }else{
                let client_email = body.client_email;
                let result = await Operations.delete(orderModel, {client_email});
                res.send({result});
                return;
            }
        }catch(err){
            res.send({error: err})
            return;
        }
    }
}

module.exports = new Order();