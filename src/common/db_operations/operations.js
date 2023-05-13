class Operations{

    constructor(){}

    async insert(model, data){
        try{
            const schema = new model(data);
            return await schema.save();
        }catch(err){
            throw err;
        }
    }

    async get(schema, data = {}){
        try{
            return await schema.find(data, {_id:0, __v:0 }).lean();
        }catch(err){
            throw err;
        }
    }

    async update(schema, condition, data){
        try{
            return await schema.updateOne(condition, {$set:data});
        }catch(err){
            throw err
        }
    }
    
    async delete(schema, data){
        try{
            return await schema.deleteOne(data);
        }catch(err){
            throw err
        }
    }
}

module.exports = new Operations();