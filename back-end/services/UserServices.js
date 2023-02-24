const userModel = require('../model/UserModel');
const sha1 = require('sha1');
const jwt = require('jsonwebtoken')

class UserServices{
    constructor() {}

    async insertUser(req){
        let encriptedpassword = sha1(req.body.password);
        console.log('encriptedpassword', encriptedpassword);
        let data = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            fatherName: req.body.fatherName,
            motherName: req.body.motherName,
            age: req.body.age,
            dob: req.body.dob,
            gender: req.body.gender,
            category: req.body.category,
            destrict: req.body.destrict,
            city: req.body.city,
            class: req.body.class,
            previousclass: req.body.previousclass,
            persentage: req.body.persentage,
            marks: req.body.marks,
            year: req.body.year,
            email: req.body.email,
            contact: req.body.contact,
            password: encriptedpassword,
        }
        console.log('data', data);
        let result = await userModel.insertUser(data);
        return result;
    }

    async loginuser(req){
        let response = {};
        const email = req.body.email;
        const password = sha1(req.body.password);
        let userdata = await userModel.getuserdata(email);
        if(userdata){
            if(userdata.password == password){
                let token = jwt.sign({
                    data: userdata
                },process.env.JWT_SECRET_KEY);
                response.data = token
                console.log('token', token);
            } else {
                response.status = 203
                response.message = "Incorrect Password"
            }
        }else {
            response.status = 203
            response.message = "Invalid Email"
        };
        return response;
    }

    async getallusers(){
        let result = await userModel.getalluser()
        console.log('result', result)
        return result;
    }

    async getSingleUser(id){
        let result = await userModel.getSingleUser(id);
        return result;
    }
}

module.exports = new UserServices();