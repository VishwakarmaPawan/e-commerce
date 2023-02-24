const jwt = require('jsonwebtoken');
const userValidation = require('../Validation/UserValidation');
const UserServices = require('../services/UserServices');

class UserController{
    constructor() {}

    async insertUser(req, res){
        console.log('req.body', req.body);
        let validate = await userValidation.insertUserValidation(req);
        if(validate && validate.status && validate.status == "Error"){
            let response = {
                message: validate.message
            };
            res.statusCode = 203 //non authoritative information
            res.json(response);
            return false;
        }
        await UserServices.insertUser(req);
            let response = {
                message: "user created"
            }
            res.statusCode = 200
            res.json(response);
    }

    async loginuser(req, res){
        console.log('req.body', req.body);
        let result = await UserServices.loginuser(req);
        let response = {};
        if(result && result.status && result.status == 203){
            response.message = result.message;
            res.statusCode = 203
            res.json(response);
        } else {
            response = result;
            res.json(response);
        };
    }

    getUserdeteals(req, res){
        if(req.headers && req.headers.authorization){
            const auth = req.headers.authorization;
            const token = auth.split(' ').splice(-1).toString();
            jwt.verify(token, process.env.JWT_SECRET_KEY, async function(error, decoded){
                if(error){
                    res.statusCode = 401
                    let response = {
                        message: "Invalid token"
                    };
                    res.json(response);
                }else{
                    const user = decoded.data;
                    let response = user;
                    res.json(response);
                };
            });
        };
    };

    async getalluser(req, res){
        let result = await UserServices.getallusers();
        if(result && result.length > 0){
            let response = {
                data: result
            };
            res.statusCode = 200
            res.json(response);
        }

    }

    async getSingleUser(req, res){
        console.log('req.params', req.params);
        let id = req.params.userID;
        let result = await UserServices.getSingleUser(id);
        let response = result;
        res.statusCode = 200
        res.json(response);
    }
}

module.exports = new UserController();