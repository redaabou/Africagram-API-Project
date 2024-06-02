const Joi = require('joi');

exports.commentValidator = async (req, res, next) => {
    const schema = Joi.object({
        message: Joi.string()
            .required()
            .messages({
                'string.base': `"message" should be a type of 'text'`,
                'string.empty': `"message" cannot be an empty field`,
                'any.required': `"message" is a required field`
            })
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};