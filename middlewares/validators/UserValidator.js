const Joi = require('joi');



exports.userValidator =  (req, res, next) => {

  const schema = Joi.object({
    firstname: Joi.string().regex(/^[A-Za-z]+$/).min(3).max(30).required(),
    lastname: Joi.string().regex(/^[A-Za-z]+$/).min(3).max(30).required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    email: Joi.string().email().required()
}).messages({
    'string.base': `"a" should be a type of 'text'`,
    'string.empty': `"a" cannot be an empty field`,
    'string.min': `"a" should have a minimum length of {#limit}`,
    'string.max': `"a" should have a maximum length of {#limit}`,
    'any.required': `"a" is a required field`
});

    const { error } = schema.validate(req.body);

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    next();
};