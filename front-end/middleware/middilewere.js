const { default: axios } = require("axios");

class middleware{
    constructor(){ }

    async checkbackdoorentry(req, res, next){
        req.isuserLoggedin = false;
        if(req.cookies && req.cookies.token){
            req.isuserLoggedin = true;
            const endpoint = `http://localhost:3004/user`;
            const token = req.cookies.token;
            let headerRequest = {
                headers : {
                    authorization: token
                }
            };
            let result = await axios.get(endpoint, headerRequest);
            console.log('result token', result);
            req.loggedInUserData = result.data;
        }else {
            console.log('cookie are not found');
        };
        next();
    }

    async checkbackdoorentryAdmin(req, res, next){
        req.isAdminLoggedin = false;
        if(req.cookies && req.cookies.token){
            req.isAdminLoggedin = true;
            const endpoint = `http://localhost:3004/admin`;
            const token = req.cookies.token;
            let headerRequest = {
                headers : {
                    authorization: token
                }
            };
            let result = await axios.get(endpoint, headerRequest);
            console.log('result token your pawan vishwakarma', result);
            req.loggedInAdminData = result.data;
            next()
        }else {
            console.log('cookie are not found');
            next();
        };
    }

    checkuserIsFalse(req, res, next){
        if(req.isuserLoggedin == false){
            next()
        }else {
            res.redirect('/')
        }
    }
}

module.exports = new middleware();