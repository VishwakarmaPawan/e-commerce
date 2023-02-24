const joi = require('joi');

class UserValidation{
    constructor() {}

    insertUserValidation(req){
        let response = {
            status: "success",
            message: null
        }
        let insertuserSchema = joi.object({
            firstName: joi.string().required(),
            lastName: joi.string().required(),
            fatherName: joi.string().required(),
            motherName: joi.string().required(),
            age: joi.number().min(5).max(20).required(),
            dob: joi.date().raw().required(),
            gender: joi.string().required(),
            category: joi.string().required(),
            destrict: joi.string().required(),
            city: joi.string().required(),
            class: joi.string().required(),
            previousclass: joi.string().required(),
            persentage: joi.number().required(),
            marks: joi.number().required(),
            year: joi.string().required(),
            email: joi.string().email().required(),
            contact: joi.string().length(10).pattern(/^[0-9]+$/).required(),
            password: joi.string().required().min(8).max(20)
        });
        let validate = insertuserSchema.validate(req.body);
        console.log('validate', validate);
        if(validate && validate.error && validate.error.details){
            response.status = "Error",
            response.message = validate.error.details[0].message;
        };
        return response;
    }
}

module.exports = new UserValidation();