const sha1 = require('sha1');
const jwt = require('jsonwebtoken')
const adminModel = require('../model/AdminModel');

class AdminServices{
    constructor( ) {}

    async insertAdmin(data){
        let encriptedpassword = sha1(data.adminPassword);
        console.log('encriptedpassword', encriptedpassword);
        let admindata = {
            adminName: data.adminName,
            adminID: data.adminID,
            adminContact: data.adminContact,
            password: encriptedpassword,
            role: 'local'
        }
        console.log('data', admindata);
        let result = await adminModel.insertAdmin(admindata);
        return result;
    }

    async loginAdmin(req){
        let response = {};
        let id = req.body.id;
        let password = sha1(req.body.password);
        let AdminData = await adminModel.loginAdmin(id);
        console.log('adminData', AdminData);
        if(AdminData){
            if(AdminData.adminPassword == password){
                let token = jwt.sign({
                    data: AdminData
                },process.env.JWT_SECRET_KEY);
                response.data = token
                console.log('token', token);
            }else {
                response.status = 203
                response.message = "Incorrect Password";
            }
        }else {
            response.status = 203
            response.message = "Invalid Email"
        };
        return response;
    }

    async getAllAdmin(){
        let result = await adminModel.getAllAdmin();
        return result;
    }

    async deleteAdmin(adminId){
        console.log('adminId', adminId);
        let result = await adminModel.deleteadmin(adminId);
        console.log('result', result);
        return result;
    }

    async getSingleAdmin(adminId){
        console.log('adminId', adminId);
        let result = await adminModel.getSingleAdmin(adminId);
        console.log('result', result);
        return result;
    }

    async blockAdmin(adminID, countdowndate){
        console.log('admiID', adminID);
        let result = await adminModel.blockAdminbyID(adminID, countdowndate);
        console.log('result', result);
        return result;
    }

    async unblockadmin(adminid){
        let result = await adminModel.unblockAdmin(adminid);
        return result;
    }

    async addmissionDate(req){
        const data = {
            yearName: req.body.academicyearName,
            year: req.body.academicyear,
            startDate: req.body.startDate,
            endDate: req.body.endDate
        };
        let result = await adminModel.insertaddmissionDate(data);
        return result;
    }

    async getAllAddmissiondata(){
        const date = 4  //when compleate this project write new Date().getMonth();
        console.log('getmonth', date);
        const yearName = 'addmissionDate'
        if(date < 5){
            const year = new Date().getFullYear() - 1;
            console.log('year', year);
            const title = yearName+year
            const result = await adminModel.getAddmissiondeteals(title);
            console.log('result', result);
            return result;
        }else {
            const year = new Date().getFullYear();
            const title = yearName+year
            const result = await adminModel.getAddmissiondeteals(title);
            console.log('result', result);
            return result
        }
        // console.log('year naem ', yearName+year);
    }
}

module.exports = new AdminServices();