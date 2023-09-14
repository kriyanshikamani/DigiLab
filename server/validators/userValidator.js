
const Joi = require('joi');

exports.createUser = (req, res, next) => {
    const schema = Joi.object({ 
        firstname: Joi.string().required(),
        lastname: Joi.string().required(),
        gender: Joi.string().required(),
        age: Joi.number().required(),
        email: Joi.string().email().required(),
        phone: Joi.number().required(),
        address: Joi.string().required(),
    });

    validateRequest(req, res, next, schema);
};

exports.updateUser = (req, res, next) => {
    const schema = Joi.object({ 
        firstname: Joi.string().required(),
        lastname: Joi.string().required(),
        gender: Joi.string().required(),
        age: Joi.number().required(),
        email: Joi.string().email().required(),
        phone: Joi.number().required(),
        address: Joi.string().required(),
    });

    validateRequest(req, res, next, schema);
};

function validateRequest(req, res, next, schema) {
    const { error, value } = schema.validate(req.body);
    if (error) {
        const errorMessage = error.details.map((detail) => detail.message).join(', ');
        return res.status(400).json({ error: errorMessage });
    }

    req.body = value;
    next();
}
