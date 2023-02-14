const axios = require('axios');
class LoginService{

    constructor(){}

    async login(req, res, next){
        
        // const code = req.body.code ? req.body.code : null;
        const code = req.query.code ? req.query.code : null;
        if(!code){
            res.status(200).send('Erro ao recuperar code.');
            return;
        }
        try{
            const { GITHUB_ACCESS_TOKEN_URL, REDIRECT_URL, CLIENT_ID, CLIENT_SECRET } = process.env
            const body = {
                code,
                grant_type: 'authorization_code',
                redirect_uri: REDIRECT_URL,
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET
            }

            const { data } = await axios.post(GITHUB_ACCESS_TOKEN_URL, body, {
                headers: {
                    'Content-type': 'application/json'
                }
            });
            
            let params = new URLSearchParams(data);
            const token = params.get('access_token');
            res.send(token);
            return;
           
        }catch(err){
            console.log(err);
            res.status(500).send(`Erro ao tentar resgatar informações do body.`);
            return;
        }
    }

    async validateToken(req, res, next){
        const token = req.headers.authorization
        if(token){
            try{
                const GITHUB_ENDPOINT = process.env.USER_ENDPOINT;
                const response = await axios.get(GITHUB_ENDPOINT, {
                        headers: {
                        Authorization: token,
                    },
                });
                
                console.log("Token validado com sucesso.");
                res.status(response.status).send(response.statusText);
                return;
            }catch(err){
                console.log(err);
                if(err.response){
                    if(err.response.status === 401){
                        res.status(401).send("Token inválido.");
                        return;
                    }
                }
                res.send(`Erro ao validar token. ${err.code}`);
                    return;
            }
        }
        res.send('Erro ao recuperar token.');
        return;
    }

}

module.exports = new LoginService();