//Validator
import Joi from "@hapi/joi";

//Register Validation

const registerValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string()
            .min(6)
            .required(),
        email: Joi.string()
            .email()
            .min(14)
            .required(),
        password: Joi.string()
            .min(6)
            .required()
    });

    return schema.validate(data);
};

//Login Validation
const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string()
            .email()
            .min(6)
            .required(),
        password: Joi.string()
            .min(6)
            .required()
    });
    return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
