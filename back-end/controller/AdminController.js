const adminValidation = require('../Validation/AdminValidation');
const AdminServices = require('../services/AdminServices');
const jwt = require('jsonwebtoken');

class AdminController{
    constructor() {}

    async createAdmin(req, res){
        console.log('req.body', req.body);
        let validate = await adminValidation.createAdminValidation(req);
        if(validate && validate.status && validate.status == "Error"){
            let response = {
                message: validate.message
            };
            res.statusCode = 203 //non authoritative information
            res.json(response);
            return false;
        }
        let AdminName = req.body.adminName;
        let adminContact = req.body.adminContact;
        const adminName = AdminName.split(' ');
        console.log('adminID', adminName);
        // /create ID
        const Admin = adminName[0].toUpperCase();
        console.log('adminId', Admin);
        let admin1 = Admin.charAt('0');
        let admin2 = Admin.charAt('1');
        let admin3 = Admin.charAt('2');
        let adminCo1 = adminContact.charAt('0');
        let adminCo2 = adminContact.charAt('1');
        let logicNu = Math.floor(Math.random() * 10000);
        console.log('logicnu', logicNu)
        console.log('adminIDd', admin1+adminCo1+adminCo2+admin2+logicNu+admin3);
        const AdminID = admin1+adminCo1+adminCo2+admin2+logicNu+admin3;
        // create password
        const adminpass = adminName[0].toLowerCase();
        console.log('adminpass', adminpass);
        let pass1 = adminpass.charAt('0');
        let pass2 = adminpass.charAt('1');
        let pass3 = adminpass.charAt('2');
        let logic = Math.floor(Math.random() * 1000);
        console.log('password', pass1+ pass2+ logic+pass3);

        const password = pass1+pass2+logic+pass3;
        console.log('adminid and pass', AdminID, password);
        let Admindata = {
            adminName: AdminName,
            adminContact: adminContact,
            adminID: AdminID,
            adminPassword: password
        }

        let result = await AdminServices.insertAdmin(Admindata);
            if(result && result == true){
                let response = {
                    message: "Admin created",
                    Id: AdminID,
                    Password: password
                }
                res.statusCode = 200
                res.json(response);
            }else {
                let response = {
                    message: "invalid data"
                }
                res.statusCode = 203
                res.json(response);
            }

    }

    async adminSignIn(req, res){
        console.log('req.body', req.body);
        let result = await AdminServices.loginAdmin(req);
        console.log('result', result);
        let response = {};
        if(result && result.status && result.status == 203){
            response.message = result.message;
            res.statusCode = 203
            res.json(response);
        }else {
            response = result;
            res.json(response);
        };
    }

    async allAdmin(req, res){
        let response = {};
        let result = await AdminServices.getAllAdmin();
        if(result){
            response = result;
        }
        response.statusCode = 200
        res.json(response);
    }

    async deleteAdmin(req, res){
        console.log('req.params', req.params);
        let adminID = req.params.adminID;
        console.log('adminid', adminID);
        let result = await AdminServices.deleteAdmin(adminID);
        if(result){
            let response = {
                message: "user deleted"
            };
            res.statusCode = 200;
            res.json(response);
        }
    }

    async getSingleAdmin(req, res){
        console.log('pankesh.params', req.params);
        let adminID = req.params.adminID;
        console.log('adminid', adminID);
        let result = await AdminServices.getSingleAdmin(adminID);
        if(result){
            let response = result;
            res.statusCode = 200
            res.json(response);
        };
    };

    async blockAdmin(req, res){
        console.log('pawan.params', req.params);
        let adminId = req.params.adminID;
        const countdowndate = req.body.countdowndate;
        console.log('coundowndate', countdowndate);
        let result = await AdminServices.blockAdmin(adminId, countdowndate);
        if(result && result == true){
            let response = {
                message: "updated"
            };
            res.statusCode = 200
            res.json(response);
        };
    };

    async unblockAdmin(req, res){
        console.log('pawan.params', req.params);
        let adminID = req.params.adminID;
        let result = await AdminServices.unblockadmin(adminID);
        if(result && result == true){
            let response = {
                message: "unblocked successfully"
            };
            res.statusCode = 200
            res.json(response);
        }
    }

    getAdminDetealsbyToken(req, res){
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
                    console.log('pawna vishwakramrama');
                    const id = user.id;
                    console.log('again pawan vishwakarma')
                    let result = await AdminServices.getSingleAdmin(id);
                    console.log('result pawan vishwakarma', result);
                    let response = result;
                    res.json(response);
                };
            });
        };
    }

    async insertaddmissiondate(req, res){
        console.log('req.body', req.body);
        let result = await AdminServices.addmissionDate(req);
        if(result == true){
            let response = result;
            res.statusCode = 200
            res.json(response);
        }
    }

    async getaddmissiondata(req, res){
        console.log('my name is pawan vishwakarma');
        const result = await AdminServices.getAllAddmissiondata();
        console.log('controller result', result);
        let response = {};
        if(result){
            response = result;
            res.statusCode = 200
            res.json(response);
        }else {
            response.message = "not available Data"
            res.statusCode = 204
            res.json(response);
        }
    }




    //panding work



};

module.exports = new AdminController();