const joi = require('joi');

class AdminValidation{
    constructor() {}

    createAdminValidation(req){
        let response = {
            status: "success",
            message: null
        }
        let insertadminSchema = joi.object({
            adminName: joi.string().required(),
            adminContact: joi.string().length(10).pattern(/^[0-9]+$/).required(),
        });
        let validate = insertadminSchema.validate(req.body);
        console.log('validate', validate);
        if(validate && validate.error && validate.error.details){
            response.status = "Error",
            response.message = validate.error.details[0].message;
        };
        return response;
    }
}

module.exports = new AdminValidation();