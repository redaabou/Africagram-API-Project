const Joi = require('joi');
const asyncHandler = require('express-async-handler')

exports.PostValidator = asyncHandler(async(req,res,next)=>{
    
    const postSchema = Joi.object({
        utilisateur_id: Joi.number().positive().messages({
            'number.base': '"id" should be a type of number',
            'number.integer': '"id" should be an integer',
            'number.positive': '"id" should be a positive number',
          }),
          caption: Joi.string().required().messages({
          'string.base': '"caption" should be a type of string',
        }),
        image_url: Joi.string().max(750).required()
        .messages({
          'string.base': '"image_url" should be a type of string',
          'string.max': '"image_url" should have a maximum length of 750 characters',
        }),
    })
    const validation = postSchema.validate(req.body, { abortEarly: false });

    if (validation.error) {
      validation.error.details.forEach(err => {
    return res.send(err.message);
      });
    } else {
      console.log('Validation successful');
    }

    next()
})


